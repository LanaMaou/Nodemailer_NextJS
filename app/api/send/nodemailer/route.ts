import WelcomeTemplate from "@/emails";
import { render } from "@react-email/components";
import { transporter } from "./nodemailer";

export async function POST(req: Request) {
  const {
    email = "maulanarasyit123@gmail.com",
    userFirstname = "ahmad maulana",
  } = await req.json();

  try {
    await transporter.sendMail({
      from: "amlana009@gmail.com",
      to: email,
      subject: "Testing Nodemailer",
      text: "Testing Nodemailer",
      html: render(WelcomeTemplate({ userFirstname })),
    });
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
