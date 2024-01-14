<script lang="ts">
	import Header from "./header.svelte";
	import Footer from "./footer.svelte";
	import Transition from "./transition.svelte";

	import "../app.css";

	export let data;
</script>

<Header />

<main>
	<Transition url={data.url}>
		<slot />
	</Transition>
</main>

<Footer />

<style>
	main {
		padding: 1rem;
	}
</style>
