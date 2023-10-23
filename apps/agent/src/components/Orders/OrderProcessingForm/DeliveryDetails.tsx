import {
  HiArrowRight,
  HiOutlineBolt,
  HiOutlineCalendarDays,
  HiOutlineBuildingOffice,
  HiOutlineMapPin,
} from "react-icons/hi2";

export const DeliveryDetails = () => {
  return (
    <form className="space-y-2">
      <h3 className="text-2xl">Delivery Details</h3>

      <div className="space-y-2">
        <h3 className="text-xl text-primary">Delivery Information</h3>
        <div className="card card-compact shadow">
          <div className="card-body">
            <div className="flex gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-sm input-bordered w-full bg-primary-content"
                  placeholder="Keji Lumuro"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mobile Number</span>
                </label>
                <input
                  type="text"
                  className="input input-sm input-bordered w-full bg-primary-content"
                  placeholder="+211-9813231392"
                />
              </div>
            </div>
            <div className="flex gap-8">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="immediate"
                    className="radio radio-sm"
                  />
                  <div className="flex ml-4 items-center gap-2">
                    <span className="shadow p-2 rounded-md">
                      <HiOutlineBolt />
                    </span>
                    <span className="label-text">Immediate</span>
                  </div>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="scheduled"
                    className="radio radio-sm checked:bg-secondary"
                    checked
                  />
                  <div className="flex ml-4 items-center gap-2">
                    <span className="shadow p-2 rounded-md">
                      <HiOutlineCalendarDays />
                    </span>
                    <span className="label-text">Scheduled</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="Energy Suppliers"
                className="input input-sm input-bordered w-full bg-primary-content"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl text-primary">Delivery Type</h3>
        <div className="card card-compact shadow">
          <div className="card-body">
            <div className="flex gap-2">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="pickup"
                    className="radio radio-sm"
                  />
                  <div className="flex ml-4 items-center gap-2">
                    <span className="shadow p-2 rounded-md">
                      <HiOutlineBuildingOffice />
                    </span>
                    <span className="label-text">Pick Up Location</span>
                  </div>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="address"
                    className="radio radio-sm checked:bg-secondary"
                    checked
                  />
                  <div className="flex ml-4 items-center gap-2">
                    <span className="shadow p-2 rounded-md">
                      <HiOutlineMapPin />
                    </span>
                    <span className="label-text">Physical Address</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Choose pick up location</span>
              </label>
              <select className="select select-sm select-bordered">
                <option>Custom Market</option>
                <option>Souq Konyo Konyo</option>
                <option>Souq Munuki</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="btn btn-sm btn-primary">
        <input type="submit" value="Continue" />
        <HiArrowRight />
      </div>
    </form>
  );
};
