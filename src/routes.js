import Home from './routes/Home.svelte';
import NotFound from './routes/NotFound.svelte';
import MapList from './routes/MapList.svelte';
import Map from './routes/Map.svelte';

export default {
    '/': Home,
    '/maps': MapList,
    '/maps/:name': Map,
    '/maps/:name/:course': Map,

    // The catch-all route must always be last
    '*': NotFound,
};
