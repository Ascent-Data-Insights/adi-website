import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Submit to Netlify Forms
    const formData = new URLSearchParams({
      'form-name': 'contact',
      name,
      email,
      message,
    });

    // Use Netlify's URL or fallback to production URL
    const siteUrl = process.env.URL || process.env.DEPLOY_PRIME_URL || 'https://ascentdatainsights.com';

    const response = await fetch(`${siteUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
