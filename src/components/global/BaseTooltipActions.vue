<script setup>
import Popper from 'vue3-popper'

defineProps({
	actions: {
		type: Array,
		required: true,
	},
})
</script>

<template>
	<Popper hover offsetSkid="50" @click.stop>
		<button class="tooltip-actions">
			<span></span>
			<span></span>
			<span></span>
		</button>
		<template #content>
			<BaseCard class="tooltip-actions__menu">
				<BaseText
					clickable
					class="tooltip-actions__action"
					variant="small-main"
					v-for="action in actions"
					@click="action.callback"
				>
					{{ action.label }}
				</BaseText>
			</BaseCard>
		</template>
	</Popper>
</template>

<style scoped lang="scss">
.tooltip-actions {
	display: flex;
	flex-direction: column;
	gap: 4px;
	cursor: pointer;
	max-width: 16px;
	span {
		width: 14px;
		height: 2px;
		border-radius: 4px;
		background: var(--Basic-Grey);
	}
	&__menu {
		padding: 12px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	&__action {
		transition: 0.3s ease;
		white-space: nowrap;
		&:hover {
			text-decoration: underline;
			color: var(--Basic-Branded);
		}
	}
}
</style>
