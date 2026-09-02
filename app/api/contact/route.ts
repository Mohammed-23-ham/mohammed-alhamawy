import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required.' },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.MY_PERSONAL_EMAIL || 'alhamawymohamed@gmail.com'],
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      id: result.data?.id ?? null,
    });
  } catch (error) {
    console.error('Email send failed:', error);

    const message = error instanceof Error ? error.message : 'Failed to send email';

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
