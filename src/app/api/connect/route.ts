import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '@/components/email/email-template';

// Initialize Resend with API key, fallback to empty string if not provided
const resendApiKey = process.env['RESEND_API_KEY'] || '';
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
    try {
        console.log('inside api')
        const { name, email, subject, message } = await request.json();

        // Basic validation
        if (!name || !email || !subject || !message) {
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
            from: email,
            to: ['your-email@example.com'],
            subject: `Contact Form: ${subject}`,
            react: EmailTemplate({
                name,
                email,
                subject,
                message,
            }),
        });

        if (error) {
            console.error("🚀 ~ POST ~ error:", error)
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Email sent.' },
            { status: 200 }
        );
    } catch (error) {
        console.log("🚀 ~ POST ~ error:", error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}