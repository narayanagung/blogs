<script lang="ts">
	import * as index from "$lib/index";
	import { formatDate } from "$lib/utils";

	export let data;
</script>

<svelte:head>
	<title>{index.title} - {index.descriptionIndex}</title>
</svelte:head>

<h1>{index.descriptionIndex}</h1>

<section>
	<ul>
		{#each data.posts as post}
			<li>
				<a href={post.slug}>{post.title}</a>
				<small>{formatDate(post.date)}</small>
				{#each post.categories as category}
					<small>&num;{category}</small>
				{/each}
				<p>{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		list-style: none;
	}
</style>
