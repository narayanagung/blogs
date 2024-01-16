<script lang="ts">
	import { formatDate } from "$lib/date.js";
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<main>
	<article>
		<hgroup>
			<h1>{data.meta.title}</h1>
			<p>{formatDate(data.meta.date)}</p>
			<div class="tags">
				{#each data.meta.categories as category}
					<small>&num;{category}</small>
				{/each}
			</div>
		</hgroup>

		<div class="markdown">
			<svelte:component this={data.content} />
		</div>
	</article>
</main>

<style>
	main {
		display: grid;
		place-content: center;
	}

	article {
		padding: 2rem;
		margin-top: 2rem;
		border-radius: 0.25rem;
		border-left: 2px solid hsla(200, 100%, 50%, 0.5);
		border-right: 2px solid hsla(0, 0%, 50%, 0.5);
		border-bottom: 2px solid hsla(200, 100%, 50%, 0.5);
		border-top: 2px solid hsla(0, 0%, 50%, 0.5);
		background-color: hsla(0, 0%, 50%, 0.1);
		max-inline-size: 70ch;
	}

	hgroup {
		margin-bottom: 2rem;
		text-align: center;
	}

	h1 {
		font-size: clamp(1.7rem, 2.5vw, 2rem);
		text-wrap: balance;
	}

	hgroup p {
		opacity: 0.7;
		margin-block: 1.5rem;
	}

	.tags {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
	}

	.tags > * {
		background-color: hsla(0, 0%, 50%, 0.1);
		padding: 0.3rem 0.6rem;
		border-radius: 0.6rem;
		font-weight: 600;
	}

	@media screen and (max-width: 400px) {
		article {
			padding: 1rem;
		}
	}
</style>
