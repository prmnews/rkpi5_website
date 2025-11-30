"use node";

import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";

// Lazy-initialize Resend client to avoid issues during Convex module analysis
function getResendClient() {
  return new Resend(process.env.RESEND_API_KEY);
}

/**
 * Test Resend connection and DNS configuration
 * Sends test email to verify setup
 */
export const testResendConnection = internalAction({
  args: {},
  handler: async (ctx, args) => {
    try {
      const resend = getResendClient();
      const { data, error } = await resend.emails.send({
        from: "RKPi5 <noreply@mail.rkpi5.com>",
        to: ["info@rkpi5.com"],
        bcc: ["kmx-iAaW7gXy3JeDt@proton.me"],
        replyTo: "info@rkpi5.com",
        subject: "Testing *send* to resend endpoint from waitlist",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                .header {
                  background: linear-gradient(135deg, #0284c7, #0369a1);
                  color: white;
                  padding: 30px 20px;
                  border-radius: 8px;
                  text-align: center;
                }
                .content {
                  background: #ffffff;
                  padding: 30px 20px;
                  border: 1px solid #e5e7eb;
                  margin-top: 20px;
                  border-radius: 8px;
                }
                .success {
                  background: #dcfce7;
                  border-left: 4px solid #16a34a;
                  padding: 15px;
                  margin: 20px 0;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <h1 style="margin: 0;">✅ Resend Test Email</h1>
                <p style="margin: 10px 0 0 0;">RKPi5 Email Configuration Validation</p>
              </div>
              
              <div class="content">
                <div class="success">
                  <strong>✅ Success!</strong> If you're reading this, your Resend configuration is working correctly.
                </div>
                
                <h2>Configuration Verified:</h2>
                <ul>
                  <li>✅ Resend API Key: Valid</li>
                  <li>✅ DNS Records: Propagated</li>
                  <li>✅ SPF/DKIM: Authenticated</li>
                  <li>✅ Verified Domain: mail.rkpi5.com</li>
                  <li>✅ FROM Address: noreply@mail.rkpi5.com</li>
                  <li>✅ TO Address: info@rkpi5.com</li>
                  <li>✅ BCC Monitoring: kmx-iAaW7gXy3JeDt@proton.me</li>
                </ul>
                
                <h2>Test Details:</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Test Time:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #ddd;">${new Date().toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Environment:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #ddd;">Convex Production</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Purpose:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #ddd;">Validate email infrastructure</td>
                  </tr>
                </table>
                
                <h2>Next Steps:</h2>
                <ol>
                  <li>Verify this email arrived in info@rkpi5.com inbox</li>
                  <li>Check BCC copy in kmx-iAaW7gXy3JeDt@proton.me</li>
                  <li>Review email headers for SPF/DKIM PASS</li>
                  <li>Confirm email not in spam folder</li>
                  <li>Test production flows (waitlist, contact forms)</li>
                </ol>
                
                <p style="margin-top: 30px; padding: 15px; background: #f3f4f6; border-radius: 6px;">
                  <strong>Documentation:</strong> See <code>utils/test_harness_resend.md</code> for full testing procedures.
                </p>
              </div>
            </body>
          </html>
        `,
      });

      if (error) {
        console.error("[testResendConnection] Resend error:", error);
        return { 
          success: false, 
          error: error.message || String(error),
          details: error 
        };
      }

      console.log("[testResendConnection] ✅ Email sent successfully!");
      console.log("[testResendConnection] Email ID:", data?.id);
      
      return { 
        success: true, 
        emailId: data?.id,
        message: "Test email sent successfully! Check info@rkpi5.com and BCC inbox.",
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error("[testResendConnection] Failed to send test email:", error);
      return { 
        success: false, 
        error: String(error),
        message: "Test email failed. Check Resend API key and DNS configuration."
      };
    }
  },
});

/**
 * Send waitlist confirmation email to user
 * Called after successful waitlist signup
 */
export const sendWaitlistConfirmation = internalAction({
  args: {
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, { email, name }) => {
    try {
      const resend = getResendClient();
      const { data, error } = await resend.emails.send({
        from: "RKPi5 <noreply@mail.rkpi5.com>",
        to: [email],
        bcc: ["kmx-iAaW7gXy3JeDt@proton.me"],
        replyTo: "info@rkpi5.com",
        subject: "[WAITLIST] Welcome to the RKPi5 Waitlist!",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                .header {
                  background: linear-gradient(135deg, #0284c7, #0369a1);
                  color: white;
                  padding: 30px 20px;
                  border-radius: 8px 8px 0 0;
                  text-align: center;
                }
                .logo {
                  font-size: 32px;
                  font-weight: bold;
                  margin-bottom: 10px;
                }
                .content {
                  background: #ffffff;
                  padding: 30px 20px;
                  border: 1px solid #e5e7eb;
                  border-top: none;
                }
                .footer {
                  background: #f9fafb;
                  padding: 20px;
                  border-radius: 0 0 8px 8px;
                  text-align: center;
                  font-size: 14px;
                  color: #6b7280;
                }
                .button {
                  display: inline-block;
                  background: #0284c7;
                  color: white;
                  padding: 12px 24px;
                  border-radius: 6px;
                  text-decoration: none;
                  font-weight: 600;
                  margin: 20px 0;
                }
                .highlight {
                  background: #dbeafe;
                  padding: 15px;
                  border-left: 4px solid #0284c7;
                  margin: 20px 0;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="logo">RKPi5</div>
                <p style="margin: 0;">Rapture Kit</p>
              </div>
              
              <div class="content">
                <h1 style="color: #0284c7; margin-top: 0;">You're on the List!</h1>
                
                <p>Hi ${name},</p>
                
                <p>Thank you for joining the RKPi5 waitlist! We've received your request and you're now on our priority list for updates.</p>
                
                <div class="highlight">
                  <strong>What happens next:</strong>
                  <ul style="margin: 10px 0;">
                    <li>We'll notify you when pre-built units become available</li>
                    <li>You'll get early access to DIY build guides and scripts</li>
                    <li>Receive updates on features and configurations</li>
                  </ul>
                </div>
                
                <p>In the meantime, you can:</p>
                <ul>
                  <li>Explore our <a href="https://rkpi5.com/product" style="color: #0284c7;">product features</a></li>
                  <li>Review <a href="https://rkpi5.com/pricing" style="color: #0284c7;">build configurations</a></li>
                  <li>Check out our <a href="https://rkpi5.com/support" style="color: #0284c7;">documentation</a></li>
                </ul>
                
                <p style="margin-top: 30px;">
                  <strong>Questions?</strong> Reply to this email or visit our 
                  <a href="https://rkpi5.com/contact" style="color: #0284c7;">contact page</a>.
                </p>
                
                <p style="margin-top: 30px;">
                  Best regards,<br/>
                  <strong>Scott E. Townsend</strong><br/>
                  Founder, RKPi5
                </p>
              </div>
              
              <div class="footer">
                <p style="margin: 0 0 10px 0;">
                  RKPi5 - Biblical Resources When Networks Fail
                </p>
                <p style="margin: 0; font-size: 12px;">
                  © ${new Date().getFullYear()} RKPi5. All rights reserved.
                </p>
              </div>
            </body>
          </html>
        `,
      });

      if (error) {
        console.error("[sendWaitlistConfirmation] Resend error:", error);
        throw new Error(error.message);
      }

      return { success: true, emailId: data?.id };
    } catch (error) {
      console.error("[sendWaitlistConfirmation] Failed to send email:", error);
      // Don't throw - we don't want to fail the waitlist signup if email fails
      // Just log the error and return failure status
      return { success: false, error: String(error) };
    }
  },
});

/**
 * Send admin notification when someone joins waitlist
 * Notifies team of new signups for follow-up
 */
export const sendAdminWaitlistNotification = internalAction({
  args: {
    email: v.string(),
    name: v.string(),
    phone: v.optional(v.string()),
    useCase: v.optional(v.string()),
    tier: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    try {
      const resend = getResendClient();
      const { data, error } = await resend.emails.send({
        from: "RKPi5 Waitlist <noreply@mail.rkpi5.com>",
        to: ["info@rkpi5.com"],
        bcc: ["kmx-iAaW7gXy3JeDt@proton.me"],
        replyTo: args.email, // Reply goes to the user who signed up
        subject: `[WAITLIST] New Signup: ${args.name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <body style="font-family: sans-serif; padding: 20px;">
              <h2>New Waitlist Signup</h2>
              
              <table style="border-collapse: collapse; margin: 20px 0;">
                <tr>
                  <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Name:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${args.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Email:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${args.email}</td>
                </tr>
                ${args.phone ? `
                <tr>
                  <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${args.phone}</td>
                </tr>
                ` : ''}
                ${args.tier ? `
                <tr>
                  <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Tier:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${args.tier}</td>
                </tr>
                ` : ''}
                ${args.useCase ? `
                <tr>
                  <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Use Case:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${args.useCase}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Signed Up:</td>
                  <td style="padding: 8px;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
              
              <p style="margin-top: 20px;">
                <a href="https://dashboard.convex.dev" style="background: #0284c7; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block;">
                  View in Convex Dashboard
                </a>
              </p>
            </body>
          </html>
        `,
      });

      if (error) {
        console.error("[sendAdminWaitlistNotification] Resend error:", error);
        throw new Error(error.message);
      }

      return { success: true, emailId: data?.id };
    } catch (error) {
      console.error("[sendAdminWaitlistNotification] Failed to send email:", error);
      return { success: false, error: String(error) };
    }
  },
});

/**
 * Send admin notification when someone submits contact form
 * Notifies team of new inquiries for follow-up
 */
export const sendContactNotification = internalAction({
  args: {
    email: v.string(),
    name: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    message: v.string(),
    type: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const resend = getResendClient();
      const { data, error } = await resend.emails.send({
        from: "RKPi5 Contact <noreply@mail.rkpi5.com>",
        to: ["info@rkpi5.com"],
        bcc: ["kmx-iAaW7gXy3JeDt@proton.me"],
        replyTo: args.email, // Reply goes to the person who contacted
        subject: `[CONTACT] ${args.type}: ${args.name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <body style="font-family: sans-serif; padding: 20px;">
              <h2>New Contact Form Submission</h2>
              
              <table style="border-collapse: collapse; margin: 20px 0;">
                <tr>
                  <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Name:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${args.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Email:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${args.email}</td>
                </tr>
                ${args.company ? `
                <tr>
                  <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Company:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${args.company}</td>
                </tr>
                ` : ''}
                ${args.phone ? `
                <tr>
                  <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${args.phone}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Type:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${args.type}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Message:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${args.message}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Submitted:</td>
                  <td style="padding: 8px;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
              
              <p style="margin-top: 20px;">
                <a href="https://dashboard.convex.dev" style="background: #0284c7; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block;">
                  View in Convex Dashboard
                </a>
              </p>
            </body>
          </html>
        `,
      });

      if (error) {
        console.error("[sendContactNotification] Resend error:", error);
        throw new Error(error.message);
      }

      return { success: true, emailId: data?.id };
    } catch (error) {
      console.error("[sendContactNotification] Failed to send email:", error);
      return { success: false, error: String(error) };
    }
  },
});

