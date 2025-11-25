# EmailJS Setup Guide for Booking Form

This guide will walk you through setting up EmailJS to handle your restaurant booking form submissions.

## 🎯 Why EmailJS?

- ✅ **Completely FREE** - 200 emails/month forever
- ✅ **No backend needed** - Sends directly from the frontend
- ✅ **Super simple setup** - Takes 5 minutes
- ✅ **No domain required** - Works with any email
- ✅ **Professional emails** - Customizable templates

---

## 📝 Step-by-Step Setup

### **Step 1: Create EmailJS Account** (2 min)

1. Go to [https://www.emailjs.com/](https://www. emailjs.com/)
2. Click **Sign Up** (top right)
3. Register with your email or Google account
4. Verify your email

### **Step 2: Add Email Service** (1 min)

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended
     for personal)
   - **Outlook**
   - **Yahoo**
   - Or any other provider
4. Click **Connect Account** and authorize EmailJS
5. **Copy the Service ID** (e.g., `service_abc123`)

### **Step 3: Create Email Template** (2 min)

1. Go to **Email Templates** in the sidebar
2. Click **Create New Template**
3. **Delete the default content** and paste this template:

```
New Restaurant Booking - {{from_name}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GUEST INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

RESERVATION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: {{date}}
Time: {{time}}
Number of Guests: {{guests}}

SPECIAL REQUESTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This booking was submitted through your website.
Reply-To: {{reply_to}}
```

4. **Set the email fields:**

   - **To Email**: Enter YOUR restaurant email (where you'll receive bookings)
   - **From Name**: `Dabali Restaurant Booking`
   - **Subject**: `New Booking: {{from_name}} - {{date}}`
   - **Reply-To**: `{{reply_to}}`

5. Click **Save**
6. **Copy the Template ID** (e.g., `template_xyz789`)

### **Step 4: Get Your Public Key** (30 sec)

1. Go to **Account** → **General** in the sidebar
2. Find **Public Key** section
3. **Copy your Public Key** (e.g., `abcDefGH123456789`)

### **Step 5: Update Environment Variables**

Open (or create) `.env.local` in your project root and add:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcDefGH123456789
```

**Replace with your actual IDs from Steps 2, 3, and 4!**

### **Step 6: Restart Your Dev Server**

```bash
# Stop the current server (Ctrl+C)
# Then restart
npm run dev
```

### **Step 7: Test It! ** 🎉

1. Go to your website
2. Fill out the booking form
3. Submit it
4. Check your email inbox!

---

## ✅ What to Expect

**When a customer submits a booking:**

1. Form shows loading spinner
2. EmailJS sends email to YOUR email address
3. Form shows success message
4. Form automatically resets after 3 seconds

**The email you receive will look like:**

```
Subject: New Booking: John Doe - Sunday, November 24, 2025

GUEST INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━
Name: John Doe
Email: john@example.com
Phone: +1 (555) 123-4567

RESERVATION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━
Date: Sunday, November 24, 2025
Time: 7:00 PM
Number of Guests: 4

SPECIAL REQUESTS
━━━━━━━━━━━━━━━━━━━━━━━━━
Window seat please, celebrating anniversary
```

---

## 🎨 Customization

### Change Email Template

1. Go to EmailJS dashboard → **Email Templates**
2. Click on your template
3. Modify the HTML or text
4. Click **Save**
5. Changes take effect immediately!

### Add Auto-Reply to Customer

Create a **second template** to send confirmation emails to customers:

1. Create new template in EmailJS
2. Set **To Email** to: `{{from_email}}`
3. Write a thank-you message
4. Add this code in `BookingSection.tsx` after the first email:

```typescript
// Send confirmation to customer
await emailjs.send(
  serviceId,
  "template_customer_confirmation",
  templateParams,
  publicKey
);
```

---

## 🐛 Troubleshooting

### Emails not sending?

1. **Check console** for errors (F12 in browser)
2. **Verify environment variables** are correct
3. **Restart dev server** after changing `.env.local`
4. **Check EmailJS dashboard** → History to see if emails were sent
5. **Checkspam folder** in your email

### Getting "Invalid Service ID" error?

- Make sure you copied ALL THREE values correctly
- Ensure environment variables start with `NEXT_PUBLIC_`
- Restart your dev server

### Emails going to spam?

- In EmailJS, verify your email service
- Use a professional email provider (Gmail, Outlook)
- Ask customers to whitelist your email

---

## 📊 Usage Limits

**EmailJS Free Tier:**

- ✅ 200 emails/month
- ✅ 2 email services
- ✅ Unlimited templates
- ✅ Email history (30 days)

If you need more than 200 emails/month, upgrade for $7/month (50,000 emails).

---

## ✨ What We Implemented

### Files Modified:

1. `app/components/BookingSection.tsx` - Added EmailJS integration
2. `package.json` - Added `@emailjs/browser` package

### Features:

- ✅ Client-side email sending
- ✅ Professional email formatting
- ✅ Success/error states
- ✅ Auto-replies capability
- ✅ No backend required!

---

## 🚀 Next Steps

- [ ] Sign up for EmailJS
- [ ] Add email service (Gmail/Outlook)
- [ ] Create email template
- [ ] Update `.env.local` with your IDs
- [ ] Test the booking form!

---

## 💡 Pro Tips

1. **Test Mode**: EmailJS has a test mode - use it before going live
2. **Email Notifications**: Set up EmailJS to notify you via mobile when a booking arrives
3. **Backup**: Keep a copy of your template in case you need to restore it
4. **Analytics**: EmailJS tracks open rates and delivery status

---

## 🔄 Switching Back to Resend (if needed)

If you want to switch back to Resend:

```bash
git checkout HEAD -- app/components/BookingSection.tsx
```

Then follow the BOOKING_SETUP.md guide.

---

**Questions? Issues?** Check the EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
