<script lang="ts">
	import { page } from "$app/stores";
	import { Undo2 } from "lucide-svelte";
	// const yuiGif = new URL("../assets/yuiError.gif", import.meta.url).href;
</script>

<svelte:head>
	<title>404 Page Not Found</title>
</svelte:head>

<div class="error">
	<h1><span>{$page.status}</span> {$page.error?.message}</h1>
	<img src="https://i.ibb.co/nkcB7bV/yui.gif" width="360" title="what you've done..." alt="Yui staring with disbelief" />
	<!-- <img src="https://i.ibb.co/BNy6KXx/image.png" width="360" title="what you've done..." alt="Yui staring with disbelief" /> -->
	<a href="/"><Undo2 size={22} />Kembali</a>
</div>

<style>
	h1 {
		font-size: clamp(1.4rem, 2.5vw, 2rem);
		font-weight: 600;
	}
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
		gap: 0.2rem;
		transition: 150ms;
	}

	a:hover {
		color: hsl(200, 100%, 65%);
	}

	@media screen and (max-width: 700px) {
		a {
			font-size: 1rem;
		}
	}

	span {
		color: hsl(0, 100%, 50%);
	}

	img {
		max-width: 100%;
		display: block;
		border-radius: 8px;
		-webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
		-moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
		box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
	}
</style>
