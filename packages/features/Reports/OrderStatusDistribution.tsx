
import { Card } from "ui";
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { getRevenueByProduct, getOrderStatusStats, getClientProfitability, getClientSizeStats } from "@sahil/features/Reports/utils";



export const OrderStatusDistribution = ({ orders }) => {
    const statusData = getOrderStatusStats(orders)
    return (
      <Card>
        <div>
          <h3>Order Status Distribution</h3>
          <p>Overview of order statuses</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={statusData}
              dataKey="count"
              nameKey="status"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#82ca9d"
              label
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    )
  }
  