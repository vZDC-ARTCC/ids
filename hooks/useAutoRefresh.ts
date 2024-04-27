"use client";
import {useCallback, useEffect, useState} from "react";
import {InformationChange} from "@/components/ChangeAnnouncer/information_change";

export function useAutoRefresh<T>(interval: number, fetchFunction: () => Promise<T>, getChanges: (oldData?: T, newData?: T) => InformationChange[]): [T | undefined, InformationChange[], (changesToRemove: InformationChange[]) => void] {

    const [data, setData] = useState<T>();
    const [changes, setChanges] = useState<InformationChange[]>([]);
    const [first, setFirst] = useState(true);

    function removeChanges(changesToRemove: typeof changes) {
        setChanges((prev) => prev.filter((c) => !changesToRemove.includes(c)));
    }
    
    const update = useCallback(async () => {
        const newData = await fetchFunction();
        setData((oldData) => {
            setChanges((oldChanges) => {
                const updatedChanges = [...oldChanges, ...getChanges(oldData, newData)];
                return updatedChanges.filter((thing, index, self) => self.findIndex(t => t.type === thing.type && t.message === thing.message) === index)
            });
            return newData;
        });
    }, [fetchFunction, getChanges]);

    useEffect(() => {
        if (first) {
            update().then(() => setFirst(false));
        }
        const refreshInterval = setInterval(() => {
            update().then();
        }, interval);
        return () => clearInterval(refreshInterval);
    }, [first, interval, update]);

    return [data, changes, removeChanges];
}