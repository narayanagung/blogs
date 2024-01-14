<script lang="ts">
	import { page } from "$app/stores";
</script>

<div class="error">
	<p>{$page.status}: {$page.error?.message}</p>
</div>

<style>
	.error {
		display: grid;
		height: 100%;
		place-content: center;
	}
</style>
