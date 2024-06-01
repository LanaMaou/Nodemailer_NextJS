import WelcomeTemplate from "@/emails";
import { render } from "@react-email/components";
import { sendMail } from "./nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, userFirstname } = await req.json();

  const res = NextResponse.json({ success: true }, { status: 200 });

  res.headers.set("Access-Control-Allow-Origin", "*"); // Sesuaikan dengan asal yang diizinkan
  res.headers.set("Access-Control-Allow-Methods", "POST"); // Metode yang diizinkan
  res.headers.append(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  ); // Header yang diizinkan

  // Tangani preflight request
  if (req.method === "OPTIONS") {
    return res;
  }

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
