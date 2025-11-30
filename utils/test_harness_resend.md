# Resend Email Testing Harness

## Overview
This testing harness validates the Resend email configuration for RKPi5 Marketing, including DNS setup, email delivery, and endpoint connectivity.

## DNS Configuration Validation

Before testing, ensure the following DNS records are configured in your domain provider:

### Verified Domain: mail.rkpi5.com

**Why subdomain?** Using a subdomain for transactional emails protects your main domain's reputation. If transactional emails get flagged, your main domain (rkpi5.com) remains unaffected.

### Required DNS Records

1. **DKIM Record** (TXT)
   - Name: `resend._domainkey.mail`
   - Provides email authentication and signing
   - Status: ✅ Verified
   
2. **SPF Record** (TXT)
   - Name: `send.mail`
   - Authorizes Resend to send emails
   - Status: ✅ Verified
   
3. **MX Records** (for receiving emails)
   - Send: `send.mail` → feedback-smtp.us-east-1.amazonses.com (Priority 10)
   - Receive: `mail` → inbound-smtp.us-east-1.amazonaws.com (Priority 50)
   - Status: ✅ Verified

**Verification Status**: ✅ Domain fully verified in Resend dashboard

## Testing Methods

### Method 1: Convex Action Test (Recommended)

Uses the existing Convex environment with configured API key.

**Run Test:**
```bash
npm run test:email:convex
# OR
npx convex run emails:testResendConnection
```

**What it tests:**
- Resend API connectivity
- DNS configuration (SPF/DKIM)
- Verified domain: mail.rkpi5.com
- FROM address: noreply@mail.rkpi5.com
- TO address: info@rkpi5.com
- BCC monitoring: kmx-iAaW7gXy3JeDt@proton.me
- Error handling and response validation

**Expected Output:**
```
[LOG] ✅ Email sent successfully!
[LOG] Email ID: 2f78cbe8-7646-4e69-ad2b-57da97a094a5
{
  emailId: '2f78cbe8-7646-4e69-ad2b-57da97a094a5',
  message: 'Test email sent successfully! Check info@rkpi5.com and BCC inbox.',
  success: true,
  timestamp: '2025-11-25T23:51:42.320Z'
}
```

### Method 2: Standalone Node.js Test

Independent test script that doesn't require Convex deployment.

**Prerequisites:**
```bash
# Install dependencies (dotenv added to package.json)
pnpm install

# Ensure RESEND_API_KEY is in .env.local (root of project)
# The .env.local file should contain:
# RESEND_API_KEY=re_your_actual_key_here
```

**Run Test:**
```bash
npm run test:email
# OR
node utils/test-resend.js
```

**Note**: The script automatically loads `.env.local` from the project root using dotenv. The API key is **never hardcoded** - it's always read from `.env.local`.

**What it tests:**
- Direct Resend API call without Convex
- API key loaded from .env.local
- DNS propagation
- Email delivery confirmation

**Note**: The script automatically loads `.env.local` from the project root. No need to export environment variables manually.

## Test Email Details

**Configuration:**
- **TO**: info@rkpi5.com (primary recipient - your main inbox)
- **FROM**: noreply@mail.rkpi5.com (verified subdomain for sending)
- **BCC**: kmx-iAaW7gXy3JeDt@proton.me (monitoring inbox)
- **SUBJECT**: Testing *send* to resend endpoint from waitlist
- **REPLY-TO**: info@rkpi5.com (replies go to main domain)

**Domain Strategy:**
- **Sending domain**: `mail.rkpi5.com` (subdomain - protects reputation)
- **Reply/receiving**: `info@rkpi5.com` (main domain - user-facing)
- **BCC monitoring**: `kmx-iAaW7gXy3JeDt@proton.me` (Proton Mail)

## Validation Checklist

### Pre-Flight Checks
- [x] RESEND_API_KEY set in Convex environment ✅
- [x] DNS records verified in Resend dashboard ✅
- [x] Domain status: "Verified" in Resend (mail.rkpi5.com) ✅
- [x] Subdomain configured for reputation protection ✅

