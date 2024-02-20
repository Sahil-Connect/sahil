import NextAuth from "next-auth";
import initNextAuth from "@sahil/features/auth/lib/auth";

const options = initNextAuth();

// const customAuth =     CredentialsProvider({
//     async authorize(credentials) {
//       const authResponse = await fetch("/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//       })

//       if (!authResponse.ok) {
//         return null
//       }

//       const user = await authResponse.json()

//       return user
//     },
//   });

// @ts-ignore
export default NextAuth(options);
