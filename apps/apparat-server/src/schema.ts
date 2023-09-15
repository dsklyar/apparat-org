import { makeSchema, asNexusMethod, fieldAuthorizePlugin } from "nexus";
import * as Schemas from "./schemas";

import { DateTimeResolver } from "graphql-scalars";
const DateTime = asNexusMethod(DateTimeResolver, "date");

export const schema = makeSchema({
  types: [Schemas, DateTime],
  outputs: {
    schema: __dirname + "/../schema.graphql",
    typegen: __dirname + "/generated/nexus.ts",
  },
  contextType: {
    module: require.resolve("./context"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "prisma",
      },
    ],
  },
  plugins: [fieldAuthorizePlugin()],
});
