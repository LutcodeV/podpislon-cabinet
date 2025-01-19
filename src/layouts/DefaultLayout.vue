<script setup>
import AsideDefault from '@/components/layout/AsideDefault.vue'
import FooterDefault from '@/components/layout/FooterDefault.vue'
import HeaderDefault from '@/components/layout/HeaderDefault.vue'
import { provide, ref } from 'vue'

const contentIsBlur = ref(false)
const navbarIsFolded = ref(false)
provide('contentIsBlur', contentIsBlur)
provide('navbarIsFolded', navbarIsFolded)
</script>

<template>
	<div class="layout" :class="{ 'layout--navbar-folded': navbarIsFolded }">
		<HeaderDefault class="layout-header" />
		<AsideDefault class="layout-aside" />
		<div class="layout-content" :class="{ 'layout-content--blur': contentIsBlur }">
			<div class="layout-content__container">
				<slot />
				<FooterDefault />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.layout {
	max-width: 100vw;
	max-height: 100vh;
	width: 100vw;
	height: 100vh;
	background: var(--Basic-Dark);
	display: grid;
	transition: 0.3s ease;
	grid-template-columns: 168px 1fr;
	grid-template-rows: auto 1fr;
	grid-template-areas:
		'header header'
		'aside content';
	&--navbar-folded {
		grid-template-columns: 64px 1fr;
	}
}
.layout-header {
	grid-area: header;
}
.layout-aside {
	grid-area: aside;
}
.layout-content {
	grid-area: content;
	background: var(--Basic-Background);
	overflow: auto;
	padding: 24px 24px 16px;
	border-radius: 8px 0px 0px 0px;
	&__container {
		display: flex;
		min-height: 100%;
		flex-direction: column;
		transition: 0.3s ease;
	}
	&--blur > &__container {
		filter: blur(2px);
	}
}
</style>
