import {TraconAreaData} from "@/app/tracon/[id]/[area]/page";
import {EnrouteData} from "@/app/erids/page";
import {InformationChange} from "@/components/ChangeAnnouncer/information_change";

export function getRadarChanges(oldData?: TraconAreaData | EnrouteData, newData?: TraconAreaData | EnrouteData): InformationChange[] {
    if (!oldData) return [];
    if (oldData.splits.length !== newData?.splits?.length ||
        !oldData.splits.every((ta, i) =>
            ta.parentSectorId === newData.splits[i].parentSectorId &&
            ta.childSectors.map((cs) => cs.id).every((s: string, idx: number) => s === newData.splits[i].childSectors[idx].id)
        )) {
        if (!!(newData as TraconAreaData).traconArea) {
            return [{
                type: "tracon_sectors",
                message: `SPLITS UPDATED`,
            }];
        }
        return [{
            type: "enroute_sectors",
            message: `SPLITS UPDATED`,
        }];
    }
    return [];
}