<script>
    import { getCoursePbHistory } from "../api";

    export let runs;

    export let player_id;
    export let mode;
    export let map;
    export let course;
    export let kind;

    $: runs = getCoursePbHistory(player_id, $mode, map, course, kind);
</script>

<div class="grid">
    <div>time</div>
    <div>teleports</div>
    <div>date</div>
</div>
<div class="data-container">
    {#await runs then runs}
        {#each runs as run, i}
            <div class="grid data">
                <div>{run.ticks/128}</div>
                <div>{run.teleports}</div>
                <div>{run.created_at}</div>
            </div>
        {/each}
    {/await}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
        gap: 15px;
    }
    .grid div {
        white-space: nowrap;
        overflow: hidden;
    }
    .data-container .data:nth-child(odd) {
        background-color: var(--bg-color-secondary);
    }
</style>
