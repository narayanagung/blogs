<script lang="ts">
	import Header from "./header.svelte";
	import Footer from "./footer.svelte";

	import "../app.css";
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		padding: 1rem;
	}
</style>
