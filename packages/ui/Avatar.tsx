export const Avatar = ({ alt, src }) => {
  return (
    <div className="avatar">
      <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
