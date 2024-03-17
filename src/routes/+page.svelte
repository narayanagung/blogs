<script lang="ts">
	import * as index from "$lib/index";
	import { formatDate } from "$lib/date.js";
	import { createSearchStore, searchHandler } from "$lib/stores/search.js";
	import { onDestroy } from "svelte";

	export let data;

	const searchPosts = data.posts.map((post) => ({
		...post,
		searchTerms: `${post.title} ${post.description} ${post.categories}`,
	}));

	const searchStore = createSearchStore(searchPosts);
	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<svelte:head>
	<title>{index.title} - {index.descriptionIndex}</title>
</svelte:head>

<section>
	<div class="searchbar">
		<h1>Search</h1>
		<input type="search" placeholder="Cari judul, tag, deskripsi" bind:value={$searchStore.search} />
	</div>
	<ul>
		{#if $searchStore.notFound}
			<div class="notfound">
				<p><span>Post</span> tidak ditemukan</p>
				<img src="https://i.ibb.co/nkcB7bV/yui.gif" width="360" title="what you've done..." alt="Yui staring with disbelief" />
				<!-- <img src="https://i.ibb.co/BNy6KXx/image.png" width="360" title="what you've done..." alt="Yui staring with disbelief" /> -->
			</div>
		{:else}
			{#each $searchStore.filtered as post}
				<li class="post">
					<small class="date">{formatDate(post.date)}</small>
					<a href={post.slug}>{post.title}</a>
					<p>{post.description}</p>
				</li>
			{/each}
		{/if}
	</ul>
</section>

<style>
	h1 {
		font-size: clamp(1.5rem, 2.5vw, 2rem);
		font-weight: 600;
		text-align: center;
	}

	section {
		display: grid;
		place-content: center;
		padding: 2rem 0;
	}

	input {
		padding: 0.6rem 1.1rem;
		font-size: clamp(0.9rem, 2.5vw, 1em);
		border-radius: 2rem;
		outline: 2px solid hsl(0, 0%, 35%);
		border: none;
		/* text-align: center; */
		transition: 150ms;
	}

	input:focus {
		outline: 2px solid hsl(0, 0%, 100%);
	}

	ul {
		list-style: none;
	}

	a {
		display: block;
		text-decoration: none;
		text-transform: capitalize;
		font-size: clamp(1.3rem, 2.5vw, 1.5rem);
		color: hsl(200, 100%, 65%);
		text-wrap: balance;
		line-height: 2rem;
		transition: 150ms;
	}

	a:hover {
		color: inherit;
	}

	li {
		padding: 0rem 1rem;
		margin-bottom: 1.5rem;
		max-inline-size: 70ch;
	}

	li:not(:last-child) {
		border-bottom: 2px solid hsla(0, 0%, 50%, 0.5);
	}

	li > * {
		margin-top: 0.3rem;
	}

	li p {
		margin-bottom: 1.5rem;
	}

	.date {
		opacity: 0.7;
		margin-bottom: 1rem;
	}

	p::first-letter {
		text-transform: uppercase;
	}

	p {
		line-height: 1.5rem;
	}

	span {
		color: hsl(0, 100%, 50%);
	}

	.searchbar {
		margin-bottom: 2rem;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.notfound {
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.notfound p {
		font-size: clamp(1.3rem, 2.5vw, 1.5rem);
	}

	.notfound img {
		border-radius: 8px;
		-webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
		-moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
		box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
		max-width: 100%;
	}
</style>
