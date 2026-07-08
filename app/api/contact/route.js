import nodemailer from "nodemailer";

export async function POST(request) {

  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });


  try {

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Contact Message",

      html: `
        <h2>New Message From Portfolio</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });


    return Response.json({
      success: true
    });


  } catch (error) {

    console.log(error);

    return Response.json({
      success: false
    });

  }

}
