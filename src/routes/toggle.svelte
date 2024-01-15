<script lang="ts">
	import { fly } from "svelte/transition";
	import { MoonStar, Sun } from "lucide-svelte";
	import { theme, toggleTheme } from "$lib/theme";
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === "dark"}
		<div in:fly={{ y: 5 }}>
			<span>Light</span><Sun size={20} />
		</div>
	{:else}
		<div in:fly={{ y: -5 }}>
			<span>Dark</span><MoonStar size={20} />
		</div>
	{/if}
</button>

<style>
	button {
		display: flex;
		align-items: center;
		padding: 0;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
		cursor: pointer;
		transition: 150ms;
	}

	button:hover {
		color: hsl(0, 0%, 50%);
		transition: 150ms;
	}

	button > * {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		font-size: 1rem;
	}
</style>
