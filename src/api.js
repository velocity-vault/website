
export const MODES = [];

export async function getMap(mode, map) {
    let url = new URL('http://localhost:9000/get_map');
    url.searchParams.append('mode', mode);
    url.searchParams.append('map', map);

    let response = await fetch(url);
    if (!response.ok) {
        throw new Error("!response.ok");
    }
    let result = await response.json();
    return result;    
}

export async function getMaps(mode) {
    let url = new URL('http://localhost:9000/get_maps');
    url.searchParams.append('mode', mode);
    
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error("!response.ok");
    }
    let result = await response.json();
    return result;
}

export async function getMapTop(mode, map, course, kind) {
    let url = new URL('http://localhost:9000/get_maptop');
    url.searchParams.append('mode', mode);
    url.searchParams.append('map', map);
    url.searchParams.append('course', course);
    url.searchParams.append('kind', kind);

    let response = await fetch(url);
    if (!response.ok) {
        throw new Error("!response.ok");
    }
    let result = await response.json();
    return result;    
}

export async function getModes() {
    let url = new URL('http://localhost:9000/get_modes');

    let response = await fetch(url);
    if (!response.ok) {
        throw new Error("!response.ok");
    }
    let result = await response.json();
    return result;    
}
