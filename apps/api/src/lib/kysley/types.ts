import { ColumnType, Insertable, Selectable, Updateable } from "kysely";

export interface Database {
  users: UsersTable;
  suppliers: SupplierTable;
  businesses: BusinessTable;
  couriers: CourierTable;
  agents: AgentTable;
  order_items: OrderItemTable;
  orders: OrderTable;
  products: ProductTable;
}

// users
export interface UsersTable {
  created_at: ColumnType<Date, string | undefined, never>;
}

export type Users = Selectable<UsersTable>;
export type NewUsers = Insertable<UsersTable>;
export type UsersUpdate = Updateable<UsersTable>;

// suppliers
export interface SupplierTable {
  created_at: ColumnType<Date, string | undefined, never>;
}

export type Supplier = Selectable<SupplierTable>;
export type NewSupplier = Insertable<SupplierTable>;
export type SupplierUpdate = Updateable<SupplierTable>;

// businesses
export interface BusinessTable {
  created_at: ColumnType<Date, string | undefined, never>;
}

export type Business = Selectable<BusinessTable>;
export type NewBusiness = Insertable<BusinessTable>;
export type BusinessUpdate = Updateable<BusinessTable>;

// couriers
export interface CourierTable {
  created_at: ColumnType<Date, string | undefined, never>;
}

export type Courier = Selectable<CourierTable>;
export type NewCourier = Insertable<CourierTable>;
export type CourierUpdate = Updateable<CourierTable>;

// agents
export interface AgentTable {
  created_at: ColumnType<Date, string | undefined, never>;
}

export type Agent = Selectable<AgentTable>;
export type NewAgent = Insertable<AgentTable>;
export type AgentUpdate = Updateable<AgentTable>;

// order items
export interface OrderItemTable {
  created_at: ColumnType<Date, string | undefined, never>;
}

export type OrderItem = Selectable<OrderItemTable>;
export type NewOrderItem = Insertable<OrderItemTable>;
export type OrderItemUpdate = Updateable<OrderItemTable>;

// orders
export interface OrderTable {
  created_at: ColumnType<Date, string | undefined, never>;
}

export type Order = Selectable<OrderTable>;
export type NewOrder = Insertable<OrderTable>;
export type OrderUpdate = Updateable<OrderTable>;

// products
export interface ProductTable {
  created_at: ColumnType<Date, string | undefined, never>;
}

export type Product = Selectable<ProductTable>;
export type NewProduct = Insertable<ProductTable>;
export type ProductUpdate = Updateable<ProductTable>;
