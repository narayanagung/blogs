<script lang="ts">
	// import ThemeToggle from "./theme-toggle.svelte";
	import { Rss } from "lucide-svelte";
</script>

<nav>
	<a href="/" title="Ayunan!" class="logo"><img src="/logo.png" alt="Logo" /></a>

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
		font-size: clamp(1rem, 2.5vw, 1.1em);
	}

	.title {
		text-decoration: none;
		color: inherit;
		padding: 1rem;
		text-wrap: nowrap;
		transition: 150ms;
	}

	.title:hover {
		background-color: hsla(200, 100%, 50%, 0.1);
	}

	.links a {
		text-decoration: none;
		color: inherit;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		border-radius: 2px;
		transition: 150ms;
	}

	.links a:hover {
		background-color: hsla(200, 100%, 50%, 0.1);
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
		transition: 150ms;
	}

	.logo:hover {
		/* background-color: hsla(200, 100%, 50%, 0.1); */
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
