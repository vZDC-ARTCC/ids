import {NextAuthOptions, User} from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";
import VatsimProvider from "@/auth/vatsimProvider";
import {Adapter} from "next-auth/adapters";

const prisma = new PrismaClient();
const VATUSA_FACILITY = process.env['VATUSA_FACILITY'];

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

            const rosterCheckDisabled: boolean = process.env['DISABLE_ROSTER_CHECK'] === 'true';

            if (rosterCheckDisabled) {
                return true;
            } else {
                const res = await fetch(`https://api.vatusa.net/v2/facility/${VATUSA_FACILITY}/roster/both`);
                const data = await res.json();
                const controllers = data.data as User[];
                const controllers_cid = controllers.map((controller) => controller.cid);

                return controllers_cid.includes(user.cid);
            }

        },
        session: async ({session, user}) => {
            session.user = user;
            return session;
        }
    }
}