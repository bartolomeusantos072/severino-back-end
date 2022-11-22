import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const nayane = await prisma.user.upsert({
    where: { email: 'nayane@prisma.io' },
    update: {},
    create: {
      email: 'nayane@prisma.io',
      password: '123456',
    },
  })
  const thalyta = await prisma.user.upsert({
    where: { email: 'thalyta@prisma.io' },
    update: {},
    create: {
      email: 'thalyta@prisma.io',
      password: '123456',
    },
  })
  console.log({ nayane, thalyta })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })