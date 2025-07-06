const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

prisma.user
  .create({
    // data object
    data: {
      name: "Brisma",
      bio: "Hello",
      posts: {
        create: [{ content: "First Post" }, { content: "Second Post" }],
      },
    },
  })
  .then(() => {
    console.log("Inserted User Brisma with Posts");
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(()=>{
    prisma.$disconnect();
  })
