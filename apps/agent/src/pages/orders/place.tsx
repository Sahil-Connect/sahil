import { Card } from "ui";
import { HiArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";
import type { NextPage } from "next";

const PlaceOrderPage: NextPage = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Create New Order</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/orders/place/order_details">
          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="space-y-4">
              <div className="text-4xl text-center">📝</div>
              <h2 className="text-xl font-medium">Manual Order</h2>
              <p className="text-gray-600">
                Create an order by selecting client, products, and delivery details manually.
              </p>
              <div className="flex items-center text-primary">
                Get Started <HiArrowSmallRight className="ml-2" />
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/orders/smart">
          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="space-y-4">
              <div className="text-4xl text-center">🤖</div>
              <h2 className="text-xl font-medium">Smart Order</h2>
              <p className="text-gray-600">
                Use our AI-powered smart ordering system to quickly create orders with natural language.
              </p>
              <div className="flex items-center text-primary">
                Try Smart Order <HiArrowSmallRight className="ml-2" />
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
