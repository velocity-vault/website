<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';
    import Header from './components/Header.svelte';
</script>

<Header />
<main>
	<Router {routes} />
</main>

<style>
	main {
		padding-top: 1rem;
		max-width: 900px;
		margin: 0 auto;
	}
</style>
