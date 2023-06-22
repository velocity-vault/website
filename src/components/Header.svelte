<script>
    import { mode } from '../stores';
    import { getModes } from '../api';

    let modes;
    $: modes = getModes();
</script>

<header>
    <div class="container">
        <div class="links">
            <a href="#/">Home</a>
            <a href="#/maps">Maps</a>
        </div>
        <div class="links">
            <select bind:value={$mode}>
                {#await modes then modes}
                    {#each modes as m}
                        <option value={m.short_name}>{m.short_name}</option>
                    {/each}
                {/await}
            </select>
            <a href="#/search">Search</a>
            <a href="#/login">Login</a>
        </div>
    </div>
</header>

<style>
    header {
        background: #32324e;
        display: flex;
        justify-content: center;
        padding: 10px;
    }
    .container {
        width: 900px;
        display: flex;
        justify-content: space-between;
    }
    .links {
        display: flex;
        gap: 20px;
    }
</style>
