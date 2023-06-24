import Home from './routes/Home.svelte';
import NotFound from './routes/NotFound.svelte';
import MapList from './routes/MapList.svelte';
import Map from './routes/Map.svelte';
import Search from './routes/Search.svelte';
import SteamAuth from './routes/SteamAuth.svelte';

export default {
    '/': Home,
    '/maps': MapList,
    '/maps/:name': Map,
    '/search': Search,
    '/search/:query': Search,

    // Authorization routes
    '/steam_auth': SteamAuth,

    // The catch-all route must always be last
    '*': NotFound,
};
