<script>
    import { getMap, getMapTop } from "../api";
    import { mode } from "../stores";
    import { replace, querystring } from 'svelte-spa-router';

    export let params = {};

    // Extract all params so we can react to changes independently.
    let name;
    let course;
    let kind;
    onParamsChanged();
    window.addEventListener('hashchange', onParamsChanged);
    function onParamsChanged() {
        const queryparams = new URLSearchParams($querystring);

        name   = params.name;
        course = queryparams.get('course') ?? '0';
        kind   = queryparams.get('kind') ?? 'PRO';
    }

    // Update the URI if we change the params.
    $: {
        const queryparams = new URLSearchParams({
            'course': course,
            'kind':   kind,
        });
        replace(`/maps/${name}?${queryparams}`);
    }

    let maptop;
    let mapinfo;
    $: maptop  = getMapTop($mode, name, course, kind);
    $: mapinfo = getMap($mode, name);
</script>

<div class="title">{name}</div>
<hr>

<select bind:value={kind}>
    <option value="NUB">NUB</option>
    <option value="PRO">PRO</option>
</select>


{#await mapinfo then mapinfo}
    <select bind:value={course}>
        {#each mapinfo.courses as c}
            {#if c.course == 0}
                <option value={c.course.toString()}>Main</option>
            {:else}
                <option value={c.course.toString()}>Bonus {c.course}</option>
            {/if}
        {/each}
    </select>
{/await}
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
