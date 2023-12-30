"use client";

import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ style, text, onClick }) => {
  // I guess I've just reinvented the wheel
  return (
    <button className={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
