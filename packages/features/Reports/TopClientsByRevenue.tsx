
import { Card } from "ui";
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { getRevenueByProduct, getOrderStatusStats, getClientProfitability, getClientSizeStats } from "@sahil/features/Reports/utils";


export const TopClientsByRevenue = ({ orders }) => {
    const clientProfitability = getClientProfitability(orders)
    return (
      <Card>
        <div>
          <h3>Top Clients by Revenue</h3>
          <p>Most profitable clients</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={clientProfitability.slice(0, 5)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    )
  }
  