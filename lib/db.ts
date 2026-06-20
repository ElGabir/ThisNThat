/**
 * Real Database Client
 * Production-ready Prisma integration with PostgreSQL/MySQL/SQLite
 */

let prisma: any

if (process.env.NODE_ENV === 'production') {
  const { PrismaClient } = require('@prisma/client')
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    const { PrismaClient } = require('@prisma/client')
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma

// Helper functions for common operations
export const dbClient = {
  user: {
    create: (data: any) => prisma.user.create({ data }),
    findUnique: (where: any) => prisma.user.findUnique({ where }),
    findUniquOrThrow: (where: any) => prisma.user.findUniqueOrThrow({ where }),
    update: (where: any, data: any) => prisma.user.update({ where, data }),
    delete: (where: any) => prisma.user.delete({ where }),
    findMany: (args: any) => prisma.user.findMany(args),
  },

  aiResponse: {
    create: (data: any) => prisma.aiResponse.create({ data }),
    findUnique: (where: any) => prisma.aiResponse.findUnique({ where }),
    findMany: (args: any) => prisma.aiResponse.findMany(args),
    update: (where: any, data: any) => prisma.aiResponse.update({ where, data }),
  },

  payment: {
    create: (data: any) => prisma.payment.create({ data }),
    findUnique: (where: any) => prisma.payment.findUnique({ where }),
    findMany: (args: any) => prisma.payment.findMany(args),
    update: (where: any, data: any) => prisma.payment.update({ where, data }),
  },

  subscription: {
    findMany: (args: any) => prisma.subscription.findMany(args),
    findUnique: (where: any) => prisma.subscription.findUnique({ where }),
    create: (data: any) => prisma.subscription.create({ data }),
  },

  auditLog: {
    create: (data: any) => prisma.auditLog.create({ data }),
    findMany: (args: any) => prisma.auditLog.findMany(args),
  },
}
