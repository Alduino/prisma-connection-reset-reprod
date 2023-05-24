import { headers } from "next/headers";
import prisma from "../utils/prisma";

async function loadData() {
    await prisma.test.findFirst();
}

async function Component() {
    await Promise.all([loadData(), loadData(), loadData()]);

    return (
        <p>Loaded successfully.</p>
    );
}

export default async function Page() {
    // force dynamic page
    headers();

    return (
        <Component />
    );
}
