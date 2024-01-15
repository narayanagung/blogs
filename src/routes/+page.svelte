<script lang="ts">
	import * as index from "$lib/index";
	import { formatDate } from "$lib/utils";

	export let data;
</script>

<svelte:head>
	<title>{index.title} - {index.descriptionIndex}</title>
</svelte:head>

<section>
	<h1>{index.descriptionIndex}</h1>
	<ul>
		{#each data.posts as post}
			<li>
				<a href={post.slug}>{post.title}</a>
				<p>{post.description}</p>
				<p class="date">{formatDate(post.date)}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	h1 {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 1rem;
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
		font-size: 1.5rem;
		color: hsl(215, 100%, 50%);
		text-wrap: balance;
		line-height: 2rem;
	}

	a:hover {
		color: hsl(200, 100%, 50%);
	}

	li {
		padding: 0.5rem 0;
	}

	li > * {
		margin-top: 0.3rem;
	}

	.date {
		opacity: 0.7;
	}

	p::first-letter {
		text-transform: uppercase;
	}

	p {
		line-height: 1.5rem;
	}
</style>
