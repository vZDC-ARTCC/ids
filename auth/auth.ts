import {NextAuthOptions, User} from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";
import VatsimProvider from "@/auth/vatsimProvider";
import {Adapter} from "next-auth/adapters";

// grab a new instance of Prisma
const prisma = new PrismaClient();

// get facility from environment variables
const VATUSA_FACILITY = process.env['VATUSA_FACILITY'];

export const authOptions: NextAuthOptions = {
    // configure next-auth to use prisma
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        // define VATSIM as one of our oauth providers
        VatsimProvider(
            process.env['VATSIM_CLIENT_ID'],
            process.env['VATSIM_CLIENT_SECRET'],
        ),
    ],
    callbacks: {
        // method to check if user is allowed to sign in.
        // using this to check if controller is part of the facility defined in environment variables
        signIn: async ({user}) => {

            // convert the DISABLE_ROSTER_CHECK environment variable to a boolean
            const rosterCheckDisabled: boolean = process.env['DISABLE_ROSTER_CHECK'] === 'true';

            // if roster check is disabled, any controller is able to sign in and the facility check is skipped
            if (rosterCheckDisabled) {
                return true;
            } else {
                // fetch roster for facility defined in environment variables
                const res = await fetch(`https://api.vatusa.net/v2/facility/${VATUSA_FACILITY}/roster/both`);
                const data = await res.json();
                // { data: [{ cid: number,... },...], }
                // extract the array from 'data' and tell typescript that there is guaranteed to be a cid in all the values
                const controllers = data.data as User[];
                // remove all the other attributes from the list to leave a list of ONLY cids
                // [cid....]
                const controllers_cid = controllers.map((controller) => controller.cid);

                // return true of false depending on if the user is part of the list of cids, hence being part of the roster
                // if the user is not allowed to sign in, a page is displayed notifying them.
                return controllers_cid.includes(user.cid);
            }

        },
        // method that executes everytime the session is retrieved
        session: async ({session, user}) => {
            // add the user to the session so more than just the email is visible to the client
            // cid, rating, and all other fields are not visible
            session.user = user;

            // return the updated session
            return session;
        }
    }
}