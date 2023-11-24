import {OAuthConfig} from "@auth/core/providers";
import {Profile, User} from "next-auth";

// vatsim oauth endpoint base url from environment variables
const VATSIM_URL = process.env['VATSIM_OAUTH_ENDPOINT'];

// enables authentication with vatsim
// needs a client and secret key to work correctly
// https://www.vatsim.dev
export default function VatsimProvider(clientId?: string, clientSecret?: string) {
    return {
        id: 'vatsim',
        name: 'VATSIM',
        type: 'oauth',
        // when a user attempts to sign in, a link is generated with the following scopes.
        // the url property is just the base url for all the other parameters to attach to
        authorization: {
            url: `${VATSIM_URL}/oauth/authorize`,
            params: {scope: "email vatsim_details full_name"},
        },
        // after a user has logged in, a code is passed back to this app from VATSIM.
        // using this code, an access token is fetched using the following url
        // again, parameters are automatically added thanks to next-auth
        token: {
            url: `${VATSIM_URL}/oauth/token`,
        },
        // once the access token is obtained, it is used to fetched data about the user, such as cid, rating, name, etc..
        userinfo: {
            url: `${VATSIM_URL}/api/user`,
        },
        // user is transformed into a different format than what VATSIM provides before being saved in the database and logged in
        profile: ({data}: { data: Profile }) => {
            return {
                id: data.cid,
                cid: data.cid,
                firstName: data.personal.name_first,
                lastName: data.personal.name_last,
                fullName: data.personal.name_full,
                email: data.personal.email,
                artcc: data.vatsim.subdivision.id || '',
                division: data.vatsim.division.id,
                rating: data.vatsim.rating.id,
            } as User;
        },
        clientId,
        clientSecret,
    } satisfies OAuthConfig<any>;
}