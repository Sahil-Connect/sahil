import { useState } from 'react'
import { Button, Card } from "ui"

import { HiCheckCircle, HiWindow, HiTruck, HiCreditCard } from 'react-icons/hi2'

interface DeliveryStatusProps {
  requestId: string
  onStatusUpdate: (status: string) => void
}

export function DeliveryStatus({ requestId, onStatusUpdate }: DeliveryStatusProps) {
  const [currentStatus, setCurrentStatus] = useState('pending')

  const updateStatus = (newStatus: string) => {
    setCurrentStatus(newStatus)
    onStatusUpdate(newStatus)
  }

  return (
    <Card>
        <h3 className="text-lg font-semibold card-title"> Order Status - Request ID: {requestId}</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Button
            variant={currentStatus === 'picked_up' ? 'primary' : 'outline'}
            className="flex items-center gap-2"
            onClick={() => updateStatus('picked_up')}
          >
            <HiWindow className="h-4 w-4" />
            Confirm Pick Up
          </Button>
          <HiCheckCircle className={`h-6 w-6 ${currentStatus === 'picked_up' ? 'text-green-500' : 'text-gray-300'}`} />
        </div>
        <div className="flex justify-between items-center">
          <Button
            variant={currentStatus === 'delivered' ? 'primary' : 'outline'}
            className="flex items-center gap-2"
            onClick={() => updateStatus('delivered')}
          
          >
            <HiTruck className="h-4 w-4" />
            Confirm Drop Off
          </Button>
          <HiCheckCircle className={`h-6 w-6 ${currentStatus === 'delivered' ? 'text-green-500' : 'text-gray-300'}`} />
        </div>
        <div className="flex justify-between items-center">
          <Button
            variant={currentStatus === 'paid' ? 'primary' : 'outline'}
            className="flex items-center gap-2"
            onClick={() => updateStatus('paid')}
   
          >
            <HiCreditCard className="h-4 w-4" />
            Confirm Payment
          </Button>
          <HiCheckCircle className={`h-6 w-6 ${currentStatus === 'paid' ? 'text-green-500' : 'text-gray-300'}`} />
        </div>
      </div>
    </Card>
  )
}

