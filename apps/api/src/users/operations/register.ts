export const registerUser = (user: any) => {
  console.log("got user", user);
  return Promise.resolve(user);
};
