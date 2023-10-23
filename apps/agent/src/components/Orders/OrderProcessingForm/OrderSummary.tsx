import {
  HiOutlineCheckCircle,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineCalendarDays,
  HiOutlineDevicePhoneMobile,
  HiOutlinePrinter,
  HiOutlineUserCircle,
  HiXMark,
} from "react-icons/hi2";

const products = [
  {
    id: 1,
    price: 300,
    name: "Bottled Water",
    quantity: 3,
  },
  {
    id: 2,
    price: 1300,
    name: "Sugar",
    quantity: 4,
  },
  {
    id: 3,
    price: 18000,
    name: "Gas Cylinder",
    quantity: 1,
  },
  {
    id: 4,
    price: 3000,
    name: "Frozen Yoghurt",
    quantity: 3,
  },
  {
    id: 5,
    price: 6000,
    name: "Chicken",
    quantity: 2,
  },
];

const ProductSummary = ({ product }) => {
  return (
    <>
      <div className="flex justify-between gap-2 items-center">
        <div className="flex gap-2">
          <p>{product.name}</p>
          <p className="text-neutral-content">{product.price} SSP</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="badge">{product.quantity} Units</div>
          <button className="btn btn-xs btn-square btn-ghost">
            <HiXMark />
          </button>
        </div>
      </div>
    </>
  );
};

export const OrderSummary = () => {
  return (
    <form className="space-y-2">
      <div className="flex justify-between">
        <h3 className="text-xl">
          Order: ED-15{" "}
          <span className="text-md text-primary">(5 products)</span>
        </h3>
        <button className="btn btn-sm">
          <HiOutlinePrinter /> Print
        </button>
      </div>
      <div className="flex gap-4">
        <div className="basis-3/5">
          <div className="card card-compact shadow">
            <div className="card-body">
              <div className="space-y-2">
                {products.map((product) => (
                  <ProductSummary key={product.id} product={product} />
                ))}
              </div>
              <div className="divider"></div>
              <h3 className="text-xl">Summary</h3>
              <ul className="space-y-2">
                <li>
                  <p className="flex justify-between">
                    Items <span>{products.length}</span>
                  </p>
                </li>
                <li>
                  <p className="flex justify-between">
                    Total Price <span>15000 SSP</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="space-y-2">
            <div className="card card-compact shadow">
              <div className="card-body">
                <h3 className="card-title">Agent Information</h3>
                <ul className="space-y-2">
                  <li>
                    <div className="flex items-center gap-2">
                      <span className="shadow p-2 rounded-md">
                        <HiOutlineUserCircle />
                      </span>
                      Cheben Gatwech
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <span className="shadow p-2 rounded-md">
                        <HiOutlineCalendarDays />
                      </span>
                      Souq Munuki
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card card-compact shadow">
              <div className="card-body">
                <h3 className="card-title">Delivery Information</h3>
                <ul className="space-y-2">
                  <li>
                    <div className="flex items-center gap-2">
                      <span className="shadow p-2 rounded-md">
                        <HiOutlineChatBubbleOvalLeft />
                      </span>
                      emmanuelgatwech@gmail.com
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center gap-2">
                      <span className="shadow p-2 rounded-md">
                        <HiOutlineDevicePhoneMobile />
                      </span>
                      +256781234567
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn btn-sm btn-primary">
        <input type="submit" value="Place Order" />
        <HiOutlineCheckCircle />
      </div>
    </form>
  );
};
