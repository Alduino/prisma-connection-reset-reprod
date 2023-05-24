import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient({
    log: [
        "info",
        "error",
        "warn",
        "query"
    ]
});

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
