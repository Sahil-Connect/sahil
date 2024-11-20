import React, { useState } from 'react';
import { HiHeart, HiChatBubbleOvalLeft, HiFlag, HiPencilSquare, HiTrash, HiPlus, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useRouter } from 'next/router';
import { Card, Button } from 'ui';

const ProductDetailsPage = ({ isSellerView = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const images = [
    "https://res.cloudinary.com/dwacr3zpp/image/upload/v1711123098/Sahil/How-to-Choose-a-Laptop-August-2023-Gear.webp",
    "https://res.cloudinary.com/dwacr3zpp/image/upload/v1711123098/Sahil/How-to-Choose-a-Laptop-August-2023-Gear.webp",
    "https://res.cloudinary.com/dwacr3zpp/image/upload/v1711123098/Sahil/How-to-Choose-a-Laptop-August-2023-Gear.webp"
  ];

  const [viewMode, setViewMode] = useState('supplier');
  const [isAdmin, setIsAdmin] = useState(false); // This should be set based on user role

  const toggleView = () => {
    setViewMode(prevMode => prevMode === 'supplier' ? 'business' : 'supplier');
  };

  const isSupplierView = viewMode === 'supplier';
  const isBusinessView = viewMode === 'business';

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Card className="max-w-4xl mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Product Details</h1>
        {isSellerView && (
          <div className="flex space-x-2">
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant="primary"
            >
              {isEditing ? 'Save Changes' : 'Edit Listing'}
            </Button>
            <Button
              variant="danger"
            >
              Delete Listing
            </Button>
          </div>
        )}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <img src={images[currentImageIndex]} alt="Product" className="w-full h-auto rounded-lg" />
          <Button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1" aria-label="Previous image">
            <HiChevronLeft />
          </Button>
          <Button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1" aria-label="Next image">
            <HiChevronRight />
          </Button>
          <div className="flex justify-center mt-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          {isSellerView && (
            <Button className="absolute bottom-2 right-2 rounded-full p-2 btn-primary" aria-label="Add image">
              <HiPlus />
            </Button>
          )}
        </div>

        <Card>
          <h2 className="text-xl font-semibold mb-2">
            {isEditing ? (
              <input
                type="text"
                defaultValue="Embelazo by Clack Ssaku"
                className="w-full border rounded px-2 py-1"
                aria-label="Product name"
              />
            ) : (
              "Embelazo by Clack Ssaku"
            )}
          </h2>
          <p className="text-2xl font-bold mb-4">
            {isEditing ? (
              <input
                type="text"
                defaultValue="USh 2,000,000"
                className="w-full border rounded px-2 py-1"
                aria-label="Product price"
              />
            ) : (
              "USh 2,000,000"
            )}
          </p>
          <div className="mb-4">
            <span className="font-semibold">Condition: </span>
            {isEditing ? (
              <select className="border rounded px-2 py-1" aria-label="Product condition">
                <option>New</option>
                <option>Used</option>
              </select>
            ) : (
              "New"
            )}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Quantity: </span>
            {isEditing ? (
              <input
                type="number"
                defaultValue="1"
                className="border rounded px-2 py-1 w-16"
                aria-label="Product quantity"
              />
            ) : (
              "1"
            )}
          </div>
          <p className="mb-4">
            {isEditing ? (
              <textarea
                defaultValue="Description of the product goes here..."
                className="w-full border rounded px-2 py-1"
                rows={4}
                aria-label="Product description"
              />
            ) : (
              "Description of the product goes here..."
            )}
          </p>
          {!isSellerView && (
            <div className="flex space-x-2 mb-4">
              <Button variant="primary" className="flex items-center">
                <HiChatBubbleOvalLeft className="mr-2" /> Contact Seller
              </Button>
              <Button variant="secondary" className="flex items-center">
                <HiHeart className="mr-2" /> Save
              </Button>
            </div>
          )}
          {!isSellerView && (
            <Button variant="text" className="text-red-500 flex items-center">
              <HiFlag className="mr-2" /> Report Abuse
            </Button>
          )}
        </Card>
      </div>

      <Card className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Safety Tips</h3>
        <ul className="list-disc pl-5">
          <li>Avoid paying in advance, even for delivery</li>
          <li>Meet with the seller at a safe public place</li>
          <li>Inspect the item and ensure it&apos;s exactly what you want</li>
          <li>Make sure that the packed item is the one you&apos;ve inspected</li>
          <li>Only pay if you&apos;re satisfied</li>
        </ul>
      </Card>
    </Card>
  );
};

export default function ProductPage() {
  const [viewMode, setViewMode] = useState('buyer');
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div className="p-4">
      <div className="mb-4">
        <Button
          onClick={() => setViewMode('buyer')}
          variant={viewMode === 'buyer' ? 'primary' : 'secondary'}
          className="mr-2"
        >
          Buyer View
        </Button>
        <Button
          onClick={() => setViewMode('seller')}
          variant={viewMode === 'seller' ? 'primary' : 'secondary'}
        >
          Seller View
        </Button>
      </div>
      <ProductDetailsPage isSellerView={viewMode === 'seller'} />
    </div>
  );
}