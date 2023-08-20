"use client";
import { FC } from "react";

export type Props = {
  cta: string;
};

export const Button: FC<Props> = ({ cta }) => {
  return (
    <button className="btn" onClick={() => alert("boop")}>
      {cta}
    </button>
  );
};
