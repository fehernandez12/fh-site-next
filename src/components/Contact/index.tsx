import { AlertUtils } from "@/utils/AlertUtils";
import { inputChangeHandler, textAreaChangeHandler } from "@/utils/FormUtils";
import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  async function sendData(): Promise<void> {
    const response = await fetch(`/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const data: TContact = await response.json();
  }

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    sendData();
    AlertUtils.success(
      "Message sent!",
      `Thank you, ${name}! I will get in touch with you as soon as possible.`
    ).then(() => {
      resetForm();
    });
  };

  return (
    <form className="w-full flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="w-full h-12 px-4 my-2 text-gray-800 border border-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
        placeholder="Name"
        value={name}
        onChange={(e) => inputChangeHandler(setName, e)}
      />
      <input
        type="email"
        className="w-full h-12 px-4 my-2 text-gray-800 border border-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
        placeholder="Email"
        value={email}
        onChange={(e) => inputChangeHandler(setEmail, e)}
      />
      <textarea
        className="w-full h-24 px-4 my-2 text-gray-800 border border-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
        placeholder="Message"
        value={message}
        onChange={(e) => textAreaChangeHandler(setMessage, e)}
      ></textarea>
      <button
        type="submit"
        className="btn btn-primary btn-block"
        disabled={disabled}
      >
        Send
      </button>
    </form>
  );
}

function Contact() {
  return (
    <div className="w-full h-4/5 py-6 lg:py-12 px-6 lg:px-12 text-gray-100">
      <h1 className="text-xl lg:text-2xl font-bold">Contact me</h1>
      <hr className="border border-b-0 border-x-0 border-gray-100 my-4" />
      <p>
        I am always looking for new challenges, my inbox is always open. Whether
        you have a question or just want to say hi, I&apos;ll try my best to get
        back to you!
      </p>
      <div className="flex flex-row mt-4 w-full">
        <ContactForm />
      </div>
      <div className="w-full">
        <p>
          Alternatively, you can{" "}
          <a
            href="mailto:feehernandezba@gmail.com"
            className="text-gray-200 hover:text-gray-300 underline transition-colors duration-100"
          >
            send me an email
          </a>
          , or contact me in my social media.
        </p>
      </div>
    </div>
  );
}

export { Contact };
