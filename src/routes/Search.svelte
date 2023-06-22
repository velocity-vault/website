<script>
    import { searchMaps, searchPlayers } from '../api';
    import { mode } from '../stores';

    let textboxQuery = '';
    let delayedQuery = '';

    let mapResults = [];
    let playerResults = [];

    let timeoutId;
    function onInput() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(onTimeout, 400);
    }
    function onKeyDown(event) {
        if (event.key === 'Enter') {
            clearTimeout(timeoutId);
            onTimeout();
        }
    }
    function onTimeout() {
        delayedQuery = textboxQuery.trim();
    }

    $: {
        let query = delayedQuery.repeat(1); // clone the query
        if (query.length >= 2) {
            searchMaps($mode, delayedQuery).then(result => {
                if (query != delayedQuery) 
                    return; // avoid a race condition
                mapResults = result;
            }).catch(() => {});
            searchPlayers(delayedQuery).then(result => {
                if (query != delayedQuery) 
                    return; // avoid a race condition
                playerResults = result;
            }).catch(() => {});
        }
    }
</script>

<input type="text" placeholder="Search..." bind:value={textboxQuery} on:input={onInput} on:keydown={onKeyDown}>
<hr>

<h2>Maps</h2>
{#each mapResults as m}
    <div>
        <a href="#/maps/{m.name}">{m.name}</a>
    </div>
{/each}
<hr>

<h2>Players</h2>
{#each playerResults as p}
    <div>
        <a href="#/players/{p.id}">{p.name}</a>
    </div>
{/each}

<style>
    input[type="text"] {
        font-size: 18px;
    }
</style>