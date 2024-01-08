import {EnrouteConfig} from "@/types";
import {dcaAirportConfig} from "@/facility/atct/kdca";
import {iadAirportConfig} from "@/facility/atct/kiad";
import {bwiAirportConfig} from "@/facility/atct/kbwi";
import {rduAirportConfig} from "@/facility/atct/krdu";
import {orfAirportConfig} from "@/facility/atct/korf";
import {ricAirportConfig} from "@/facility/atct/kric";
export const zdc_config: EnrouteConfig = {
    id: 'ZDC',
    name: 'Washington Center',
    sopLink: '/sop/zdc.pdf',
    presets: [],
    loas: [
        {
            targetFacility: 'ZNY',
            link: '/loa/zdc/zny.pdf'
        },
        {
            targetFacility: 'ZBW',
            link: '/loa/zdc/zbw.pdf'
        },
        {
            targetFacility: 'ZID',
            link: '/loa/zdc/zbw.pdf'
        },
        {
            targetFacility: 'ZJX',
            link: '/loa/zdc/zbw.pdf'
        },
        {
            targetFacility: 'ZOB',
            link: '/loa/zdc/zbw.pdf'
        },
        {
            targetFacility: 'ZTL',
            link: '/loa/zdc/zbw.pdf'
        },
        {
            targetFacility: 'ZWY',
            link: '/loa/zdc/zbw.pdf'
        },
        {
            targetFacility: 'PHL',
            link: '/loa/zdc/phl.pdf'
        },
    ],
    airspace: [
        {
            name: 'ZDC',
            imageUrl: '/airspace/enroute/zdc.png',
            notes: [],
        },
        {
            name: 'ZDC Tracon Top Altitudes',
            imageUrl: '/airspace/enroute/zdc-tracon-alts.png',
            notes: [
                'The figure above shows the rough lateral boundaries of these TRACONs and their associated altitudes. Note that many shelves and boundaries are either simplified or not shown. Facilities with an asterisk (*) are not controlled by ZDC.'
            ],
        },
        {
            name: 'ZDC-ZNY Shelf',
            imageUrl: '/airspace/enroute/zdc-zny.png',
            notes: [],
        },
        {
            name: 'ZDC-ZTL Shelf',
            imageUrl: '/airspace/enroute/zdc-ztl.png',
            notes: [],
        },
    ],
    airportListPriority: [dcaAirportConfig, iadAirportConfig, bwiAirportConfig, rduAirportConfig, ricAirportConfig, orfAirportConfig, ],
    sectors: [
        {
            id: '05',
            name: '05 Linden (LDN)',
            frequency: '133.550',
            airspace: [
                {
                    name: 'Linden 05',
                    imageUrl: '/airspace/enroute/05/05.png',
                    notes: [
                        'Linden is a high-altitude sector which primarily works southwestbound overflight traffic originating from ZNY and the DC mets and multiple DC metro arrival and departures flows.',
                    ],
                },
                {
                    name: 'Linden over ZDC',
                    imageUrl: '/airspace/enroute/05/05_over_zdc.png',
                    notes: [],
                },
                {
                    name: 'Linden Routes and Restrictions',
                    imageUrl: '/airspace/enroute/05/05_rr.png',
                    notes: [],
                },
            ],
        },
        {
            id: '09',
            name: '09 Dixon (DIW)',
            frequency: '118.825',
            airspace: [
                {
                    name: 'Dixon 09',
                    imageUrl: '/airspace/enroute/09/09.png',
                    notes: [
                        'Dixon is, by far, the largest single sector within vZDC. It encompasses essentially the entirety of Area 3 (Snowbird), plus additional low-altitude airspace within Area 2 (Metro South). On VATSIM, these areas tend to get very little traffic, so the sector was kept large to offset this.'
                    ],
                },
                {
                    name: 'Dixon over ZDC',
                    imageUrl: '/airspace/enroute/09/09_over_zdc.png',
                    notes: [],
                },
                {
                    name: 'Dixon Routes and Restrictions',
                    imageUrl: '/airspace/enroute/09/09_rr.png',
                    notes: [],
                },
            ],
        },
        {
            id: '12',
            name: '12 Brooke (BRV)',
            frequency: '126.875',
            airspace: [
                {
                    name: 'Brooke 12',
                    imageUrl: '/airspace/enroute/12/12.png',
                    notes: [
                        'Brooke is the core sequencing/spacing powerhouse sector for ZDC’s New York flows (and PHL via PAATS). Brooke merges many flows and spaces arrival traffic for Swann (PHL), Dupont (EWR/TEB), and Woodstown (LGA/HPN/BOS/BED/BDL/SWF/etc, and overflights).'
                    ],
                },
                {
                    name: 'Brooke over ZDC',
                    imageUrl: '/airspace/enroute/12/12_over_zdc.png',
                    notes: [],
                },
                {
                    name: 'Brooke Routes and Restrictions',
                    imageUrl: '/airspace/enroute/12/12_rr.png',
                    notes: [],
                },
            ],
        },
        {
            id: '17',
            name: '17 Swann (SWN)',
            frequency: '134.500',
            airspace: [
                {
                    name: 'Swann 17',
                    imageUrl: '/airspace/enroute/17/17.png',
                    notes: [
                        'One of the smallest sectors within vZDC, Swann works the heavy departure flows northeastbound out of the DC metro area, at low altitude. They must coordinate with Brooke/Dupont/Woodstown to get DC-NY traffic sequenced with overhead NY arrivals as quickly as possible. Add in a few PHLs via PAATS, and you may find that Swann can quickly become a very fast-paced and demanding sector.'
                    ],
                },
                {
                    name: 'Swann over ZDC',
                    imageUrl: '/airspace/enroute/17/17_over_zdc.png',
                    notes: [],
                },
                {
                    name: 'Swann Routes and Restrictions',
                    imageUrl: '/airspace/enroute/17/17_rr.png',
                    notes: [],
                },
            ],
        },
        {
            id: '19',
            name: '19 Woodstown (OOD)',
            frequency: '125.450',
            airspace: [
                {
                    name: 'Woodstown 19',
                    imageUrl: '/airspace/enroute/19/19.png',
                    notes: [
                        'Traffic in the Woodstown sector is very high volume, but it flows in an organized manner. Everything goes one direction, LGAs and HPNs descend in stacks, while DC metro departures climb on a parallel route. In perfect conditions, Woodstown can comfortably handle an enormous volume of traffic, but once they start needing to vector for LGA spacing, or get thrown in the hold, the degree of difficulty increases sharply. However, Woodstown is built to hold, and should be holding many many LGAs before they consider shutting off Swann/Brooke.'
                    ],
                },
                {
                    name: 'Woodstown over ZDC',
                    imageUrl: '/airspace/enroute/19/19_over_zdc.png',
                    notes: [],
                },
                {
                    name: 'Woodstown Routes and Restrictions',
                    imageUrl: '/airspace/enroute/19/19_rr.png',
                    notes: [],
                },
            ],
        },
        {
            id: '20',
            name: '20 Blackstone (BKT)',
            frequency: '127.750',
            
            airspace: [
                {
                    name: 'Blackstone 20',
                    imageUrl: '/airspace/enroute/20/20.png',
                    notes: [
                        'Blackstone is a low-altitude sector which works arrivals into the DC mets from the south (IAD via CAVLR, DCA via CAPSS, BWI via RAVNN), as well as to Raleigh (via TAQLE), Norfolk (via TERKS), and Richmond (via DUCXS), plus northbound Raleigh departures (via OXFRD/BEXGO). Blackstone is sheltered from overflights and NY/PHL traffic, which will all remain up top in Brooke.'
                    ],
                },
                {
                    name: 'Blackstone over ZDC',
                    imageUrl: '/airspace/enroute/20/20_over_zdc.png',
                    notes: [],
                },
                {
                    name: 'Blackstone Routes and Restrictions',
                    imageUrl: '/airspace/enroute/20/20_rr.png',
                    notes: [],
                },
            ],
        },
        {
            id: '32',
            name: '32 Gordonsville (GVE)',
            frequency: '133.725',
            
            airspace: [
                {
                    name: 'Gordonsville 32',
                    imageUrl: '/airspace/enroute/32/32.png',
                    notes: [
                        'Gordonsville works arrivals to CLT via CHSLY, RDU via ALDAN, and a good amount of overflight traffic southwestbound via Q75, and northeastbound via Q22/Q60.'
                    ],
                },
                {
                    name: 'Gordonsville over ZDC',
                    imageUrl: '/airspace/enroute/32/32_over_zdc.png',
                    notes: [],
                },
                {
                    name: 'Gordonsville Routes and Restrictions',
                    imageUrl: '/airspace/enroute/32/32_rr.png',
                    notes: [],
                },
            ],
        },
        {
            id: '36',
            name: '36 Raleigh (RDU)',
            frequency: '118.925',
            
            airspace: [
                {
                    name: 'Raleigh 36',
                    imageUrl: '/airspace/enroute/36/36.png',
                    notes: [
                        'As Brooke does for Dupont/Woodstown, Raleigh High is the powerhouse sequencing sector for DC met arrivals, which they feed to Blackstone for fine-tuning. Raleigh High also has to contend with CLT departures (via KILNS/BARMY), and significant, crossing overflight traffic northeastbound from ZTL/ZJX, and southbound Florida traffic.'
                    ],
                },
                {
                    name: 'Raleigh over ZDC',
                    imageUrl: '/airspace/enroute/36/36_over_zdc.png',
                    notes: [],
                },
                {
                    name: 'Raleigh Routes and Restrictions',
                    imageUrl: '/airspace/enroute/36/36_rr.png',
                    notes: [],
                },
            ],
        },
        {
            id: '37',
            name: '37 Marlinton (MAR)',
            frequency: '133.025',
            
            airspace: [
                {
                    name: 'Marlinton 37',
                    imageUrl: '/airspace/enroute/37/37.png',
                    notes: [
                        'Sister to the Blue Ridge sector, Marlinton’s dominant flow is arrivals to the DC mets from the west. Specifically, they will work IAD (via GIBBZ from ZID), DCA (via TRUPS), BWI (via RAVNN), and relatively minimal overflight traffic.'
                    ],
                },
                {
                    name: 'Marlinton over ZDC',
                    imageUrl: '/airspace/enroute/37/37_over_zdc.png',
                    notes: [],
                },
                {
                    name: 'Marlinton Routes and Restrictions',
                    imageUrl: '/airspace/enroute/37/37_rr.png',
                    notes: [],
                },
            ],
        },
        {
            id: '51',
            name: '51 Casino (CAS)',
            frequency: '127.700',
            
            airspace: [
                {
                    name: 'Casino 51',
                    imageUrl: '/airspace/enroute/51/51.png',
                    notes: [
                        'Casino works arrivals to PHL (via PAATS/JIIMS), southbound departures out of PHL (via OOD), arrivals to IAD (T358), DCA (DEALE), ADW (SPISY), and BWI (MIIDY), as well as their low-altitude departures, and all DC-JFK traffic. Casino is very unique in the way all of these strong flows interact with smaller flows to/from ACY/DOV/WRI, with everything crossing each other at perpendicular angles, cramped in very close quarters. And it’s almost like a mini approach control in the way three transitions of the JIIMS arrival are to be vectored at the last minute into a single flow.'
                    ],
                },
                {
                    name: 'Casino over ZDC',
                    imageUrl: '/airspace/enroute/51/51_over_zdc.png',
                    notes: [],
                },
                {
                    name: 'Casino Routes and Restrictions',
                    imageUrl: '/airspace/enroute/51/51_rr.png',
                    notes: [],
                },
            ],
        },
        {
            id: '52',
            name: '52 Tech (TEC)',
            frequency: '133.575',
            
            airspace: [
                {
                    name: 'Tech 52',
                    imageUrl: '/airspace/enroute/52/52.png',
                    notes: [
                        'Tech’s primary workload comes from the ATL arrivals via OZZZI, plus various overflights exchanged with ZTL/ZID.'
                    ],
                },
                {
                    name: 'Tech over ZDC',
                    imageUrl: '/airspace/enroute/52/52_over_zdc.png',
                    notes: [],
                },
                {
                    name: 'Tech Routes and Restrictions',
                    imageUrl: '/airspace/enroute/52/52_rr.png',
                    notes: [],
                },
            ],
        },
        {
            id: '54',
            name: '54 Salisbury (SBY)',
            frequency: '120.975',
            
            airspace: [
                {
                    name: 'Salisbury 54',
                    imageUrl: '/airspace/enroute/54/54.png',
                    notes: [
                        'Salisbury sequences and spaces JFK/HPN/FRG/ISP/BOS/BED/BDL/etc for Coyle and Sea Isle, mixes soutbound PHL/WRI/ACY departures into the NY/BOS southbound flow, and descends PHL/ACY/ORF/RIC traffic.'
                    ],
                },
                {
                    name: 'Salisbury over ZDC',
                    imageUrl: '/airspace/enroute/54/54_over_zdc.png',
                    notes: [],
                },
                {
                    name: 'Salisbury Routes and Restrictions',
                    imageUrl: '/airspace/enroute/54/54_rr.png',
                    notes: [],
                },
            ],
        },
        {
            id: '58',
            name: '58 Coyle (CYN)',
            frequency: '121.025',
            
            airspace: [
                {
                    name: 'Coyle 58',
                    imageUrl: '/airspace/enroute/58/58.png',
                    notes: [
                        'Coyle’s dominant flow is of southbound departures out of the NY metros via WHITE, into which PHL departures (via OOD) climb to join at the bottom of the sector. Traffic also flows north, against the WHITE departures, bound for BOS/BED/BDL/SWF/ALB, many of which must descend through the climbing WHITE departures. It is worth noting that, in a BOS event, Coyle needs to be aware of BOS traffic going through Woodstown, because they converge over JFK, and ZNY will likely need them spaced as one.'
                    ],
                },
                {
                    name: 'Coyle over ZDC',
                    imageUrl: '/airspace/enroute/58/58_over_zdc.png',
                    notes: [],
                },
                {
                    name: 'Coyle Routes and Restrictions',
                    imageUrl: '/airspace/enroute/58/58_rr.png',
                    notes: [],
                },
            ],
        },
        {
            id: '59',
            name: '59 Sea Isle (SIE)',
            frequency: '133.125',
            
            airspace: [
                {
                    name: 'Sea Isle 59',
                    imageUrl: '/airspace/enroute/59/59.png',
                    notes: [
                        'Sea Isle receives northbound traffic destined for the NY metro area (JFK/HPN/FRG/ISP/etc), routed over SIE, stacked from Salisbury, in a very specific manner. Sea Isle will step aircraft down within these stacks in order to make the necessary restrictions at the ZNY boundary. The descent profiles in some cases are extremely steep, so timely descent clearances are critical, especially in strong winter tailwinds. Traffic at the east end of the sector also flows north/south head-on via a single airway, with many needing to descend (for the DC mets) and climb (from NY via WAVEY) through all of the overflights.'
                    ],
                },
                {
                    name: 'Sea Isle over ZDC',
                    imageUrl: '/airspace/enroute/59/59_over_zdc.png',
                    notes: [],
                },
                {
                    name: 'Sea Isle Routes and Restrictions',
                    imageUrl: '/airspace/enroute/59/59_rr.png',
                    notes: [],
                },
            ],
        },
    ],
}