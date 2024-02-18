<script lang="ts">
	import { page } from "$app/stores";
	import { ArrowLeft } from "lucide-svelte";
	// const yuiGif = new URL("../assets/yuiError.gif", import.meta.url).href;
</script>

<div class="error">
	<h1><span>{$page.status}</span> {$page.error?.message}</h1>
	<img src="https://i.ibb.co/nkcB7bV/yui.gif" title="what you've done to this site..." alt="Yui staring with disbelief" />
	<a href="/"><ArrowLeft size={25} />Back To Homepage</a>
</div>

<style>
	.error {
		display: grid;
		place-content: center;
		text-align: center;
		gap: 2rem 0;
		padding: 2rem;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: white;
		font-size: 1.3rem;
		transition: 150ms;
	}

	a:hover {
		color: hsl(200, 100%, 50%);
		transition: 150ms;
	}

	@media screen and (max-width: 700px) {
		h1 {
			font-size: 1.5rem;
			line-height: 2rem;
		}
		a {
			font-size: 1rem;
		}
	}

	span {
		color: red;
	}

	img {
		width: 100%;
		display: block;
	}
</style>
