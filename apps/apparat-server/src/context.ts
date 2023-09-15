import { PrismaClient } from "@prisma/client";
import Express from "express";

export interface Context {
  prisma: PrismaClient;
  user: Express.Request['user']
}

export const prisma = new PrismaClient();

export const createContext = async (
  user: Express.Request['user']
): Promise<Context> => ({
  prisma: prisma,
  user,
});
