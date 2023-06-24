<script>
    import { searchMaps, searchPlayers } from '../api';
    import { mode } from '../stores';

    let query   = '';
    let maps    = [];
    let players = [];

    let timeoutId;
    function onInput() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(doSearch, 400);
    }
    function onKeyDown(event) {
        if (event.key === 'Enter') {
            clearTimeout(timeoutId);
            doSearch();
        }
    }
    doSearch(); // Search on load.
    function doSearch() {
        if (query.length < 2)
            return;
        let cloneQuery = query.repeat(1); // Clone the query.
        searchMaps($mode, cloneQuery).then(result => {
            if (query != cloneQuery) 
                return; // Avoid a race condition.
            maps = result;
        }).catch(() => {});
        searchPlayers(cloneQuery).then(result => {
            if (query != cloneQuery) 
                return; // Avoid a race condition.
            players = result;
        }).catch(() => {});
    }
</script>

<input type="text" placeholder="Search..." bind:value={query} on:input={onInput} on:keydown={onKeyDown}>
<hr>

<h2>Maps</h2>
{#each maps as m}
    <div>
        <a href="#/maps/{m.name}">{m.name}</a>
    </div>
{/each}
<hr>

<h2>Players</h2>
{#each players as p}
    <div>
        <a href="#/players/{p.id}">{p.name}</a>
    </div>
{/each}

<style>
    input[type="text"] {
        font-size: 18px;
    }
</style>