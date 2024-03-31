export const agentAccessRules = [
  { path: "/", roles: ["user"] },
  { path: "/businesses", roles: ["user"] },
  { path: "/couriers", roles: ["user", "admin"] },
  // Add more rules as needed for app1
];
