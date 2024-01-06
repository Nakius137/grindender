"use client";

import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ style, text, onClick }) => {
  if (!style) {
    // set default style for every button, if one is not specified
    style =
      "border-solid border-2 rounded-md pt-1 pb-1 pl-2 pr-2 m-2.5 hover:bg-white hover:text-slate-900 transition hover:duration-500";
  }
  return (
    <button className={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
