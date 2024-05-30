import WelcomeTemplate from "@/emails";
import { render } from "@react-email/components";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request, res: Response) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { email, userFirstname } = await req.json();
  try {
    const { data } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Testing Resend Libary",
      html: render(WelcomeTemplate({ userFirstname })),
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
