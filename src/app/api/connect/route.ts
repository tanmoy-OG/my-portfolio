import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

import EmailTemplate from '@/email/email-template';

// Lazy initialization of Resend to avoid build-time errors
function getResend() {
  const resendApiKey = process.env['RESEND_API_KEY'];
  if (!resendApiKey) {
    return null;
  }
  return new Resend(resendApiKey);
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      console.error('🚀 ~ POST ~ Validation failed - missing fields:', {
        hasName: !!name,
        hasEmail: !!email,
        hasSubject: !!subject,
        hasMessage: !!message,
      });
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('🚀 ~ POST ~ Validation failed - invalid email format:', email);
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const resend = getResend();
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const fromEmail = process.env['SENDER_EMAIL_ID'];
    const toEmail = process.env['RECEIVER_EMAIL_ID'];

    if (!fromEmail || !toEmail) {
      return NextResponse.json(
        { error: 'Email configuration missing' },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Direct Connect: ${subject}`,
      react: EmailTemplate({
        name,
        email,
        subject,
        message,
      }),
    });

    if (error) {
      console.error('🚀 ~ POST ~ error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Email sent.' }, { status: 200 });
  } catch (error) {
    console.error('🚀 ~ POST ~ error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
