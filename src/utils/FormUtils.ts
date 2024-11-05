import React from "react";

export const inputChangeHandler = (
  setFunction: React.Dispatch<React.SetStateAction<string>>,
  event: React.ChangeEvent<HTMLInputElement>
) => {
  setFunction(event.target.value);
};

export const emailInputChangeHandler = (
  setFunction: React.Dispatch<React.SetStateAction<string>>,
  event: React.ChangeEvent<HTMLInputElement>
) => {
  setFunction(event.target.value);
  // Validate email vs regex and change the input's class to
  // show the user that the email is invalid
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (emailRegex.test(event.target.value)) {
    event.target.classList.remove("contact-input-error");
    event.target.classList.add("contact-input");
  } else {
    event.target.classList.remove("contact-input");
    event.target.classList.add("contact-input-error");
  }
};

export const textAreaChangeHandler = (
  setFunction: React.Dispatch<React.SetStateAction<string>>,
  event: React.ChangeEvent<HTMLTextAreaElement>
) => {
  setFunction(event.target.value);
};
