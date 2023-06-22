<script>
    import { getMaps } from '../api';
    import { mode } from '../stores';
    import PlayerCommaList from '../components/PlayerCommaList.svelte';

    let maps;
    $: maps = getMaps($mode);
</script>

<div class="container">
    {#await maps then maps}
        {#each maps as map}
            <div class="card">
                <div><a href="#/maps/{map.name}">{map.name}</a></div>
                <div>by <PlayerCommaList players={map.mappers} /></div>
                <div>courses: {map.courses.length}</div>
            </div>
        {/each}
    {/await}
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2px;
    }
    @media(max-width: 640px) {
        .container {
            grid-template-columns: 1fr;
        }
    }
    .card {
        background: #32324e;
        padding: 5px;
        display: flex;
        flex-direction: column;
    }
</style>
