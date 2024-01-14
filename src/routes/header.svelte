<script lang="ts">
	import * as index from "$lib/index";
	import Toggle from "./toggle.svelte";
</script>

<nav>
	<a href="/" class="title">
		{index.title}
	</a>

	<ul class="links">
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/rss.xml" target="_blank">RSS</a>
		</li>
	</ul>

	<Toggle />
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
	}

	.links {
		display: flex;
		justify-content: center;
		list-style: none;
		gap: 1rem;
	}
</style>
