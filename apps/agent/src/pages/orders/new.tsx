import { Card } from "ui";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import React from "react";
import Link from "next/link";

const NewOrderPage: NextPage = () => {
  const router = useRouter();

  const handleManualOrder = () => {
    router.push("/orders/new/order_details");
  };

  const handleSmartOrder = () => {
    router.push("/orders/smart");
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Create New Order</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Manual Order</h2>
            <p className="text-gray-600">
              Create an order by selecting client, products, and delivery details manually.
            </p>
            <Link href="/orders/new/order_details" className="flex items-center text-primary">
              Get Started <HiArrowSmallRight className="ml-2" />
            </Link>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Smart Order</h2>
            <p className="text-gray-600">
              Use our AI-powered smart ordering system to quickly create orders with natural language.
            </p>
            <Link href="/orders/smart/new" className="flex items-center text-primary">
              Try Smart Order <HiArrowSmallRight className="ml-2" />
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NewOrderPage;
