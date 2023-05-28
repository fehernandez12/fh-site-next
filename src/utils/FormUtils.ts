import React from "react";

export const inputChangeHandler = (
  setFunction: React.Dispatch<React.SetStateAction<string>>,
  event: React.ChangeEvent<HTMLInputElement>
) => {
  setFunction(event.target.value);
};

export const textAreaChangeHandler = (
  setFunction: React.Dispatch<React.SetStateAction<string>>,
  event: React.ChangeEvent<HTMLTextAreaElement>
) => {
  setFunction(event.target.value);
};
