import { Card, Input } from "ui";
import { HiOutlineCheckBadge } from "react-icons/hi2";

export const VerificationCodeInput = () => {
  return (
    <Card title="Verify your phone number">
      <figure>
        <img
          src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1699295129/138b9b22dbc85be57c3898716fcdfd4c.jpg"
          alt="phone"
        />
      </figure>
      <div>
        <input
          type="number"
          placeholder="07840113242"
          className="input input-sm input-bordered w-full max-w-lg"
        />
      </div>
      <div className="card-actions">
        <button className="btn btn-primary w-full">
          Verify <HiOutlineCheckBadge />
        </button>
      </div>
      <div>
        <p>Wait for code (6s)</p>
      </div>
    </Card>
  );
};
