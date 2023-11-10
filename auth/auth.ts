import {NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";
import VatsimProvider from "@/auth/vatsimProvider";
import {Adapter} from "next-auth/adapters";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        VatsimProvider(
            process.env['VATSIM_CLIENT_ID'],
            process.env['VATSIM_CLIENT_SECRET'],
        ),
    ],
    callbacks: {
        session: async ({session, user}) => {
            session.user = user;
            return session;
        }
    }
}