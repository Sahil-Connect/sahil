import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { 
  HiChevronLeft, 
  HiChevronRight, 
  HiOutlineInformationCircle, 
  HiOutlineShoppingCart,
  HiShieldCheck,
  HiHeart,
  HiFlag,
  HiArrowPath
} from 'react-icons/hi2';
import { Card, Button, Tabs } from 'ui';
import { useSyncQueryWithStore } from "@sahil/lib/hooks/utilities/useQueryStore";
import type { TabValue as BaseTabValue } from "@sahil/lib/hooks/utilities/useQueryStore";
import { useFetchProductById } from "@sahil/lib/hooks/products";

export type TabValue = BaseTabValue;

type TabItem = {
  icon?: React.ReactNode;
  label: string;
  value: TabValue;
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

  console.log(product);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;
  if (!product) return <div>Product not found</div>;

  const images = product?.mainImage ? [product.mainImage] : [];

  // Sample pending orders data
  const pendingOrders = [
    {
      id: 1,
      orderId: "1001",
      quantity: 1,
      type: "Recurring Monthly Order"
    },
    {
      id: 2,
      orderId: "1002",
      quantity: 1,
      type: "Recurring Monthly Order"
    },
    {
      id: 3,
      orderId: "1003",
      quantity: 1,
      type: "Recurring Monthly Order"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleTabClick = (value: TabValue) => {
    handleChange(value);
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full xl:basis-2/3 space-y-4">
          <Tabs
            items={ProductTabs}
            onTabClick={handleChange}
            currentTab={currentTab}
            className="overflow-x-auto"
          />
          
          <div>
            {currentTab === "info" && (
              <div className="space-y-4">
                <Card>
                  <div className="relative">
                    <img 
                      src={product.mainImage || '/placeholder-image.jpg'} 
                      alt={product.name} 
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </div>
                </Card>

                <Card>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
                        <p className="text-sm text-gray-500">Added on {new Date(product.created_at).toLocaleDateString()}</p>
                      </div>

                      <div>
                        <h2 className="text-3xl font-bold mb-2">
                          USh {product.price.toLocaleString()}
                        </h2>
                        {product.discount > 0 && (
                          <div className="text-sm text-green-600">
                            {product.discount}% off
                          </div>
                        )}
                        <div className="secondary">
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
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
                          <Button className="flex-1">
                            Place Order
                          </Button>
                          <Button variant="outline" className="p-2">
                            <HiHeart className="w-5 h-5" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {currentTab === "progress" && (
              <Card>
                <div className="p-6 space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold">Pending Orders</h2>
                    <p className="text-sm text-gray-500">Manage incoming orders for this product</p>
                  </div>

                  <div className="space-y-4">
                    {pendingOrders.map((order) => (
                      <Card key={order.id} className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">Order #{order.id}</h3>
                              <div className="secondary">Pending</div>
                            </div>
                            <p className="text-sm text-gray-500">Customer ID: {order.orderId}</p>
                            <div className="space-y-1">
                              <p className="text-sm">Quantity: {order.quantity}</p>
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
              </Card>
            )}
          </div>
        </div>

        <div className="w-full xl:basis-1/3 space-y-4">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <HiOutlineInformationCircle className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Supplier Information</h2>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm text-gray-500">Company Name</h3>
                  <p className="font-medium">{product.supplier.name}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Contact Person</h3>
                  <p className="font-medium">{product.supplier.contactName}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Contact Details</h3>
                  <p className="font-medium">{product.supplier.contactEmail}</p>
                  <p className="font-medium">{product.supplier.phoneNumber}</p>
                </div>
                {!isSellerView && (
                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={() => window.location.href = `mailto:${product.supplier.contactEmail}`}
                  >
                    Contact Supplier
                  </Button>
                )}
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <HiShieldCheck className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Safety Tips</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Avoid paying in advance, even for delivery</li>
                <li>• Meet with the seller at a safe public place</li>
                <li>• Inspect the item and ensure it&apos;s exactly what you want</li>
                <li>• Make sure that the packed item is the one you&apos;ve inspected</li>
                <li>• Only pay if you&apos;re satisfied</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <Button variant="outline" className="w-full flex items-center justify-center">
              <HiFlag className="w-5 h-5 mr-2" />
              Report Issue
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;