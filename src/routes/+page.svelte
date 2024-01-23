<script lang="ts">
	import * as index from "$lib/index";
	import { formatDate } from "$lib/date.js";

	export let data;
</script>

<svelte:head>
	<title>{index.title} - {index.descriptionIndex}</title>
</svelte:head>

<section>
	<h1>{index.descriptionIndex}</h1>
	<ul>
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug}>{post.title}</a>
				<p>{post.description}</p>
				<p class="date">{formatDate(post.date)}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	h1 {
		font-size: clamp(1.5rem, 2.5vw, 2rem);
		font-weight: 600;
		margin-bottom: 2rem;
		text-align: center;
	}

	section {
		display: grid;
		place-content: center;
		padding: 2rem 0;
	}

	ul {
		list-style: none;
	}

	a {
		display: block;
		text-decoration: none;
		text-transform: capitalize;
		font-size: clamp(1.3rem, 2.5vw, 1.5rem);
		color: hsl(210, 100%, 50%);
		text-wrap: balance;
		line-height: 2rem;
		transition: 150ms;
	}

	a:hover {
		color: inherit;
		transition: 150ms;
	}

	li {
		padding: 0rem 1rem;
		margin-bottom: 1.5rem;
		transition: 150ms;
		max-inline-size: 70ch;
	}

	li:not(:last-child) {
		border-bottom: 2px solid hsla(0, 0%, 50%, 0.5);
	}

	li > * {
		margin-top: 0.3rem;
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
</style>
