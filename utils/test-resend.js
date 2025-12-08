#!/usr/bin/env node
/**
 * Standalone Resend Email Test Harness
 * Tests email configuration without requiring Convex deployment
 * 
 * Usage:
 *   node utils/test-resend.js
 * 
 * Requirements:
 *   - RESEND_API_KEY in .env.local file
 *   - resend package installed (npm install resend)
 *   - dotenv package installed (npm install dotenv)
 */

const { Resend } = require('resend');
const path = require('path');
const fs = require('fs');

// Load environment variables from .env.local
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

async function testResendConnection() {
  console.log('\n🧪 RKPi5 Resend Email Test Harness\n');
  console.log('='.repeat(50));
  
  // Check if .env.local exists
  const envPath = path.join(__dirname, '..', '.env.local');
  if (!fs.existsSync(envPath)) {
    console.error('❌ ERROR: .env.local file not found');
    console.log(`\nExpected location: ${envPath}`);
    console.log('\nCreate .env.local with:');
    console.log('  RESEND_API_KEY=re_your_key_here');
    process.exit(1);
  }
  
  console.log('✅ .env.local file found');
  
  // Validate API key
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('❌ ERROR: RESEND_API_KEY not found in .env.local');
    console.log('\nAdd to .env.local:');
    console.log('  RESEND_API_KEY=re_your_key_here');
    process.exit(1);
  }
  
  console.log('✅ API Key found');
  console.log(`   Key prefix: ${apiKey.substring(0, 8)}...`);
  
  // Initialize Resend client
  const resend = new Resend(apiKey);
  
  // Test email configuration
  const testConfig = {
    from: 'RKPi5 <noreply@mail.rkpi5.com>',
    to: ['info@rkpi5.com'],
    bcc: ['kmx-iAaW7gXy3JeDt@proton.me'],
    replyTo: 'info@rkpi5.com',
    subject: 'Testing *send* to resend endpoint from waitlist',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Test Method:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">Standalone Node.js Script</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Purpose:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">Validate email infrastructure</td>
              </tr>
            </table>
            
            <h2>What to Check:</h2>
            <ol>
                  <li>Verify this email arrived in <strong>info@rkpi5.com</strong> inbox</li>
                  <li>Check BCC copy in <strong>kmx-iAaW7gXy3JeDt@proton.me</strong></li>
                  <li>Review email headers for <strong>SPF/DKIM PASS</strong></li>
                  <li>Confirm email is <strong>NOT in spam</strong> folder</li>
                  <li>Verify FROM shows as <strong>noreply@mail.rkpi5.com</strong></li>
                  <li>Test production flows (waitlist, contact forms)</li>
            </ol>
            
            <p style="margin-top: 30px; padding: 15px; background: #f3f4f6; border-radius: 6px;">
              <strong>Next Steps:</strong> See <code>utils/test_harness_resend.md</code> for complete testing procedures.
            </p>
          </div>
        </body>
      </html>
    `,
  };
  
  console.log('\n📧 Sending test email...');
  console.log(`   FROM: ${testConfig.from}`);
  console.log(`   TO: ${testConfig.to.join(', ')}`);
  console.log(`   BCC: ${testConfig.bcc.join(', ')}`);
  console.log(`   SUBJECT: ${testConfig.subject}`);
  
  try {
    const { data, error } = await resend.emails.send(testConfig);
    
    if (error) {
      console.error('\n❌ EMAIL SEND FAILED\n');
      console.error('Error Details:', error);
      console.log('\n🔍 Troubleshooting:');
      console.log('  1. Check DNS records in Resend dashboard');
      console.log('  2. Verify domain is verified: https://resend.com/domains');
      console.log('  3. Confirm API key has send permissions');
      console.log('  4. Review utils/test_harness_resend.md\n');
      process.exit(1);
    }
    
    console.log('\n✅ EMAIL SENT SUCCESSFULLY!\n');
    console.log('Email Details:');
    console.log(`  Email ID: ${data.id}`);
    console.log(`  Timestamp: ${new Date().toISOString()}`);
    console.log('\n📬 Verification Steps:');
    console.log('  1. Check info@rkpi5.com inbox for test email');
    console.log('  2. Check kmx-iAaW7gXy3JeDt@proton.me for BCC copy');
    console.log('  3. Review email headers:');
    console.log('     - SPF: should show "PASS"');
    console.log('     - DKIM: should show "PASS"');
    console.log('  4. Verify sender shows as "RKPi5 <noreply@mail.rkpi5.com>"');
    console.log('\n🎯 View in Resend Dashboard:');
    console.log(`  https://resend.com/emails/${data.id}\n`);
    
    return { success: true, emailId: data.id };
    
  } catch (error) {
    console.error('\n❌ UNEXPECTED ERROR\n');
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
    console.log('\n🔍 Common Issues:');
    console.log('  - API key invalid or expired');
    console.log('  - DNS records not propagated (wait 24-48 hours)');
    console.log('  - Domain not verified in Resend dashboard');
    console.log('  - Network connectivity issues');
    console.log('\nSee utils/test_harness_resend.md for more help.\n');
    process.exit(1);
  }
}

// Run test
testResendConnection()
  .then(() => {
    console.log('='.repeat(50));
    console.log('✅ Test Complete\n');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });

