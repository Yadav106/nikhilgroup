"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      subject: String(event.target.subject.value),
      message: String(event.target.message.value),
    };

    emailjs.send(
      "service_sk5lspe",
      "template_ct365lp",
      data,
      "dxF0CelRUZYynuJPr"
    );

    toast.success("Mail Sent Successfully!!");
    event.target.name.value="";
    event.target.email.value="";
    event.target.subject.value="";
    event.target.message.value="";
    setLoading(false);
  }

  return (
    <div className="contact-container" style={{ position: "relative"}} >
      <video autoPlay loop muted playsInline className="background-video min-h-[140vh] sticky mt-[50px]">
        <source src="/contactus.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <form
        onSubmit={handleSubmit}
        className="contact mt-[70px] px-[20px] flex flex-col justify-center items-center"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <div className="flex flex-col justify-center items-center bg-black/60 p-[30px] rounded-lg">
          <div className="w-[50vw] flex flex-col my-4">
            <label className="font-bold text-gray-200" htmlFor="name">
              Name:
            </label>
            <br />
            <input
              type="text"
              minLength={3}
              maxLength={150}
              required
              className=" p-4 bg-gray-50/50 border border-gray-100 rounded-lg"
              autoComplete="off"
              id="name"
            />
          </div>
          <div className="w-[50vw] flex flex-col my-4">
            <label className="font-bold text-gray-200" htmlFor="email">
              Email ID:
            </label>
            <br />
            <input
              type="email"
              minLength={5}
              maxLength={150}
              required
              className=" p-4 bg-gray-50/50 border border-gray-100 rounded-lg"
              autoComplete="off"
              id="email"
            />
          </div>
          <div className="w-[50vw] flex flex-col my-4">
            <label className="font-bold text-gray-200" htmlFor="name">
              Subject:
            </label>
            <br />
            <input
              type="text"
              minLength={3}
              maxLength={150}
              required
              className=" p-4 bg-gray-50/50 border border-gray-100 rounded-lg"
              autoComplete="off"
              id="subject"
            />
          </div>
          <div>
            <label className="font-bold text-gray-200" htmlFor="message">
              Message:
            </label>
            <br />
            <br />
            <textarea
              rows={4}
              required
              minLength={10}
              maxLength={500}
              name="message"
              className="w-[50vw] p-4 bg-gray-50/50 border border-gray-100 rounded-lg"
            />
          </div><br/>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 w-40 hover:bg-yellow-500 transition duration-200 hover:text-black bg-gray-700/50 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4 flex flex-col justify-center items-center rounded-md"
          >
            Send Message
          </button>
        </div>
        <br />
        <br />
      </form>
    </div>
  );
}