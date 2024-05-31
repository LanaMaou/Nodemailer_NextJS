import WelcomeTemplate from "@/emails";
import { render } from "@react-email/components";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { email, userFirstname } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <noreply@resend.dev>",
      to: [email],
      subject: "Testing Resend Libary",
      html: render(WelcomeTemplate({ userFirstname })),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
