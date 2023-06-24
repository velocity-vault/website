<script>
    import { mode } from '../stores';
    import { getModes, STEAM_AUTH_URL } from '../api';
    import { player_id, auth_token } from '../stores';

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
            <!--<a href={STEAM_AUTH_URL} target="_blank">Login</a>-->
            {#if $auth_token == null}
                <a href="javascript:void(0)" on:click={() => open(STEAM_AUTH_URL)}>Login</a>
            {:else}
                <a href="javascript:void(0)" on:click={() => $auth_token = null}>Logout</a>
            {/if}

            {#if $player_id != null}
                <a href="#/players/{$player_id}">Profile</a>
            {/if}
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
