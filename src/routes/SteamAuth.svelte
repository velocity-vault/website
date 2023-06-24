<script>
    import { querystring } from 'svelte-spa-router';
    import { verifySteamAuth } from '../api'; 
    import { player_id, auth_token } from '../stores';

    let searchParams = new URLSearchParams($querystring);
    verifySteamAuth(searchParams).then(value => {
        $player_id = value.player_id;
        $auth_token = value.token;
    }).finally(() => {
        close();
    })
</script>

<h1>Wait...</h1>
