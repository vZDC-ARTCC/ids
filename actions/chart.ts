"use server";

import {Chart} from "@/types";

export async function getCharts(icao: string) {
    const res = await fetch(`https://api.aviationapi.com/v1/charts?apt=${icao}`);
    const data = await res.json();
    const charts = data[icao] || [];
    return charts.map((chart: any) => {
        return {
            category: chart.chart_code,
            name: chart.chart_name,
            url: chart.pdf_path,
        }
    }) as Chart[];
}