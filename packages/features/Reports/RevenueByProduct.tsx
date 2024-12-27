
import { Card } from "ui";
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { getRevenueByProduct, getOrderStatusStats, getClientProfitability, getClientSizeStats } from "@sahil/features/Reports/utils";


export const RevenueByProduct = ({ orders }) => {
    const revenueData = getRevenueByProduct(orders)
    return (
      <Card>
        <div>
          <h3>Revenue by Product</h3>
          <p>Distribution of revenue across different products</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    )
  }