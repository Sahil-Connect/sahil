import { generateInitials } from "@sahil/lib/strings";
import { twMerge } from "tailwind-merge";

type AvatarProps = {
  alt?: string;
  className?: any;
  src?: string;
}
export const Avatar = ({ alt, src, className }: AvatarProps) => {
  const merged = twMerge("w-12 rounded-full shadow", className);
  return (
    <>
      {src ? (
        <div className="avatar">
          <div className={merged}>
            <img src={src} alt={alt} />
          </div>
        </div>
      ) : (
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
            <span>{generateInitials(alt!)}</span>
          </div>
        </div>
      )}
    </>
  );
};
