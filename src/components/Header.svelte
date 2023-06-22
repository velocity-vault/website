<script>
    import { mode } from '../stores';
    import { MODES } from '../api';
</script>

<header>
    <div class="container">
        <div class="links">
            <a href="#/">Home</a>
            <a href="#/maps">Maps</a>
        </div>
        <div class="links">
            <select bind:value={$mode}>
                {#each MODES as m}
                    <option value={m}>{m}</option>
                {/each}
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
