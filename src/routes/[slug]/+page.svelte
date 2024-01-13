<script lang="ts">
	import { formatDate } from "$lib/utils";
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<small>{formatDate(data.meta.date)}</small>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<small>&num;{category}</small>
		{/each}
	</div>

	<div class="content">
		<svelte:component this={data.content} />
	</div>
</article>
