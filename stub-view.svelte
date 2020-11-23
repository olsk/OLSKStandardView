<script>
import OLSKStandardView from './main.svelte';
</script>

{#if !Object.keys(Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())).length }
<OLSKStandardView />
{:else}
<OLSKStandardView>
	<div slot="OLSKStandardViewHead">{#if Object.fromEntries((new window.URLSearchParams(window.location.search)).entries()).TestOLSKStandardViewHead }
		TestOLSKStandardViewHead
	{/if}</div>

	{#if Object.fromEntries((new window.URLSearchParams(window.location.search)).entries()).TestOLSKStandardViewBody }
		<div>TestOLSKStandardViewBody</div>
	{/if}
</OLSKStandardView>
{/if}

<style>
:global(body) {
	width: 100vw;
	height: 100vh;
	margin: 0;
}

:global(.OLSKStandardView) {
	width: inherit;
	height: inherit;
	background: red;
}

:global(.OLSKStandardViewHead) {
	background: blue;
}

:global(.OLSKStandardViewBody) {
	background: green;
}
</style>