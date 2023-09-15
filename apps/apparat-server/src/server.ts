import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { schema } from "./schema";
import { passport } from "./passport";
import { Context, createContext, prisma } from "./context";
import express from "express";
import cors from "cors";
import http from "http";
import pkg from "body-parser";
import { AuthConstants } from "./constants";
import { signToken } from "./jsonwebtoken";

const app = express();
// https://www.npmjs.com/package/cors
app.use(cors<cors.CorsRequest>());
// https://www.npmjs.com/package/body-parser
app.use(pkg.json());

const httpServer = http.createServer(app);
const server = new ApolloServer<Context>({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

// Apollo express setup guide 
// https://www.apollographql.com/docs/apollo-server/migration
const start = async () => {
  await server.start();

  app.use(
    "/graphql",
    passport.authenticate("jwt", { session: false }),
    expressMiddleware(server, {
      context: ({ req }) => createContext(req.user),
    })
  );

  app.get("/", (_req, res) => res.json({ message: "ok" }).status(200));

  app.get(
    AuthConstants.google.loginURL,
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    AuthConstants.google.callbackURL,
    passport.authenticate("google", { session: false }),
    async (req, res) => {
      if (!req.user) {
        res
          .json({
            message: "Something went wrong",
          })
          .status(500);
        return;
      }

      try {
        const { id, ...userData } = req.user;
        const foundUser = await prisma.user.findFirst({
          where: { email: userData.email },
        });

        if (!foundUser) {
          await prisma.user.create({
            data: userData,
          });
        }

        const token = signToken(userData);

        res.json({ token }).status(200);
      } catch (e) {
        res
          .json({
            message: e || "Something went wrong",
          })
          .status(500);
      }
    }
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: process.env.BASE_API_PORT }, resolve)
  );

  console.log(`Server ready http://localhost:${process.env.BASE_API_PORT}`);
};

start();
