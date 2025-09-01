import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

import EmailTemplate from '@/email/email-template';

// Initialize Resend with API key, fallback to empty string if not provided
const resendApiKey = process.env['RESEND_API_KEY'];
const resend = new Resend(resendApiKey);

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

    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'connect@tanmoy-og.dev',
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
