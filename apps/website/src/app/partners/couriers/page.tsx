import { Input, PartnerTitle, Select } from "@/components/shared";

export const metadata = {
  title: "Partners - Sahil App",
  description:
    "We foster a culture of partnership and building strong, collaborative relationships. Partner with Sahil. Sahil logistics.",
};

export default function CouriersPage() {
  return (
    <>
      <div className="mt-16 w-full max-w-xl mx-auto px-8 md:px-0 md:mt-20">
        <PartnerTitle 
          title="Couriers"
          description="Become a courier rider at Sahil, delivery goods and packages from suppliers to businesses or directly to consumers."
        />
        <form>
          <div className="flex flex-col space-y-8">
            <Input 
              type="text"
              label="Name"
              placeholder="John Doe"
              required={true}
            />
            <div className="grid md:grid-cols-2 gap-3">
              <Input 
                type="email"
                label="Email"
                placeholder="johndoe@gmail.com"
                required={true}
              />
              <Input 
                type="phone"
                label="Phone Number (optional)"
                placeholder="070*****00"
                required={false}
              />
            </div>
            <Select 
              label="Do you own a vehicle?"
            />
          </div>
          <div className="buttonss mt-8 flex items-center md:justify-end">
            <button
              type="submit" 
              className="group btn btn-primary font-medium text-white rounded-full" 
            >
              Submit
              <span className="relative group flex justify-center items-center rounded-full">
                <svg className="group-hover:rotate-45 transition" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
