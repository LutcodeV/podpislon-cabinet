<script setup>
defineProps({
	links: {
		type: Array,
		default: () => [],
	},
	parent: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div class="tabs">
		<router-link class="tabs__link" v-for="link in links" :to="`/${parent}/${link.tab}`">
			{{ link.title }}
		</router-link>
	</div>
</template>

<style scoped lang="scss">
.tabs {
	display: flex;
	gap: 32px;
	&__link {
		@extend .f-menu;
		padding-bottom: 6px;
		position: relative;
		color: var(--Basic-Grey);
		transition: 0.3s ease;
		&::after {
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			height: 2px;
			content: '';
			background: var(--Basic-Grey);
			transition: 0.3s ease;
			border-radius: 3px;
		}
		&.router-link-active {
			color: var(--Basic-Dark);
			&::after {
				background: var(--Basic-Dark);
			}
		}
	}
}
</style>
