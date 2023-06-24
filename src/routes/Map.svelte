<script>
    import { getMap, getMapTop } from "../api";
    import { mode } from "../stores";
    import { replace, querystring } from 'svelte-spa-router';
    import MapTop from "../components/MapTop.svelte";

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

<MapTop mode={mode} map={name} course={course} kind={kind} />

<style>
    .title {
        font-size: 1.5rem;
        font-weight: 600;
    }
</style>
