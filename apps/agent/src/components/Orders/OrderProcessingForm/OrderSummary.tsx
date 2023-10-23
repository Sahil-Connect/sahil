export const OrderSummary = () => {
  return (
    <form className="space-y-2">
      <div className="flex justify-between">
        <h3 className="text-xl">Order Summary</h3>
        <button className="btn btn-sm">Print</button>
      </div>
      <div className="space-y-2">
        <div className="card card-compact shadow-sm">
          <div className="card-body">
            <h3 className="card-title text-primary">Agent Information</h3>
            <ul>
              <li>Cheben Gatwech</li>
              <li>Souq Munuki</li>
            </ul>
          </div>
        </div>
        <div className="card card-compact shadow-sm">
          <div className="card-body">
            <h3 className="card-title text-primary">Delivery Information</h3>
            <ul>
              <li>emmanuelgatwech@gmail.com</li>
              <li>+256781234567</li>
            </ul>
          </div>
        </div>
        <div className="card card-compact shadow-sm">
          <div className="card-body">
            <h3 className="card-title text-primary">Payment Details</h3>
            <ul>
              <li>5300 SSP</li>
              <li>Cash On Delivery</li>
            </ul>
          </div>
        </div>
      </div>
      <input
        type="submit"
        className="btn btn-sm btn-primary"
        value="Place Order"
      />
    </form>
  );
};
