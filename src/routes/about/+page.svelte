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
		<!-- <a href="mailto:agungnarayanagung@gmail.com">Email<Mail size={20} /></a> -->
		<a target="_blank" href="https://www.github.com/narayanagung">Github<Github size={20} /></a>
		<a target="_blank" href="https://www.instagram.com/narayanagung">Instagram<Instagram size={20} /></a>
	</div>
</section>

<style>
	h1 {
		font-size: clamp(1.5rem, 2.5vw, 2rem);
		font-weight: 600;
		margin-bottom: 1rem;
		text-align: center;
	}

	section {
		display: grid;
		place-content: center;
		padding: 2rem 0;
	}

	.social {
		display: flex;
		gap: 1rem;
	}

	a {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		text-decoration: none;
		color: inherit;
		font-size: clamp(1.3rem, 2.5vw, 1.5rem);
		transition: 150ms;
	}

	a:hover {
		color: hsl(200, 100%, 50%);
	}

	@media screen and (max-width: 400px) {
		.social {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
