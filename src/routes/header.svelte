<script lang="ts">
	import * as index from "$lib/index";
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
			<a href="/contact">Contact</a>
		</li>
		<li>
			<a href="/rss.xml" target="_blank">RSS</a>
		</li>
	</ul>

	<button>Toggle</button>
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
