const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
prisma.user
  .upsert({
    where: { id: 1 },
    update: { name: "Shine", bio: "Shine's bio" },
    create: { name: "Bobby", bio: "Shine's bio" },
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
