import WelcomeTemplate from "@/emails";
import { render } from "@react-email/components";
import { sendMail } from "./nodemailer";

export async function POST(req: Request) {
  const { email, userFirstname } = await req.json();

  try {
    await sendMail(
      email,
      "Testing Nodemailer",
      render(WelcomeTemplate({ userFirstname }))
    );
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
