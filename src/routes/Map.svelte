<script>
    import { getMap, getMapTop } from "../api";
    import { mode } from "../stores";
    import { push } from 'svelte-spa-router';

    export let params = {};

    // Extract all params so we can react to changes independently.
    let name;
    let course;
    onParamsChanged();
    window.addEventListener('hashchange', onParamsChanged);
    function onParamsChanged() {
        name = params.name;
        course = params.course ?? 0;
    }

    // Update the page if we change the params.
    $: push(`/maps/${name}/${course}`);

    let kind = 'PRO';

    let maptop;
    $: maptop = getMapTop($mode, name, course, kind);
    let info;
    $: info = getMap($mode, name);
</script>

<div class="title">{name}</div>
<hr>

<select bind:value={kind}>
    <option value="NUB">NUB</option>
    <option value="PRO">PRO</option>
</select>
<select bind:value={course}>
    {#await info then info}
        {#each info.courses as c}
            {#if c.course == 0}
                <option value={c.course.toString()}>Main</option>
            {:else}
                <option value={c.course.toString()}>Bonus {c.course}</option>
            {/if}
        {/each}
    {/await}
</select>
<hr>

<div class="grid">
    <div>rank</div>
    <div>player</div>
    <div>time</div>
    <div>teleports</div>
    <div>time</div>
</div>
<div class="maptop">
    {#await maptop then maptop}
        {#each maptop as run, i}
            <div class="grid">
                <div>#{i+1}</div>
                <div><a href="#/players/{run.player_id}">{run.player_name}</a></div>
                <div>{run.ticks/128}</div>
                <div>{run.teleports}</div>
                <div>{run.created_at}</div>
            </div>
        {/each}
    {/await}
</div>

<style>
    .title {
        font-size: 1.5rem;
        font-weight: 600;
    }
    .grid {
        display: grid;
        grid-template-columns: minmax(0, 0.2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
        gap: 15px;
    }
    .grid div {
        white-space: nowrap;
        overflow: hidden;
    }
    .maptop .grid:nth-child(odd) {
        background: #32324e;
    }
</style>
