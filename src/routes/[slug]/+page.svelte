<script lang="ts">
	// @ts-nocheck
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
			<small class="date">{formatDate(data.meta.date)}</small>
			<h1>{data.meta.title}</h1>
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
	<div class="comment">
		<script src="https://utteranc.es/client.js" repo="narayanagung/blogs" issue-term="title" label="Comment" theme="icy-dark" crossorigin="anonymous" async>
		</script>
	</div>
</main>

<style>
	main {
		display: grid;
		place-content: center;
	}

	article {
		padding: 2rem;
		margin-top: 1rem;
		border-radius: 0.25rem;
		/* border-left: 2px solid hsla(200, 100%, 50%, 0.3);
		border-right: 2px solid hsla(0, 0%, 50%, 0.3);
		border-bottom: 2px solid hsla(200, 100%, 50%, 0.3);
		border-top: 2px solid hsla(0, 0%, 50%, 0.3); */
		background-color: hsla(0, 0%, 13%, 0.6);
		max-inline-size: 70ch;
	}

	hgroup {
		margin-bottom: 2rem;
		text-align: center;
		border-radius: 50%;
		border-right: 10px hsla(200, 100%, 50%, 0.1) solid;
		border-left: 10px hsla(0, 0%, 50%, 0.1) solid;
	}

	h1 {
		font-size: clamp(1.7rem, 2.5vw, 2rem);
		text-wrap: balance;
		margin-block: 1.5rem;
	}

	hgroup .date {
		opacity: 0.7;
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

	.comment {
		max-width: 100%;
		margin-top: 1rem;
	}

	@media screen and (max-width: 400px) {
		article {
			padding: 1rem;
		}

		h1 {
			font-size: 1.5rem;
		}
	}
</style>
