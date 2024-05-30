import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface KoalaWelcomeEmailProps {
  userFirstname: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const WelcomeTemplate = ({ userFirstname }: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Hai ini gua maulana seorang fullstack web developer</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?t=st=1717058084~exp=1717061684~hmac=b04b0659e0902afa714948a3bc0b4bd465afa11b51fbc4600150e1afb7e235b0&w=826`}
          width="170"
          height="170"
          alt="Code Life"
          style={logo}
        />
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Selamat datang :), terima kasih sudah mau mencoba fitur send email
          dari saya
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://lanamaou.vercel.app">
            Cek Portfolio Saya
          </Button>
        </Section>
        <Text style={paragraph}>
          Terima Kasih,
          <br />
          Ahmad Maulana Alaudin
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Jl. Berangas Barat Rt. 15, Kel. Berangas Barat, Kec. Alalak, Kab.
          Barito Kuala, Prov. Kalimantan Selatan
        </Text>
      </Container>
    </Body>
  </Html>
);

WelcomeTemplate.PreviewProps = {
  userFirstname: "Lana",
} as KoalaWelcomeEmailProps;

export default WelcomeTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 15px 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
