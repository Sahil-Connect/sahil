import { FC } from "react";

type Props = {
  type: string;
};

export const Input: FC<Props> = ({ type, ...props }) => {
  return (
    <input
      className="input input-bordered w-full"
      type={type}
      placeholder="..."
      {...props}
    />
  );
};
