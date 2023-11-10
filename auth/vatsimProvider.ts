import {OAuthConfig} from "@auth/core/providers";
import {Profile, User} from "next-auth";

const VATSIM_URL = process.env['VATSIM_OAUTH_ENDPOINT'];

export default function VatsimProvider(clientId?: string, clientSecret?: string) {
    return {
        id: 'vatsim',
        name: 'VATSIM',
        type: 'oauth',
        authorization: {
            url: `${VATSIM_URL}/oauth/authorize`,
            params: {scope: "email vatsim_details full_name"},
        },
        token: {
            url: `${VATSIM_URL}/oauth/token`,
        },
        userinfo: {
            url: `${VATSIM_URL}/api/user`,
        },
        profile: ({data}: { data: Profile }) => {
            return {
                id: data.cid,
                cid: data.cid,
                firstName: data.personal.name_first,
                lastName: data.personal.name_last,
                fullName: data.personal.name_full,
                email: data.personal.email,
                artcc: data.vatsim.subdivision.id,
                division: data.vatsim.division.id,
                rating: data.vatsim.rating.id,
            } as User;
        },
        clientId,
        clientSecret,
    } satisfies OAuthConfig<any>;
}