### Test Execution
- [x] Run Convex test action ✅
- [x] Check terminal for success/error messages ✅
- [x] Verify email ID returned (2f78cbe8-7646-4e69-ad2b-57da97a094a5) ✅
- [x] No exceptions thrown ✅

### Email Delivery Verification
- [x] Check info@rkpi5.com inbox for test email ✅
- [x] Check kmx-iAaW7gXy3JeDt@proton.me for BCC copy ✅
- [x] Verify FROM address shows as noreply@mail.rkpi5.com ✅
- [x] Check email headers for SPF/DKIM pass ✅
- [x] Email not in spam folder ✅

### Production Integration Verification
- [ ] Test waitlist signup sends confirmation to user
- [ ] Test waitlist signup sends admin notification
- [ ] Test contact form sends admin notification
- [ ] Verify [WAITLIST] and [CONTACT] subject prefixes
- [ ] Confirm BCC monitoring on production emails

## Troubleshooting

### Error: "Missing API key"
**Cause**: RESEND_API_KEY not set in Convex
**Fix**: 
```bash
npx convex env set RESEND_API_KEY re_your_key_here
```

### Error: "Domain not verified"
**Cause**: DNS records not propagated or domain not verified in Resend
**Fix**: 
1. Check DNS propagation: `dig TXT rkpi5.com`
2. Verify domain in Resend dashboard

### Error: "Email bounced"
**Cause**: info@rkpi5.com mailbox doesn't exist
**Fix**: Configure info@rkpi5.com mailbox or use forwarding

### Email in Spam
**Cause**: SPF/DKIM not passing or domain reputation
**Fix**: 
1. Check email headers for authentication results
2. Review SPF/DKIM records
3. Warm up domain with gradual sending

## Production Email Monitoring

All production emails include BCC to `kmx-iAaW7gXy3JeDt@proton.me` for monitoring:
- Waitlist confirmations
- Waitlist admin notifications  
- Contact form notifications

**Benefits:**
- Centralized email monitoring
- Delivery confirmation
- Customer support reference
- Compliance audit trail

## Advanced Testing

### Test Scenarios

1. **Basic Connectivity**
   - Single test email
   - Validates API key and DNS

2. **Waitlist Flow**
   - Submit waitlist form
   - Verify user confirmation email
   - Verify admin notification
   - Check BCC delivery

3. **Contact Flow**
   - Submit contact form
   - Verify admin notification
   - Check BCC delivery

4. **Error Handling**
   - Invalid email addresses
   - API rate limits
   - Network failures

5. **Duplicate Prevention**
   - Submit same email twice to waitlist
   - Verify update behavior vs. duplicate
   - Check only one email sent

## Resend Dashboard Monitoring

**Access**: https://resend.com/emails

**Key Metrics:**
- Delivery rate
- Bounce rate  
- Spam complaints
- API errors

**Recommended Monitoring:**
- Daily: Check delivery rates
- Weekly: Review bounce/spam rates
- Monthly: Analyze email performance

## Security Considerations

- ✅ API key stored in environment variables (not code)
- ✅ No sensitive data in email subjects
- ✅ Reply-to addresses properly configured
- ✅ BCC monitoring doesn't expose user emails
- ⚠️ Consider encrypting sensitive data in message bodies
- ⚠️ Implement rate limiting for abuse prevention

## Next Steps

After successful testing:
1. Update production environment variables
2. Enable monitoring on BCC inbox
3. Set up email templates (optional - use React Email)
4. Configure webhook endpoints for delivery status (optional)
5. Implement email queuing for high volume (if needed)

## Support Resources

- [Resend Documentation](https://resend.com/docs)
- [Resend API Reference](https://resend.com/docs/api-reference)
- [Convex Actions](https://docs.convex.dev/functions/actions)
- [DNS Verification Guide](https://resend.com/docs/send-with-domains)

