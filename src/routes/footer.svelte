<script lang="ts">
	import * as index from "$lib/index";
</script>

<footer>
	<small>{index.title} &copy {new Date().getFullYear()}</small>
</footer>

<style>
	footer {
		display: grid;
		place-content: center;
		padding-top: 1rem;
		padding-bottom: 2rem;
		padding-inline: 1rem;
		margin-top: auto;
	}
</style>
