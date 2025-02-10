'use client'

import { useState } from 'react'
import { Button, Card, Input } from "ui"
import { HiOutlineServer, HiOutlinePaperAirplane } from "react-icons/hi2"
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { PromptOrderSuggestion } from '@/components/PromptOrderSuggestion'

const orderPromptSchema = z.object({
  prompt: z.string().min(1, "Please enter your order requirements"),
  notes: z.string().optional()
})

type FormData = z.infer<typeof orderPromptSchema>

interface OrderSuggestion {
  items: Array<{ id: string; name: string; quantity: number; unit: string; price: number }>
  supplier: {
    name: string
    rating: number
    totalOrders: number
    onTimeDelivery: number
  }
  deliveryDate: string
  totalCost: number
}

export default function SmartOrdersPage() {
  const [suggestion, setSuggestion] = useState<OrderSuggestion | null>(null)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(orderPromptSchema)
  })

  const handleCompare = () => {
    console.log('Comparing suppliers...')
  }

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true)
    
    try {
      // Simulated API response
      const mockResponse: OrderSuggestion = {
        items: [
          {
            id: "item_1",
            name: "Premium Basmati Rice",
            quantity: 50,
            unit: "kgs",
            price: 2.5
          }
        ],
        supplier: {
          name: "Global Rice Suppliers",
          rating: 4.8,
          totalOrders: 1234,
          onTimeDelivery: 98
        },
        deliveryDate: "2025-01-10",
        totalCost: 125.00
      }
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSuggestion(mockResponse)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-4">
      <Card className="max-w-3xl mx-auto">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">Quick Order</h2>
          <p className="text-gray-500 text-sm mb-6">Tell us in plain language and we will suggest an order for you.</p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Request</label>
              <input
                {...register("prompt")}
                placeholder="e.g. '50kg of rice every Friday'"
              />
              {errors.prompt && (
                <p className="text-sm text-red-500 mt-1">{errors.prompt.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
              <textarea
                {...register("notes")}
                rows={3}
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <HiOutlineServer className="h-4 w-4 animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    Submit
                    <HiOutlinePaperAirplane className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </Card>

      {suggestion && (
        <Card className="max-w-3xl mx-auto">
          <PromptOrderSuggestion 
            suggestion={suggestion} 
            onCompare={handleCompare}
          />
        </Card>
      )}
    </div>
  )
}