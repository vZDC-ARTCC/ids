export type Chart = {
    name: string,
    category: string,
    url: string,
}

export type PreferredRoute = {
    origin: string,
    route: string,
    destination: string,
    hours1?: string,
    hours2?: string,
    hours3?: string,
    type?: string,
    area?: string,
    altitude?: string,
    aircraft?: string,
    flow?: string,
    seq?: number,
    d_artcc: string,
    a_artcc: string,
}

export type VatsimATISConnection = {
    cid: string,
    name: string,
    callsign: string,
    frequency: string,
    facility: number,
    rating: number,
    server: string,
    visual_range: number,
    atis_code: string,
    text_atis: string[],
    last_updated: string,
    logon_time: string,
}