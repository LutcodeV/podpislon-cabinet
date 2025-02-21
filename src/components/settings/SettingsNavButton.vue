<script setup>
defineProps({
	info: {
		type: Object,
		required: true,
	},
	isActive: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<BaseCard
		:class="`settings-nav-button ${isActive ? 'settings-nav-button--active' : ''}`"
		:padding="{ x: '0', y: '12px' }"
		tag="button"
	>
		<BaseColumn align="center" gap="12px">
			<BaseIcon :name="`settings-icon-${info.icon}`"></BaseIcon>
			<BaseText class="settings-nav-button__title">{{ info.title }}</BaseText>
		</BaseColumn>
	</BaseCard>
</template>

<style scoped lang="scss">
.settings-nav-button {
	flex: 1 1 0;
	height: 94px;
	border: 1px solid white;
	transition: 0.3s ease;

	&__title {
		transition: 0.3s ease;
		line-height: 112%;
	}
	&:not(&--active):hover {
		border-color: var(--Basic-Branded);
		:deep(.icon) {
			color: var(--Basic-Branded);
		}
		.settings-nav-button__title {
			color: var(--Basic-Branded);
		}
	}
	&--active {
		border-color: var(--Basic-Branded);
		background: var(--Basic-Branded) !important;
		:deep(.icon) {
			color: white;
		}
		.settings-nav-button__title {
			color: white;
		}
	}
}
</style>
