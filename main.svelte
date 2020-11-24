<div class="OLSKStandardView">
	{#if $$slots.OLSKStandardViewHead}
		<div class="OLSKStandardViewHead OLSKMobileViewHeader">
			<slot name="OLSKStandardViewHead"></slot>	
		</div>
	{/if}

	{#if $$slots.default }
		<div class="OLSKStandardViewBody">
			<slot></slot>
		</div>
	{/if}

	{#if $$slots.OLSKStandardViewTail}
		<div class="OLSKStandardViewTail">
			<slot name="OLSKStandardViewTail"></slot>	
		</div>
	{/if}
</div>

<style>
.OLSKStandardView {
	display: flex;
	flex-direction: column;
}

.OLSKStandardViewHead {
	/* OLSKStandardViewFlexbox:Child */
	flex-shrink: 0;
}

.OLSKStandardViewBody {
	/* OLSKStandardViewFlexbox:Child */
	flex-grow: 1;

	display: flex;
}

.OLSKStandardViewBody > :global(*) {
	width: 100%;
	/*height: 100%;*/
}
</style>
