import { useState } from 'react'
import { Button, Modal, Drawer } from 'ui'
import { HiOutlineShoppingCart, HiOutlineSparkles } from 'react-icons/hi2'

interface Item {
  id: string
  name: string
  quantity: number
  unit: string
  price: number
}

interface Supplier {
  name: string
  rating: number
  totalOrders: number
  onTimeDelivery: number
}

interface PromptOrderSuggestionProps {
  suggestion: {
    items: Item[]
    supplier: Supplier
    deliveryDate: string
    totalCost: number
  }
  onCompare: () => void
}

// Mock suppliers data
const mockSuppliers = [
  {
    id: 1,
    name: "Global Foods Ltd",
    rating: 4.8,
    totalOrders: 1500,
    onTimeDelivery: 98,
    price: 42.50,
    deliveryDate: "2025-01-10",
    minOrderQuantity: 25
  },
  {
    id: 2,
    name: "Fresh Direct",
    rating: 4.6,
    totalOrders: 1200,
    onTimeDelivery: 95,
    price: 40.00,
    deliveryDate: "2025-01-12",
    minOrderQuantity: 20
  },
  {
    id: 3,
    name: "Premium Suppliers",
    rating: 4.9,
    totalOrders: 2000,
    onTimeDelivery: 99,
    price: 45.00,
    deliveryDate: "2025-01-09",
    minOrderQuantity: 30
  }
]

interface SupplierCompareDrawerProps {
  currentSupplier: Supplier
}

function SupplierCompareDrawer({ currentSupplier }: SupplierCompareDrawerProps) {
  return (
    <Drawer id="supplier-compare" CTA="Compare" className="justify-between space-y-4">
      <div className="space-y-1 mb-6">
        <h3 className="font-bold text-xl">Compare Suppliers</h3>
        <p className="opacity-80">
          Compare different suppliers and choose the best option for your order.
        </p>
      </div>

      <div className="grid gap-4">
        {mockSuppliers.map((supplier) => (
          <div
            key={supplier.id}
            className="card card-bordered p-4 relative hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">{supplier.name}</h3>
                <div className="mt-2 space-y-1 text-sm text-gray-600">
                  <p className="flex items-center">
                    <span className="mr-1">⭐</span>
                    {supplier.rating} ({supplier.totalOrders} orders)
                  </p>
                  <p className="flex items-center">
                    <HiOutlineSparkles className="mr-1 h-4 w-4 text-green-500" />
                    {supplier.onTimeDelivery}% On-time delivery
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">${supplier.price}</p>
                <p className="text-sm text-gray-500">Min. order: {supplier.minOrderQuantity} units</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">Delivery by: {supplier.deliveryDate}</p>
            </div>
            {supplier.name === currentSupplier.name && (
              <div className="absolute top-2 right-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Current Supplier
                </span>
              </div>
            )}
            <div className="mt-4">
              <Button className="w-full" variant={supplier.name === currentSupplier.name ? "outline" : "primary"}>
                {supplier.name === currentSupplier.name ? 'Current Selection' : 'Select Supplier'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Drawer>
  )
}

export function PromptOrderSuggestion({ suggestion, onCompare }: PromptOrderSuggestionProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [editedItem, setEditedItem] = useState<Item | null>(null)

  const handleEditItem = (item: Item) => {
    setEditedItem(item)
    setIsEditModalOpen(true)
  }

  const handleSaveEdit = () => {
    console.log('Saving edited item:', editedItem)
    setIsEditModalOpen(false)
  }

  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-6">Suggested Order</h3>
      <p className="text-gray-500 text-sm mb-4">Based on your request, here is what we suggest:</p>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h4 className="text-lg font-medium mb-2">Supplier Information</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-500">Supplier</p>
            <p className="font-medium">{suggestion.supplier.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Rating</p>
            <p className="font-medium"> {suggestion.supplier.rating}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Orders</p>
            <p className="font-medium">{suggestion.supplier.totalOrders}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">On-Time Delivery</p>
            <p className="font-medium">{suggestion.supplier.onTimeDelivery}%</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">Delivery Date</p>
        <p className="font-medium">{suggestion.deliveryDate}</p>
      </div>

      <table className="w-full mb-6">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left p-2">Item</th>
            <th className="text-left p-2">Quantity</th>
            <th className="text-right p-2">Price</th>
            <th className="text-right p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {suggestion.items.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.quantity} {item.unit}</td>
              <td className="text-right p-2">${item.price.toFixed(2)}</td>
              <td className="text-right p-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEditItem(item)}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
          <tr className="font-medium">
            <td colSpan={2} className="p-2 text-right">Total:</td>
            <td className="p-2 text-right">${suggestion.totalCost.toFixed(2)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-between">
        <SupplierCompareDrawer currentSupplier={suggestion.supplier} />
        <Button>
          <HiOutlineShoppingCart className="h-4 w-4 mr-2" />
          Place Order
        </Button>
      </div>


    </div>
  )
}
