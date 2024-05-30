"use client";

import { useState } from "react";

export default function Home() {
  const [emailSending, setEmailSending] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    e.target.reset();

    try {
      await fetch("http://localhost:3000/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userFirstname: name, email }),
      });
      setEmailSending(true);
      setTimeout(() => setEmailSending(false), 3000);
    } catch (error) {
      console.error(error);
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#4ABDAC] to-[#F3FFE2]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          Resend And NextJS
        </h2>
        {emailSending ? (
          <p className="my-3 text-cyan-700">
            Email berhasil terkirim. Silahkan cek email anda :)
          </p>
        ) : (
          ""
        )}
        <form
          className="space-y-4"
          method="post"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div>
            <label
              className="block font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Nama
            </label>
            <input
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4ABDAC] focus:border-[#4ABDAC]"
              id="name"
              placeholder="Masukan nama anda"
              type="text"
            />
          </div>
          <div>
            <label
              className="block font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4ABDAC] focus:border-[#4ABDAC]"
              id="email"
              placeholder="Masukan email anda"
              type="email"
            />
          </div>
          <button
            className="w-full bg-[#4ABDAC] hover:bg-[#3aa39a] text-white font-medium py-2 px-4 rounded-lg transition-colors"
            type="submit"
          >
            Kirim email
          </button>
        </form>
      </div>
    </div>
  );
}
