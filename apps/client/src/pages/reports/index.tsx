import { useFetchSupplierOrders } from "@sahil/lib/hooks/suppliers";
import { useState } from "react";
import { useGetUserById } from "@sahil/lib/hooks/users";
import { useSession } from "next-auth/react";
import { useUserSuppliers } from "@sahil/lib/hooks/useUserOrganizations";

import * as React from "react"

import { CollectionControls } from "@sahil/features/Shared/CollectionControls";
import { TopClientsByRevenue } from "@sahil/features/Reports/TopClientsByRevenue";
import { RevenueByProduct } from "@sahil/features/Reports/RevenueByProduct";
import { OrderStatusDistribution } from "@sahil/features/Reports/OrderStatusDistribution";


const orders = [
  {
    "business": {
      "id": "e87924e8-69e4-4171-bd89-0c8963e03d08",
      "name": "Radisson Blu",
      "contactName": "Emmanuel Gatwech",
      "business_type": {
        "type": "hotel"
      },
      "type": "hotel"
    },
    "id": "d634372a-6a81-402e-9fa5-231bf7c0444c",
    "fulfillment_type": null,
    "order_items": [
      {
        "price": 15,
        "product": {
          "name": "Routers",
          "price": 10000,
          "quantity": 20,
          "discount": 0
        }
      },
      {
        "price": 15,
        "product": {
          "name": "Laptops",
          "price": 1000000,
          "quantity": 6,
          "discount": 15
        }
      },
      {
        "price": 15,
        "product": {
          "name": "iPhone 11 Pro Max",
          "price": 10000000,
          "quantity": 3,
          "discount": 1
        }
      }
    ],
    "status": "PENDING",
    "origin": "Souq Munuki",
    "created_at": "2024-09-14T13:42:07.748051+00:00",
    "destination": "Souq Custom"
  },
  {
    "business": {
      "id": "e87924e8-69e4-4171-bd89-0c8963e03d08",
      "name": "Radisson Blu",
      "contactName": "Emmanuel Gatwech",
      "business_type": {
        "type": "hotel"
      },
      "type": "hotel"
    },
    "id": "c3ce2967-53fc-4fc6-922b-350adf4c773c",
    "fulfillment_type": null,
    "order_items": [
      {
        "price": 15,
        "product": {
          "name": "1kg Sugar",
          "price": 2500,
          "quantity": 250,
          "discount": null
        }
      },
      {
        "price": 15,
        "product": {
          "name": "1kg Brazillian Chicken",
          "price": 300,
          "quantity": 25,
          "discount": null
        }
      },
      {
        "price": 15,
        "product": {
          "name": "1kg Powder Milk",
          "price": 2500,
          "quantity": 10,
          "discount": null
        }
      }
    ],
    "status": "PENDING",
    "origin": "Souq Munuki",
    "created_at": "2024-09-16T18:21:09.961872+00:00",
    "destination": "Souq Custom"
  },
  {
    "business": {
      "id": "e87924e8-69e4-4171-bd89-0c8963e03d08",
      "name": "Radisson Blu",
      "contactName": "Emmanuel Gatwech",
      "business_type": {
        "type": "hotel"
      },
      "type": "hotel"
    },
    "id": "99738f85-6c6a-4c79-896d-bea5220108ef",
    "fulfillment_type": null,
    "order_items": [
      {
        "price": 15,
        "product": {
          "name": "Solar Batteries",
          "price": 350000,
          "quantity": 10,
          "discount": null
        }
      },
      {
        "price": 15,
        "product": {
          "name": "250w Solar Panel",
          "price": 300000,
          "quantity": 20,
          "discount": null
        }
      }
    ],
    "status": "PENDING",
    "origin": "Souq Munuki",
    "created_at": "2024-09-17T14:41:35.21956+00:00",
    "destination": "Souq Custom"
  }
];




export default function Reports() {
  const { data: sessionData } = useSession();
  const { data: currentUser, loading: userLoading } = useGetUserById(sessionData?.user?.id);

  const supplierOrders = useFetchSupplierOrders();
  console.log(supplierOrders);

  return (
    <section className="space-y-4">
      <CollectionControls user={currentUser} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <RevenueByProduct orders={orders} />
        <OrderStatusDistribution orders={orders} />
        <TopClientsByRevenue orders={orders} />
      </div>
    </section>
  );
}
