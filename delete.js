const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

prisma.user
  .delete({
    where: { id: 1 },
  })
  .then(() => console.log("user deleted"))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
