import {
  arg,
  inputObjectType,
  mutationField,
  nonNull,
  objectType,
  queryField,
} from "nexus";

export enum UserStatusEnum {
  INVITED = "INVITED",
  ACTIVATED = "ACTIVATED",
  DEACTIVATED = "DEACTIVATED",
}

export  enum UserRoleENum {
  MEMBER = "MEMBER",
  ADMIN = "ADMIN",
}

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("email");
    t.nonNull.string("firstName");
    t.nonNull.string("lastName");
    t.nonNull.string("status");
    t.nonNull.string("role");
    t.nonNull.field("createdAt", { type: "DateTime" });
    t.nonNull.field("updatedAt", { type: "DateTime" });
  },
});

export const GetAllUsersQuery = queryField((t) => {
  t.nonNull.list.nonNull.field("allUsers", {
    type: "User",
    // authorize: (parent, args, context) => isAdmin(context.user),
    resolve: (_parent, _args, context) =>
      context.prisma.user.findMany(),
  });
});

// export const CreateUserInput = inputObjectType({
//   name: "CreateUserInput",
//   definition(t) {
//     t.nonNull.string("email");
//     t.nonNull.string("firstName");
//     t.nonNull.string("lastName");
//   },
// });

// export const CreateUserMutation = mutationField((t) => {
//   t.nonNull.field("createUser", {
//     type: "User",
//     args: {
//       data: nonNull(arg({ type: "CreateUserInput" })),
//     },
//     resolve: async (_, args, context) => {
//       const { firstName, lastName, email } = args.data;
//       const user = await context.prisma.user.create({
//         data: {
//           firstName,
//           lastName,
//           email,
//         },
//       });
//       return user;
//     },
//   });
// });
