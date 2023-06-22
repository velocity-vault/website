
export const MODES = ['KZT', 'SKZ', 'VNL'];

export async function getMaps(mode) {
    let url = new URL('http://localhost:9000/maps');
    url.searchParams.append('mode', mode);
    
    let response = await fetch(url);
    if (!response.ok) {
        return null;
    }
    let result = await response.json();
    return result;
}

export async function getMapTop(mode, mapName, course, kind) {
    let url = new URL('http://localhost:9000/maptop');
    url.searchParams.append('mode', mode);
    url.searchParams.append('map_name', mapName);
    url.searchParams.append('course', course);
    url.searchParams.append('kind', kind);

    let response = await fetch(url);
    if (!response.ok) {
        return null;
    }
    let result = await response.json();
    return result;    
}
