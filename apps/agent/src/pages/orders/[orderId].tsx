import { parseISO, format } from "date-fns";

export default function OrderPage() {
  const date = parseISO("2023-08-12T20:54:29.03552+00:00");
  const formattedDate = format(date, "MMMM d");
  return (
    <main className="min-h-screen p-8">
      <div className="flex gap-8">
        <div className="basis-3/5 space-y-2">
          <h3 className="text-2xl">Order Summary</h3>
          <div className="card card-compact shadow">
            <div className="card-body">
              <h3 className="card-title">Order ID: ED-2</h3>
              <ul>
                <li>2x - 25 KG fish</li>
                <li>1x- 25 KG fish</li>
                <li>1x - 25 KG fish</li>
              </ul>
              <div className="flex gap-2">
                <div className="badge">Cash</div>
                <div className="badge">Pickup Location</div>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">Order Again</button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <h3 className="text-2xl">Order Status</h3>
            <ul className="steps steps-vertical">
              <li className="step step-primary">Order Confirmation</li>
              <li className="step">Courier Pickup</li>
              <li className="step">Enroute</li>
              <li className="step">Delivered</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl">Courier</h3>
            <div className="flex gap-2 items-center">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <span>MX</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl">Ladu Lumori</h3>
                <p>+256787024989</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
