import { z } from "zod";

const userSchema = z.object({
    name: z.string()
});

type UserAttr = z.infer<typeof userSchema>;

export const registerUser = (user: UserAttr) => {
    return user;
}