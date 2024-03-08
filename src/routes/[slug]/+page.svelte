<script lang="ts">
	// @ts-nocheck
	import { MessagesSquare } from "lucide-svelte";
	import { formatDate } from "$lib/date.js";

	export let data;

	function reload() {
		location.reload();
	}
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
		<hr />
		<button type="button" on:click={reload} class="btn">Load Comments<MessagesSquare size={20} /></button>
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
		border-radius: 0.5rem;
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
		cursor: not-allowed;
	}

	.comment {
		max-width: 100%;
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	hr {
		margin-block: 1rem;
		width: 100%;
		border-color: hsla(0, 0%, 50%, 0.5);
		border-width: 2px;
	}

	.btn {
		/* display: flex; */
		display: none;
		align-items: center;
		gap: 0.5rem;
		font-size: clamp(1rem, 2.5vw, 1rem);
		padding: 0.5rem 1rem;
		cursor: pointer;
		border-radius: 4px;
		border: none;
		outline: 2px solid transparent;
		margin-block: 1rem;
		background-color: hsl(0, 0%, 24%);
		transition: 150ms;
	}

	.btn:hover {
		background-color: hsl(0, 0%, 34%);
		outline: 2px solid hsl(0, 0%, 100%);
	}

	@media screen and (max-width: 450px) {
		article {
			padding: 1rem;
		}
	}
</style>
