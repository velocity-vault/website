
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

export async function getCoursePbHistory(player_id, mode, map, course, kind) {
    let url = new URL('http://localhost:9000/get_course_pb_history');
    url.searchParams.append('player_id', player_id);
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

export async function searchMaps(mode, query) {
    let url = new URL('http://localhost:9000/search_maps');
    url.searchParams.append('mode', mode);
    url.searchParams.append('query', query);

    let response = await fetch(url);
    if (!response.ok) {
        throw new Error("!response.ok");
    }
    let result = await response.json();
    return result;
}

export async function searchPlayers(query) {
    let url = new URL('http://localhost:9000/search_players');
    url.searchParams.append('query', query);

    let response = await fetch(url);
    if (!response.ok) {
        throw new Error("!response.ok");
    }
    let result = await response.json();
    return result;
}

export const STEAM_AUTH_URL = "http://localhost:9000/steam_auth";

export async function verifySteamAuth(searchParams) {
    let url = new URL('http://localhost:9000/steam_auth_verify');
    url.search = searchParams;

    let response = await fetch(url);
    if (!response.ok) {
        throw new Error("!response.ok");
    }
    let result = await response.json();
    return result;
}
