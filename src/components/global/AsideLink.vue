<script setup>
defineProps({
	icon: {
		type: String,
		required: true,
	},
	href: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	isFolded: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<router-link :to="href" class="aside-link" :class="{ 'aside-link--folded': isFolded }"
		><BaseIcon :name="icon" /><span>{{ title }}</span></router-link
	>
</template>

<style scoped lang="scss">
.aside-link {
	@extend .f-medium;
	display: flex;
	align-items: center;
	padding: 18px 20px;
	gap: 14px;
	white-space: nowrap;
	transition: 0.3s ease;
	color: #eaeaea;
	background: linear-gradient(
		90deg,
		rgba(19, 20, 20, 0.2) 0%,
		rgba(247, 153, 0, 0.2) 50%,
		rgba(19, 20, 20, 0.2) 100%
	);
	background-position: center;
	background-repeat: no-repeat;
	background-size: 0 100%;
	.icon {
		color: #fff;
		width: 24px;
		height: 24px;
		min-width: 24px;
		min-height: 24px;
	}
	span {
		transition: 0.3s ease;
		overflow: hidden;
		max-width: 100px;
	}
	&.router-link-active {
		color: var(--Basic-Branded);
		background-size: 100% 100%;
	}
	&--folded {
		span {
			max-width: 0;
		}
		&.router-link-active .icon {
			color: var(--Basic-Branded);
		}
	}
}
</style>
