export function getMetarColor(metar: string): string {
    // Split the METAR string into its components
    const metarComponents = metar.split(' ');

    // Extract the visibility and cloud ceiling
    const visibility = parseFloat(metarComponents[3].replace('SM', ''));
    let cloudCeiling = 99999;
    for (let i = 4; i < metarComponents.length; i++) {
        if (metarComponents[i].startsWith('CLR')) {
            cloudCeiling = 99999;
            break;
        }
        if (metarComponents[i].startsWith('BKN') || metarComponents[i].startsWith('OVC')) {
            cloudCeiling = parseInt(metarComponents[i].slice(3)) * 100;
            break;
        }
    }

    // Determine the flight rule based on the visibility and cloud ceiling
    if (visibility >= 5 && cloudCeiling >= 3000) {
        return 'green'; // VFR
    } else if (visibility < 1 || cloudCeiling < 500) {
        return 'red'; // IFR
    } else if ((visibility >= 3 && visibility < 5) || (cloudCeiling >= 1000 && cloudCeiling < 3000)) {
        return 'blue'; // MVFR
    } else if (visibility < 3 || cloudCeiling < 1000) {
        return 'magenta'; // LIFR
    } else {
        return 'white'; // Unknown flight rule
    }
}