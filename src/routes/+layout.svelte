<script lang="ts">
	import Header from "./header.svelte";
	import Footer from "./footer.svelte";

	import "../app.css";
</script>

<div class="layout">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	main {
		padding: 1rem;
	}
</style>
