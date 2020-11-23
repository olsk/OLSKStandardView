<div class="OLSKStandardView">
	{#if $$slots.OLSKStandardViewToolbarHead}
		<div class="OLSKStandardViewToolbarHead OLSKToolbar OLSKMobileViewHeader">
			<slot name="OLSKStandardViewToolbarHead"></slot>	
		</div>
	{/if}

	{#if $$slots.default }
		<div class="OLSKStandardViewBody">
			<slot></slot>
		</div>
	{/if}
</div>

<style>
.OLSKStandardView {
	display: flex;
	flex-direction: column;
}

.OLSKStandardViewToolbarHead {
	/* OLSKStandardViewFlexbox:Child */
	flex-shrink: 0;
}

.OLSKStandardViewBody {
	overflow: auto;
	
	/* OLSKStandardViewFlexbox:Child */
	flex-grow: 1;
}
</style>
