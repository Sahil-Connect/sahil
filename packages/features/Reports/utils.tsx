import { startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfQuarter, endOfQuarter, startOfYear, endOfYear, isWithinInterval } from "date-fns"

export interface Order {
  id: string
  status: string
  created_at: string
  business: {
    id: string
    name: string
    type: string
  }
  order_items: {
    price: number
    product: {
      name: string
      price: number
      quantity: number
      discount: number | null
    }
  }[]
}

// Get revenue per product type
export const getRevenueByProduct = (orders: Order[]) => {
  const productRevenue = orders.reduce((acc: { [key: string]: number }, order) => {
    order.order_items.forEach(item => {
      const productName = item.product.name
      const revenue = item.product.price * item.product.quantity
      acc[productName] = (acc[productName] || 0) + revenue
    })
    return acc
  }, {})

  return Object.entries(productRevenue).map(([name, revenue]) => ({
    name,
    revenue,
  }))
}

// Get order status statistics
export const getOrderStatusStats = (orders: Order[]) => {
  const stats = orders.reduce((acc: { [key: string]: number }, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1
    return acc
  }, {})

  return Object.entries(stats).map(([status, count]) => ({
    status,
    count,
  }))
}

// Get most profitable clients
export const getClientProfitability = (orders: Order[]) => {
  const clientRevenue = orders.reduce((acc: { [key: string]: number }, order) => {
    const totalOrderValue = order.order_items.reduce((sum, item) => {
      return sum + (item.product.price * item.product.quantity)
    }, 0)
    
    acc[order.business.name] = (acc[order.business.name] || 0) + totalOrderValue
    return acc
  }, {})

  return Object.entries(clientRevenue)
    .map(([name, revenue]) => ({
      name,
      revenue,
    }))
    .sort((a, b) => b.revenue - a.revenue)
}

// Get client size distribution based on order volume
export const getClientSizeStats = (orders: Order[]) => {
  // Count orders per client
  const orderCounts = orders.reduce((acc: { [key: string]: number }, order) => {
    acc[order.business.name] = (acc[order.business.name] || 0) + 1
    return acc
  }, {})

  // Categorize clients by size
  const sizeCategories = {
    'Small (1-5)': 0,
    'Medium (6-15)': 0,
    'Large (16-30)': 0,
    'Enterprise (30+)': 0,
  }

  Object.values(orderCounts).forEach(count => {
    if (count <= 5) sizeCategories['Small (1-5)']++
    else if (count <= 15) sizeCategories['Medium (6-15)']++
    else if (count <= 30) sizeCategories['Large (16-30)']++
    else sizeCategories['Enterprise (30+)']++
  })

  return Object.entries(sizeCategories).map(([name, value]) => ({
    name,
    value,
  }))
}

// Filter data by date range (reused from original code)
export const filterDataByDateRange = (data: Order[], dateRange: any) => {
  if (!dateRange?.from || !dateRange?.to || !data?.length) return data
  
  return data.filter(item => {
    const itemDate = new Date(item.created_at)
    return isWithinInterval(itemDate, { start: dateRange.from!, end: dateRange.to! })
  })
}

