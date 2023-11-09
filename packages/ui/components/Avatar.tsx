export const Avatar = ({ alt, src }) => {
  return (
    <div className="avatar">
      <div className="w-12 rounded-full shadow">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
