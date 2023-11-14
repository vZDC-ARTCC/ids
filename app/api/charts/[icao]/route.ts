import {Chart} from "@/types";

export async function GET(request: Request, { params }: { params: { icao: string, }, }) {

    const { icao } = params;
    const res = await fetch(`https://api.aviationapi.com/v1/charts?apt=${icao}`, {
        next: {
            revalidate: 3600,
        }
    });
    const data = await res.json();
    const charts: {
        chart_name: string,
        chart_code: string,
        pdf_path: string,
    }[] = data[icao];

    const simpleCharts: Chart[] = charts.map((chart) => {
        return {
            name: chart.chart_name,
            category: chart.chart_code,
            url: chart.pdf_path,
        }
    });


    return Response.json(simpleCharts);
}