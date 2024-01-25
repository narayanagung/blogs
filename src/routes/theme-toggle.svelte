<script lang="ts">
	import { fly } from "svelte/transition";
	import { MoonStar, Sun } from "lucide-svelte";
	import { theme, toggleTheme } from "$lib/theme";
</script>

<button on:click={toggleTheme} title="Toggle Theme" aria-label="Toggle theme">
	{#if $theme === "dark"}
		<div in:fly={{ y: 5 }}>
			<span>Light</span><Sun size={15} />
		</div>
	{:else}
		<div in:fly={{ y: -5 }}>
			<span>Dark</span><MoonStar size={15} />
		</div>
	{/if}
</button>

<style>
	button {
		display: flex;
		align-items: center;
		padding: 1rem;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
		cursor: pointer;
		transition: 150ms;
	}

	button:hover {
		background-color: hsla(200, 100%, 50%, 0.1);
		transition: 150ms;
	}

	button > * {
		display: flex;
		gap: 0.2rem;
		align-items: center;
		font-size: 1rem;
	}

	span {
		font-family: "Inter", sans-serif;
	}
</style>
