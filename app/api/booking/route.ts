import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the type for our booking data
interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

/**
 * POST /api/booking
 * Handles restaurant booking form submissions
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body: BookingData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.date || !body.time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Format the booking details for the email
    const bookingDetails = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c3e50; border-bottom: 3px solid #e67e22; padding-bottom: 10px;">
          New Table Reservation
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #e67e22; margin-top: 0;">Guest Information</h3>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone}</p>
        </div>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #e67e22; margin-top: 0;">Reservation Details</h3>
          <p><strong>Date:</strong> ${new Date(body.date).toLocaleDateString(
            "en-US",
            {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}</p>
          <p><strong>Time:</strong> ${body.time}</p>
          <p><strong>Number of Guests:</strong> ${body.guests}</p>
        </div>

        ${
          body.message
            ? `
        <div style="background-color: #fff4e6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #e67e22; margin-top: 0;">Special Requests</h3>
          <p style="white-space: pre-wrap;">${body.message}</p>
        </div>
        `
            : ""
        }

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>This booking was submitted through your website booking form.</p>
        </div>
      </div>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Dabali Bookings <onboarding@resend.dev>", // You'll change this later
      to: [process.env.RESTAURANT_EMAIL || "your-restaurant@example.com"],
      subject: `New Reservation: ${body.name} - ${new Date(
        body.date
      ).toLocaleDateString()}`,
      html: bookingDetails,
      // Also send a copy to the customer
      replyTo: body.email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send booking confirmation" },
        { status: 500 }
      );
    }

    // Optional: Send confirmation email to the customer
    try {
      await resend.emails.send({
        from: "Dabali Restaurant <onboarding@resend.dev>",
        to: [body.email],
        subject: "Reservation Confirmation - Dabali Restaurant",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2c3e50;">Thank You for Your Reservation!</h2>
            <p>Dear ${body.name},</p>
            <p>We have received your reservation request for:</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <p><strong>Date:</strong> ${new Date(
                body.date
              ).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</p>
              <p><strong>Time:</strong> ${body.time}</p>
              <p><strong>Guests:</strong> ${body.guests}</p>
            </div>
            <p>Our team will confirm your reservation shortly. If you have any questions, please don't hesitate to contact us.</p>
            <p style="margin-top: 30px;">Best regards,<br><strong>Dabali Restaurant Team</strong></p>
          </div>
        `,
      });
    } catch (customerEmailError) {
      // Don't fail the request if customer email fails
      console.error(
        "Failed to send customer confirmation:",
        customerEmailError
      );
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Booking submitted successfully",
        bookingId: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
