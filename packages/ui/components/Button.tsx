"use client";
import { FC } from "react";

export type ButtonProps = {
  cta: string;
};

export const Button: FC<ButtonProps> = ({ cta = "button" }) => {
  return (
    <button className="btn" onClick={() => alert("boop")}>
      {cta}
    </button>
  );
};
