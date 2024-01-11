<script lang="ts">
	import * as index from "$lib/index";
	import { formatDate } from "$lib/utils";

	export let data;
</script>

<svelte:head>
	<title>{index.title}</title>
</svelte:head>

<section>
	<ul>
		{#each data.posts as post}
			<li>
				<a href={post.slug}>{post.title}</a>
				<small>{formatDate(post.date)}</small>
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
