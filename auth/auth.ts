import {NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import VatsimProvider from "@/auth/vatsimProvider";
import {Adapter} from "next-auth/adapters";
import prisma from "@/lib/db";

const VATUSA_FACILITY = process.env['VATUSA_FACILITY'];
const DEV_MODE = process.env['DEV_MODE'] === 'true';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        VatsimProvider(
            process.env['VATSIM_CLIENT_ID'],
            process.env['VATSIM_CLIENT_SECRET'],
        ),
    ],
    callbacks: {
        signIn: async ({user}) => {
            if (!DEV_MODE) {
                if (user.division !== 'USA' || user.artcc !== VATUSA_FACILITY) {
                    return false;
                }
                const res = await fetch(`https://api.vatusa.net/v2/facility/${VATUSA_FACILITY}/roster/both`);
                const rosterData = await res.json();
                const controllers = rosterData.data as any[];
                return controllers.find((controller) => controller.cid === user.cid);
            }
            return true;
        },
        session: async ({session, user}) => {
            session.user = user;
            return session;
        }
    }
}