import { PrismaClient } from "@prisma/client";
import { initialData } from "../src/data/seed-data";

const prisma = new PrismaClient();

async function main() {
  await prisma.commerce.deleteMany();

  await prisma.commerce.createMany({
    data: initialData.commerces,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
