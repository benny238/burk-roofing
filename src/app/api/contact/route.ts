import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, address, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    // In production, integrate with an email service (e.g., Resend, SendGrid, Nodemailer)
    // For now, log the submission and return success
    console.log("--- New Contact Form Submission ---");
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Address:", address);
    console.log("Service:", service);
    console.log("Message:", message);
    console.log("To: info@burkroofing.com");
    console.log("-----------------------------------");

    // TODO: Add email integration
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Burk Roofing Website <noreply@burkroofing.com>',
    //   to: 'info@burkroofing.com',
    //   subject: `New Inspection Request from ${name}`,
    //   html: `<p><strong>Name:</strong> ${name}</p>
    //          <p><strong>Phone:</strong> ${phone}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Address:</strong> ${address}</p>
    //          <p><strong>Service:</strong> ${service}</p>
    //          <p><strong>Message:</strong> ${message}</p>`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 }
    );
  }
}
