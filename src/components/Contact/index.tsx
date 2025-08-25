import { AlertUtils } from "@/utils/AlertUtils";
import {
  emailInputChangeHandler,
  inputChangeHandler,
  textAreaChangeHandler,
} from "@/utils/FormUtils";
import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  async function sendData(): Promise<TContact> {
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
    return data;
  }

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setDisabled(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    sendData().then((data) => {
      AlertUtils.success(
        "Message sent!",
        `Thank you, ${data.name}! I will get in touch with you as soon as possible.`
      ).then(() => {
        resetForm();
      });
    });
  };

  return (
    <form className="w-full flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="contact-input"
        placeholder="Name"
        value={name}
        required={true}
        onChange={(e) => inputChangeHandler(setName, e)}
      />
      <input
        type="email"
        className="contact-input"
        placeholder="Email"
        value={email}
        required={true}
        onChange={(e) => emailInputChangeHandler(setEmail, e)}
      />
      <textarea
        className="contact-textarea"
        placeholder="Message"
        value={message}
        required={true}
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
