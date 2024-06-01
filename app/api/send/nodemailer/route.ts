import WelcomeTemplate from "@/emails";
import { render } from "@react-email/components";
import { sendMail } from "./nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, userFirstname } = await req.json();

  try {
    await sendMail(
      email,
      "Testing Nodemailer",
      render(WelcomeTemplate({ userFirstname }))
    );
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
