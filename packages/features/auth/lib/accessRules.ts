export const ADMIN_ACCESS_RULES = [
  // { path: "/", roles: ["admin"] },
  // Add more rules as needed for admin
];

export const AGENT_ACCESS_RULES = [
  // { path: "/", roles: ["user"] },
  // { path: "/businesses", roles: ["user"] },
  // { path: "/couriers", roles: ["user", "admin"] },
  // Add more rules as needed for agent
];

export const CLIENT_ACCESS_RULES = [
  { path: "/", roles: ["supplier", "business"] },
  // Add more rules as needed for client
];

export const COURIER_ACCESS_RULES = [
  // { path: "/", roles: ["courier"] },
  // Add more rules as needed for courier
];
