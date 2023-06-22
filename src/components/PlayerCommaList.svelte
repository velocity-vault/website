<script>
    export let players = [];
</script>

<span class="container">
    {#each players as p}
        <span class="player"><a href="#/players/{p.id}">{p.name}</a></span>
    {/each}
</span>

<style>
    .player:not(:first-child)::before {
        content: ', ';
    }
    .player:last-child:not(:first-child)::before {
        content: ' and ';
    }
    .player:last-child:not(:first-child):not(:nth-child(2))::before {
        content: ', and ';
    }
</style>
