import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.EMAIL_FROM || "noreply@mhindiatrips.com";
const TO_EMAIL = process.env.EMAIL_TO || "mhindiatrips@gmail.com";
const FROM_NAME = "MH India Trips";

interface InquiryData {
  name: string;
  email: string;
  phone?: string;
  destination?: string;
  travelDates?: string;
  travelers?: string;
  message?: string;
  budget?: string;
}

/**
 * Send notification email to the business owner when a new inquiry comes in.
 */
export async function sendInquiryNotification(data: InquiryData) {
  const { name, email, phone, destination, travelDates, travelers, message, budget } = data;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#f8f7f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f7f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.05);">
          <!-- Header -->
          <tr>
            <td style="background:#0D2440;padding:32px 40px;text-align:center;">
              <h1 style="color:#B8964B;margin:0;font-size:22px;letter-spacing:2px;">MH INDIA TRIPS</h1>
              <p style="color:rgba(255,255,255,0.6);margin:8px 0 0;font-size:12px;letter-spacing:1px;">NEW INQUIRY RECEIVED</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="color:#0D2440;margin:0 0 24px;font-size:18px;">New Travel Inquiry</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#666;font-size:13px;width:140px;">Name</td>
                  <td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#1a1a1a;font-size:14px;font-weight:600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#666;font-size:13px;">Email</td>
                  <td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#1a1a1a;font-size:14px;"><a href="mailto:${email}" style="color:#1A5336;">${email}</a></td>
                </tr>
                ${phone ? `<tr><td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#666;font-size:13px;">Phone</td><td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#1a1a1a;font-size:14px;">${phone}</td></tr>` : ""}
                ${destination ? `<tr><td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#666;font-size:13px;">Destination</td><td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#1a1a1a;font-size:14px;">${destination}</td></tr>` : ""}
                ${travelDates ? `<tr><td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#666;font-size:13px;">Travel Dates</td><td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#1a1a1a;font-size:14px;">${travelDates}</td></tr>` : ""}
                ${travelers ? `<tr><td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#666;font-size:13px;">Travelers</td><td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#1a1a1a;font-size:14px;">${travelers}</td></tr>` : ""}
                ${budget ? `<tr><td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#666;font-size:13px;">Budget</td><td style="padding:12px 0;border-bottom:1px solid #f0ebe3;color:#1a1a1a;font-size:14px;">${budget}</td></tr>` : ""}
              </table>
              ${message ? `<div style="margin-top:24px;padding:16px;background:#f8f7f5;border-radius:8px;border-left:3px solid #B8964B;"><p style="margin:0 0 4px;font-size:11px;color:#666;text-transform:uppercase;letter-spacing:1px;">Message</p><p style="margin:0;font-size:14px;color:#333;line-height:1.6;">${message}</p></div>` : ""}
              <p style="margin:32px 0 0;font-size:12px;color:#999;">Reply directly to this email to respond to the customer.</p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#f8f7f5;padding:20px 40px;text-align:center;border-top:1px solid #f0ebe3;">
              <p style="margin:0;font-size:11px;color:#999;">&copy; ${new Date().getFullYear()} MH India Trips | mhindiatrips.com</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  try {
    const result = await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Inquiry: ${name}${destination ? ` - ${destination}` : ""}`,
      html,
    });
    return { success: true, id: result.data?.id };
  } catch (error: any) {
    console.error("Failed to send inquiry notification:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Send auto-reply confirmation email to the customer who submitted the inquiry.
 */
export async function sendInquiryConfirmation(data: InquiryData) {
  const { name, email, destination } = data;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#f8f7f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f7f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.05);">
          <!-- Header -->
          <tr>
            <td style="background:#0D2440;padding:32px 40px;text-align:center;">
              <h1 style="color:#B8964B;margin:0;font-size:22px;letter-spacing:2px;">MH INDIA TRIPS</h1>
              <p style="color:rgba(255,255,255,0.6);margin:8px 0 0;font-size:12px;letter-spacing:1px;">JOURNEYS THAT STAY WITH YOU</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="color:#0D2440;margin:0 0 16px;font-size:20px;">Thank You, ${name}!</h2>
              <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 20px;">
                We have received your travel inquiry${destination ? ` for <strong>${destination}</strong>` : ""} and our team of luxury travel experts is already reviewing your request.
              </p>
              <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 20px;">
                You can expect a personalized response within <strong>24 hours</strong> with a custom itinerary suggestion tailored to your preferences.
              </p>
              <div style="background:#f8f7f5;border-radius:10px;padding:24px;margin:24px 0;border-left:3px solid #B8964B;">
                <p style="margin:0 0 8px;font-size:13px;color:#B8964B;font-weight:600;text-transform:uppercase;letter-spacing:1px;">What Happens Next?</p>
                <ol style="margin:0;padding-left:20px;color:#555;font-size:14px;line-height:2;">
                  <li>Our experts review your preferences</li>
                  <li>We craft a personalized itinerary</li>
                  <li>You receive a detailed proposal via email</li>
                  <li>We refine together until it's perfect</li>
                </ol>
              </div>
              <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 20px;">
                If you have any urgent questions, feel free to reply to this email or call us at <strong>+91 98765 43210</strong>.
              </p>
              <p style="color:#555;font-size:15px;line-height:1.7;margin:24px 0 0;">
                Warm regards,<br>
                <strong style="color:#0D2440;">The MH India Trips Team</strong>
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#0D2440;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 8px;font-size:12px;color:rgba(255,255,255,0.5);">Follow us for travel inspiration</p>
              <p style="margin:0 0 16px;font-size:13px;">
                <a href="https://www.instagram.com/" style="color:#B8964B;text-decoration:none;margin:0 8px;">Instagram</a>
                <a href="https://www.facebook.com/" style="color:#B8964B;text-decoration:none;margin:0 8px;">Facebook</a>
                <a href="https://wa.me/919876543210" style="color:#B8964B;text-decoration:none;margin:0 8px;">WhatsApp</a>
              </p>
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.35);">&copy; ${new Date().getFullYear()} MH India Trips | mhindiatrips.com</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  try {
    const result = await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [email],
      replyTo: TO_EMAIL,
      subject: `Thank You for Your Inquiry, ${name} - MH India Trips`,
      html,
    });
    return { success: true, id: result.data?.id };
  } catch (error: any) {
    console.error("Failed to send confirmation email:", error);
    return { success: false, error: error.message };
  }
}
