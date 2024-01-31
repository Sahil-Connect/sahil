import { Card, Input } from "ui";
import { HiOutlineFlag, HiOutlineArrowRight } from "react-icons/hi2";

export const PhoneNumberInput = () => {
  return (
    <Card title="Enter your phone number">
      <figure>
        <img
          src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1699295129/138b9b22dbc85be57c3898716fcdfd4c.jpg"
          alt="phone"
        />
      </figure>
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 items-center">
          <span className="shadow p-2 rounded-md">
            <HiOutlineFlag />
          </span>
          <select
            className="select select-sm select-bordered w-full max-w-lg"
            title="country"
            placeholder="country"
          >
            <option>RW</option>
            <option>SSD</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            placeholder="07840113242"
            className="input input-sm input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="card-actions">
        <button className="btn btn-primary w-full">
          Continue <HiOutlineArrowRight />
        </button>
      </div>
    </Card>
  );
};
