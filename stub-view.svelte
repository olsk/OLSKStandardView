<script>
import OLSKStandardView from './main.svelte';
</script>

{#if Object.fromEntries((new window.URLSearchParams(window.location.search)).entries()).TestOLSKStandardViewToolbarHead && Object.fromEntries((new window.URLSearchParams(window.location.search)).entries()).TestOLSKStandardViewBody }
<OLSKStandardView>
	<div slot="OLSKStandardViewToolbarHead">TestOLSKStandardViewToolbarHead</div>
	<div slot="OLSKStandardViewBody">TestOLSKStandardViewBody</div>
</OLSKStandardView>
{:else if Object.fromEntries((new window.URLSearchParams(window.location.search)).entries()).TestOLSKStandardViewToolbarHead }
<OLSKStandardView>
	<div slot="OLSKStandardViewToolbarHead"></div>
</OLSKStandardView>
{:else if Object.fromEntries((new window.URLSearchParams(window.location.search)).entries()).TestOLSKStandardViewBody }
<OLSKStandardView>
	<div slot="OLSKStandardViewBody"></div>
</OLSKStandardView>
{:else}
<OLSKStandardView>
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

:global(.OLSKStandardViewBody) {
	background: green;
}
</style>