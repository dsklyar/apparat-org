import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedDevelopment = async () => {
  await prisma.user.create({
    data: {
      email: "danielksklyar@gmail.com",
      firstName: "Daniel",
      lastName: "Sklyar",
      status: "ACTIVATED",
      role: "ADMIN",
      //   albums: {
      //     create: {
      //         name: "Generic Pictures",
      //         photos: {
      //             create: {
      //                 url: 'some-url'
      //             }
      //         }
      //     }
      //   }
    },
  });
};

async function main() {
  const environment = process.env.APPLICATION_ENV || "development";

  switch (environment) {
    case "development": {
      await seedDevelopment();
      break;
    }
    default:
      break;
  }

  console.log("Database seeded!");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
