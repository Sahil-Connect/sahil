"use client"

import { useState } from "react"
import { Card, JoinGrid } from "ui"
import { 
  HiOutlineCurrencyDollar, 
  HiOutlineCreditCard, 
  HiOutlineDocumentText, 
  HiPlus,
  HiArrowSmallLeft,
  HiArrowSmallRight,
  HiOutlineMinusCircle,
  HiOutlineXCircle,
  HiOutlineCheckCircle
} from "react-icons/hi2"
import { formatDateTime } from "@sahil/lib/dates"
import { formatCurrency } from "@sahil/lib"
import { BusinessProfileOverview } from "@sahil/features/businesses"
import { useFetchBusinessByPK } from "@sahil/lib/hooks/businesses"

const PaymentMethodCard = ({ method, isPreferred, onEdit, onSetPreferred }) => (
  <Card className="mb-4">
    <div className="flex items-center justify-between p-2">
      <div>
        <span className="font-medium">{method.type} ending in {method.last4}</span>
        {isPreferred && <span className="ml-2 text-sm text-green-600">Preferred</span>}
      </div>
      <div>
        <button onClick={onEdit} className="text-blue-600 hover:underline mr-2">Edit</button>
        {!isPreferred && (
          <button onClick={onSetPreferred} className="text-green-600 hover:underline">Set as Preferred</button>
        )}
      </div>
    </div>
  </Card>
)

const TransactionCard = ({ transaction }) => {
  const cardIcon = (status: string) => {
    switch (status) {
      case "Pending":
        return <HiOutlineMinusCircle className="text-3xl" />
      case "Canceled":
        return <HiOutlineXCircle className="text-4xl text-error" />
      case "Confirmed":
        return <HiOutlineCheckCircle className="text-3xl text-success" />
      default:
        return null
    }
  }

  return (
    <Card>
      <div className="flex items-center gap-4 p-4">
        <div className="grid place-items-center">
          {cardIcon(transaction.status)}
        </div>
        <div className="w-full space-y-2">
          <time className="text-sm">
            {formatDateTime(transaction.date.toISOString())}
          </time>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Method</p>
              <p>{transaction.method}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Amount</p>
              <p>{formatCurrency(transaction.amount)}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function BillingDashboard() {
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'Visa', last4: '1234' },
    { id: 2, type: 'Mastercard', last4: '5678' },
  ])
  const [preferredMethodId, setPreferredMethodId] = useState(1)

  const transactions = [
    {
      amount: 1000,
      date: new Date("2023-11-06T20:23:31.37043+00:00"),
      status: "Pending",
      method: "Cash",
    },
    {
      amount: 2500,
      date: new Date("2023-11-06T21:17:40.540348+00:00"),
      status: "Confirmed",
      method: "Momo",
    },
    {
      amount: 10000,
      date: new Date("2023-11-21T20:10:35.299422+00:00"),
      status: "Canceled",
      method: "Momo",
    },
    {
      amount: 75000,
      date: new Date("2023-11-06T20:23:31.37043+00:00"),
      status: "Confirmed",
      method: "Cash",
    },
  ]

  const handleAddPaymentMethod = () => {
    // Implement add payment method logic
  }

  const handleEditPaymentMethod = (id) => {
    // Implement edit payment method logic
  }

  const handleSetPreferred = (id) => {
    setPreferredMethodId(id)
  }

  const {
    data: business,
    error,
    loading,
  } = useFetchBusinessByPK("e87924e8-69e4-4171-bd89-0c8963e03d08")

  if (error) {
    return <p>An error occurred while fetching your account details!</p>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3 space-y-6">
          {business && <BusinessProfileOverview business={business} />}

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <HiOutlineCreditCard className="mr-2" /> Payment Methods
            </h2>
            {paymentMethods.map((method) => (
              <PaymentMethodCard
                key={method.id}
                method={method}
                isPreferred={method.id === preferredMethodId}
                onEdit={() => handleEditPaymentMethod(method.id)}
                onSetPreferred={() => handleSetPreferred(method.id)}
              />
            ))}
            <button
              onClick={handleAddPaymentMethod}
              className="btn btn-primary w-full flex items-center justify-center"
            >
              <HiPlus className="mr-2" /> Add Payment Method
            </button>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center">
              <HiOutlineCurrencyDollar className="mr-2" /> Summary
            </h2>
            <Card className="p-4">
              <div className="grid gap-4">
                <div>
                  <span className="block text-sm font-medium text-gray-500">Total Earned</span>
                  <span className="text-2xl font-bold">$1,234.56</span>
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-500">Total Spent</span>
                  <span className="text-2xl font-bold">$567.89</span>
                </div>
              </div>
            </Card>
          </section>
        </div>

        <div className="lg:w-2/3">
          <div className="bg-gray-100 space-y-4 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold flex items-center">
                <HiOutlineDocumentText className="mr-2" /> Latest Transactions
              </h2>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <div className="badge badge-accent">{transactions.length} Transactions</div>
              </div>
              <div>
                <JoinGrid>
                  <button className="join-item btn btn-sm" title="Previous">
                    <HiArrowSmallLeft />
                  </button>
                  <button className="join-item btn btn-sm" title="Next">
                    <HiArrowSmallRight />
                  </button>
                </JoinGrid>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {transactions.map((transaction, index) => (
                <TransactionCard key={index} transaction={transaction} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

