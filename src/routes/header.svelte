<script lang="ts">
	import * as index from "$lib/index";
	import Toggle from "./toggle.svelte";
	import { Rss } from "lucide-svelte";
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
			<a href="/rss.xml" target="_blank">RSS<Rss size={20} /></a>
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
		gap: 1rem;
	}

	.title {
		font-weight: 700;
		text-decoration: none;
		color: inherit;
		transition: 150ms;
	}

	.title:hover {
		color: hsl(200, 100%, 50%);
		transition: 150ms;
	}

	.links a {
		text-decoration: none;
		color: inherit;
		transition: 150ms;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.1rem;
	}

	.links a:hover {
		color: hsl(200, 100%, 50%);
		transition: 150ms;
	}

	.links {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		gap: 1rem;
	}
</style>
