import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     email: "123@o2.pl",
  //     password: "123",
  //   },
  // });
  // const users = await prisma.user.findMany();
  // console.log(users);
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
