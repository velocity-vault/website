<script>
    import MapPbHistory from "./MapPbHistory.svelte";
    import { getMapTop } from "../api";

    export let runs;

    export let mode;
    export let map;
    export let course;
    export let kind;

    let pbHistoryIndex = null;
    function setPbHistoryIndex(i) {
        if (pbHistoryIndex === i)
            pbHistoryIndex = -1;
        else
            pbHistoryIndex = i;
    }

    $: {
        pbHistoryIndex = null;
        runs = getMapTop($mode, map, course, kind);
    }
</script>

<div class="grid">
    <div>rank</div>
    <div>player</div>
    <div>time</div>
    <div>teleports</div>
    <div>date</div>
    <div></div>
</div>
<div class="data-container">
    {#await runs then runs}
        {#each runs as run, i}
            <div class="grid data">
                <div>#{i+1}</div>
                <div><a href="#/players/{run.player_id}">{run.player_name}</a></div>
                <div>{run.ticks/128}</div>
                <div>{run.teleports}</div>
                <div>{run.created_at}</div>
                <div>
                    <button on:click={() => setPbHistoryIndex(i)}>P</button>
                </div>
            </div>
            {#if i === pbHistoryIndex}
                <div class="pb-history-container">
                    <b>PB History</b>
                    <hr>
                    <MapPbHistory player_id={run.player_id} mode={mode} map={map} course={course} kind={kind}/>
                </div>
            {/if}
        {/each}
    {/await}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: minmax(0, 0.2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 0.1fr);
        gap: 15px;
    }
    .grid div {
        white-space: nowrap;
        overflow: hidden;
    }
    .data-container .data:nth-child(odd) {
        background-color: var(--bg-color-secondary);
    }
    .pb-history-container {
        border: 1px solid white;
        margin: 20px;
        border-radius: 10px;
        padding: 10px;
    }
</style>
