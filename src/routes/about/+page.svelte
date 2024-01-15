<script lang="ts">
	import * as index from "$lib/index";
	import { Instagram, Github, Mail } from "lucide-svelte";
</script>

<svelte:head>
	<title>{index.title} - {index.descriptionAbout}</title>
</svelte:head>

<section>
	<h1>{index.descriptionAbout}</h1>
	<div class="social">
		<a href="mailto:agungnarayanagung@gmail.com"><Mail size={20} /><span>agungnarayanagung@gmail.com</span></a>
		<a target="_blank" href="https://www.github.com/narayanagung"><Github size={20} /><span>narayanagung</span></a>
		<a target="_blank" href="https://www.instagram.com/narayanagung"><Instagram size={20} /><span>narayanagung</span></a>
	</div>
</section>

<style>
	h1 {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 2rem;
	}

	section {
		display: grid;
		place-content: center;
		padding: 2rem 0;
		font-size: 1.5rem;
	}

	.social {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	a {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		text-decoration: none;
		color: inherit;
		transition: 150ms;
	}

	a:hover {
		color: hsl(200, 100%, 50%);
		transition: 150ms;
	}
</style>
