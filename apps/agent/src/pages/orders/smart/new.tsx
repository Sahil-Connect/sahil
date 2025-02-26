import { Card } from "ui";
import { useState } from "react";
import Link from "next/link";
import { HiMagnifyingGlass, HiClock, HiTag, HiShoppingCart } from "react-icons/hi2";

// Dummy data for demonstration
const dummyProducts = [
  { 
    id: 1, 
    name: "Premium White Sugar",
    description: "Brand new stock",
    price: "850.00K SSP",
    originalPrice: "1.00M SSP",
    discount: "15%",
    quantity: "50kg",
    supplier: { id: "sup1", name: "Sugar Kings Ltd", sahilScore: 98 },
    deliveryTime: "1 Day"
  },
  { 
    id: 2, 
    name: "Brown Sugar",
    description: "Brand new stock",
    price: "427.50K SSP",
    originalPrice: "450.00K SSP",
    discount: "5%",
    quantity: "50kg",
    supplier: { id: "sup2", name: "Sweet Supplies Co", sahilScore: 98 },
    deliveryTime: "2 Days"
  },
  { 
    id: 3, 
    name: "Industrial Sugar",
    description: "Brand new stock",
    price: "750.00K SSP",
    originalPrice: "1.00M SSP",
    discount: "25%",
    quantity: "50kg",
    supplier: { id: "sup3", name: "Global Sugar Inc", sahilScore: 98 },
    deliveryTime: "1 Day"
  },
];

export default function NewSmartOrderPage() {
  const [prompt, setPrompt] = useState("");
  const [showRecommendation, setShowRecommendation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRecommendation(true);
  };

  return (
    <section className="space-y-4">
      <Card>
        <h1 className="text-2xl font-semibold">Create Smart Order</h1>
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What would you like to order?
              </label>
              <textarea
                className="w-full h-32 p-3 border rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Describe what you need in natural language. For example: 'I want 50kgs of Sugar by Friday'"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <HiMagnifyingGlass className="w-5 h-5" />
              Find Best Match
            </button>
          </form>
        </div>

        {showRecommendation && (
          <div className="mt-8 space-y-4">
            {dummyProducts.map((product) => (
              <div key={product.id} className="border rounded-lg">
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-lg">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.description}</p>
                    </div>
                    <button className="text-primary hover:text-primary/90">
                      <HiShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiTag className="w-5 h-5 text-primary" />
                      <span>{product.discount}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiClock className="w-5 h-5 text-primary" />
                      <span>{product.deliveryTime}</span>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <Link 
                        href={`/suppliers/${product.supplier.id}`}
                        className="text-primary hover:underline"
                      >
                        {product.supplier.name}
                      </Link>
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-sm">
                        {product.supplier.sahilScore}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </section>
  );
}
