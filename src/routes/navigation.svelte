<script lang="ts">
	import ThemeToggle from "./theme-toggle.svelte";
	import { Rss } from "lucide-svelte";

	const logo = new URL("../assets/logo.png", import.meta.url).href;
</script>

<nav>
	<a href="/" title="Ayunan!" class="logo"><img src={logo} alt="Logo" /></a>

	<ul class="links">
		<li>
			<a href="/" title="All Posts" class="title">All Posts</a>
		</li>
		<li>
			<a href="/about" title="About Me">About</a>
		</li>
		<li>
			<a href="/rss.xml" title="Rss Feed" target="_blank">RSS<Rss size={15} /></a>
		</li>
	</ul>

	<!-- <ThemeToggle /> -->
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: hsla(200, 100%, 50%, 0.1);
	}

	.title {
		text-decoration: none;
		color: inherit;
		padding: 1rem;
		transition: 150ms;
		text-wrap: nowrap;
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
		border-radius: 2px;
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
		margin-block: 0.5rem;
	}

	li a {
		gap: 0.3rem;
	}

	.logo {
		padding-inline: 1rem;
	}

	.logo:hover {
		/* background-color: hsla(200, 100%, 50%, 0.1); */
		transition: 150ms;
		border-radius: 2px;
	}

	.logo img {
		width: 51px;
		display: block;
		opacity: 0.8;
	}

	@media screen and (max-width: 450px) {
		.logo {
			display: none;
		}

		.links a {
			padding: 0.5rem;
		}
	}
</style>
