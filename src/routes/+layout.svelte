<script lang="ts">
	import Navigation from "./navigation.svelte";
	import Footer from "./footer.svelte";
	import Transition from "./transition.svelte";

	import "../app.css";

	export let data;
</script>

<Navigation />

<main>
	<Transition url={data.url}>
		<slot />
	</Transition>
</main>

<Footer />

<style>
	main {
		padding: 0 1rem;
	}
</style>
