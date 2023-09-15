import { SignOptions, sign } from "jsonwebtoken";

export const signToken = (user: any, options?: SignOptions): string => {
  const token = sign(user, process.env.APPLICATION_SECRET as string, {
    expiresIn: "1 day",
    ...options,
  });
  return token;
};
