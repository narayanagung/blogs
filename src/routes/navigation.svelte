<script lang="ts">
	import * as index from "$lib/index";
	import ThemeToggle from "./theme-toggle.svelte";
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
			<a href="/rss.xml" target="_blank">Rss<Rss size={15} /></a>
		</li>
	</ul>

	<ThemeToggle />
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: hsla(200, 100%, 50%, 0.1);
	}

	.title {
		font-weight: 700;
		text-decoration: none;
		color: inherit;
		padding: 1rem;
		transition: 150ms;
	}

	.title:hover {
		background-color: hsla(200, 100%, 50%, 0.1);
		transition: 150ms;
	}

	.links a {
		text-decoration: none;
		color: inherit;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 150ms;
		padding: 1rem;
	}

	.links a:hover {
		background-color: hsla(200, 100%, 50%, 0.1);
		transition: 150ms;
	}

	.links {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}
</style>
