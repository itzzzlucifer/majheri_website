# Booking Form Backend Setup Guide

This guide explains how to set up the booking form backend using Resend for email notifications.

## 📋 Overview

The booking form now uses:

- **Next.js API Routes** for serverless backend
- **Resend** for email delivery (100 emails/day free)
- **Environment variables** for secure configuration

## 🚀 Setup Steps

### 1. Install Dependencies ✅

Already completed! We installed the `resend` package.

```bash
npm install resend
```

### 2. Get Your Resend API Key

1. Go to [https://resend.com/signup](https://resend.com/signup)
2. Sign up for a free account
3. Verify your email
4. Navigate to **API Keys** in the dashboard
5. Click **Create API Key**
6. Copy the API key (starts with `re_`)

### 3. Create `.env.local` File

Create a file named `.env.local` in your project root:

```env
# Resend API Key
RESEND_API_KEY=re_your_actual_api_key_here

# Restaurant Email (where bookings will be sent)
RESTAURANT_EMAIL=your-email@example.com
```

**Important:** Replace the values with your actual API key and email!

### 4. Verify Domain (Optional but Recommended)

For production use:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `dabalirestaurant.com`)
4. Add the DNS records to your domain provider
5. Wait for verification

Once verified, update the `from` field in `app/api/booking/route.ts`:

```typescript
// Change from
from: 'Dabali Bookings <onboarding@resend.dev>',

// To
from: 'Dabali Bookings <reservations@yourdomain.com>',
```

### 5. Test the Form

1. Start your dev server:

```bash
npm run dev
```

2. Navigate to the booking section on your website
3. Fill out the booking form
4. Submit the form
5. Check your inbox for the email!

## 📁 What We Created

### `/app/api/booking/route.ts`

- API endpoint that handles POST requests
- Validates form data
- Sends formatted HTML emails using Resend
- Returns success/error responses

### Updated `/app/components/BookingSection.tsx`

- Now makes real API calls instead of simulated ones
- Shows success message when booking is confirmed
- Shows error message if something goes wrong
- Automatically resets the form after successful submission

## 📧 Email Features

The system sends **2 emails** for each booking:

### 1. To Restaurant Owner

- Contains full booking details
- Guest information (name, email, phone)
- Reservation details (date, time, number of guests)
- Special requests/notes

### 2. To Customer

- Confirmation email
- Thanks the customer
- Shows their booking details
- Reassures them you'll be in touch

## 🔒 Security

- ✅ API keys stored in `.env.local` (gitignored)
- ✅ Server-side email sending (keys never exposed to client)
- ✅ Input validation on the API route
- ✅ Email format validation
- ✅ Error handling for failed submissions

## 🎨 Customization

### Change Email Template

Edit `app/api/booking/route.ts` and modify the `bookingDetails` HTML string.

### Add More Fields

1. Add field to `formData` in `BookingSection.tsx`
2. Update the `BookingData` interface in `route.ts`
3. Include the new field in the email template

### Change Email Address

Update `RESTAURANT_EMAIL` in `.env.local`

## 🐛 Troubleshooting

### Emails not sending?

- Check your Resend API key is correct
- Verify `.env.local` file exists and is in the project root
- Restart your dev server after adding environment variables

### Getting 500 errors?

- Check the browser console and server logs for error messages
- Ensure all required form fields are filled
- Verify the email format is valid

### Emails going to spam?

- Verify your domain in Resend
- Add SPF/DKIM records to your DNS
- Use a proper `from` email address (not `onboarding@resend.dev`)

## 📊 Usage Limits

**Resend Free Tier:**

- 100 emails/day
- 1 verified domain
- Email history for 30 days

For higher volumes, upgrade to a paid plan.

## 🎉 Next Steps

- [ ] Set up `.env.local` with your Resend API key
- [ ] Test the booking form
- [ ] (Optional) Verify your custom domain
- [ ] Customize email templates to match your branding
- [ ] Consider adding booking data to a database for record-keeping

## 💡 Future Enhancements

Consider adding:

- **Google Sheets integration** - Store bookings in a spreadsheet
- **Calendar integration** - Add events to Google Calendar
- **SMS notifications** - Via Twilio
- **Database storage** - PostgreSQL/MongoDB for booking management
- **Admin dashboard** - View and manage all bookings
