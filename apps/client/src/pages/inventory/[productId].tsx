import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineInformationCircle,
  HiOutlineShoppingCart,
  HiShieldCheck,
  HiHeart,
  HiFlag,
  HiArrowPath,
} from "react-icons/hi2";
import { Card, Button, Tabs } from "ui";
import { useSyncQueryWithStore } from "@sahil/lib/hooks/utilities/useQueryStore";
import type { TabValue as BaseTabValue } from "@sahil/lib/hooks/utilities/useQueryStore";
import { useFetchProductById } from "@sahil/lib/hooks/products";
import ProductControls from "@sahil/features/Inventory/ProductControls";

export type TabValue = BaseTabValue;

type TabItem = {
  icon?: React.ReactNode;
  label: string;
  value: TabValue;
};

type Order = {
  id: string;
  orderId: string;
  quantity: number;
  type: string;
};

const ProductTabs: TabItem[] = [
  {
    label: "Product Details",
    value: "info",
    icon: <HiOutlineInformationCircle />,
  },
  {
    label: "Orders Management",
    value: "progress",
    icon: <HiOutlineShoppingCart />,
  },
];

const ProductDetailsPage = ({ isSellerView = false }) => {
  const router = useRouter();
  console.log(router.query);
  const { productId } = router.query;
  const { product, loading, error } = useFetchProductById(productId as string);
  const { currentTab, handleChange } = useSyncQueryWithStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock pending orders data
  const pendingOrders: Order[] = [
    {
      id: "1",
      orderId: "ORD-001",
      quantity: 2,
      type: "Standard Delivery"
    },
    {
      id: "2", 
      orderId: "ORD-002",
      quantity: 1,
      type: "Express Delivery"
    }
  ];

  console.log(product);

  const handleEdit = () => {
    // Implement edit functionality
    console.log("Edit product");
  };

  const handleDelete = () => {
    // Implement delete functionality
    console.log("Delete product");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;
  if (!product) return <div>Product not found</div>;

  // Array for the images on the left side
  const leftSideImages = [
    "https://i5.walmartimages.com/seo/Pre-Owned-Apple-iPhone-11-Pro-Fully-Unlocked-512GB-Midnight-Green-Certified-Used_3ecb3059-d3a6-4f43-bef3-a3eddb55fd6b_1.c7ce9c788df7e834ed0ceadfdb16c005.jpeg",
    "https://buy.gazelle.com/cdn/shop/files/iPhone_11_Pro_Max_-_Black_-_Overlap_Trans-cropped_9f5a9ab5-8f9c-4d08-99f2-643f9c7caf24.jpg?v=1721951956",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % leftSideImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + leftSideImages.length) % leftSideImages.length
    );
  };

  const handleTabClick = (value: TabValue) => {
    handleChange(value);
  };

  return (
    <section className="space-y-4">
      <ProductControls
        onEdit={handleEdit}
        onDelete={handleDelete}
        tabs={ProductTabs}
        currentTab={currentTab}
        onTabClick={handleChange}
      />

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full xl:basis-2/3 space-y-4">
          <div>
            {currentTab === "info" && (
              <div className="space-y-4">
              
                  <div>
                    {/* Image Container with Grid */}
                    <div className="flex gap-4">
                      {/* Thumbnail Grid on Left */}
                      <div className="flex flex-col gap-2 w-32">
                        {leftSideImages.map((image, index) => (
                          <button
                            key={index}
                            className={`relative aspect-square rounded-lg overflow-hidden border-2 ${
                              index === currentImageIndex
                                ? "border-primary"
                                : "border-transparent hover:border-gray-200"
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                          >
                            <img
                              src={image}
                              alt={`Product view ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>

                      {/* Main Image */}
                      <div className="relative flex-1 h-fit">
                        <img
                          src={leftSideImages[currentImageIndex]}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
              

                {/* Rest of the content */}
              </div>
            )}

            {currentTab === "progress" && (
                 <div className="space-y-6">
                 <div>
                   <h2 className="text-xl font-semibold">Pending Orders</h2>
                   <p className="text-sm text-gray-500">
                     Manage incoming orders for this product
                   </p>
                 </div>

                 <div className="space-y-4">
                   {pendingOrders.map((order) => (
                     <Card key={order.id}>
                       <div className="flex items-center justify-between">
                         <div className="space-y-2">
                           <div className="flex items-center justify-between">
                             <h3 className="font-medium">Order #{order.id}</h3>
                             <div className="secondary">Pending</div>
                           </div>
                           <p className="text-sm text-gray-500">
                             Customer ID: {order.orderId}
                           </p>
                           <div className="space-y-1">
                             <p className="text-sm">
                               Quantity: {order.quantity}
                             </p>
                             <p className="text-sm flex items-center text-gray-500">
                               <HiArrowPath className="w-4 h-4 mr-2" />
                               {order.type}
                             </p>
                           </div>
                         </div>
                         <Button variant="outline">Manage Order</Button>
                       </div>
                     </Card>
                   ))}
                 </div>
               </div>
            )}
          </div>
        </div>

        <div className="w-full xl:basis-1/3 space-y-4">
          <Card>
            <div>
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-semibold mb-2">
                    {product.name}
                  </h1>
                  <p className="text-sm text-gray-500">
                    Added on {new Date(product.created_at).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-primary mb-2">
                    USh {product.price.toLocaleString()}
                  </h2>
                  {product.discount > 0 && (
                    <div className="text-sm text-green-600">
                      {product.discount}% off
                    </div>
                  )}
                  <div className="secondary">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Quantity Available</h3>
                  <p>{product.quantity}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Description</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>

                {!isSellerView && (
                  <div className="flex gap-3">
                    <Button className="flex-1">Place Order</Button>
                    <Button variant="outline" className="p-2">
                      <HiHeart className="w-5 h-5" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
