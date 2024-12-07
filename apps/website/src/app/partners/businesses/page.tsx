import { Input, PartnerTitle } from "@/components/shared";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export const metadata = {
  title: "Partners - Sahil App",
  description:
    "We foster a culture of partnership and building strong, collaborative relationships. Partner with Sahil. Sahil logistics.",
};

export default function BusinessesPage() {
  return (
    <>
      <div className="mt-16 w-full max-w-xl mx-auto px-8 md:px-0 md:mt-20">
        <PartnerTitle 
          title="Businesses"
          description="Join 100+ businesses (retailers) working with Sahil. Work with trusted suppliers to reduce costs and focus on serving your customers"
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
            <Input 
              type="text"
              label="Company Name"
              placeholder="Sunset Restaurant"
              required={true}
            />
          </div>
          <div className="buttonss mt-8 flex items-center md:justify-end">
            <button
              type="submit" 
              className="group btn btn-primary font-medium text-white rounded-full" 
            >
              Submit
              <span className="relative group flex justify-center items-center rounded-full">
                <HiOutlineArrowUpRight className="group-hover:rotate-45 transition" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
