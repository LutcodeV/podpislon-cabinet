<script setup>
import { provide, ref } from 'vue'

const contentIsBlur = ref(false)
const navbarIsFolded = ref(true)
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
			</div>
			<FooterDefault />
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
	grid-template-columns: 168px calc(100vw - 168px);
	grid-template-rows: auto 1fr;
	grid-template-areas:
		'header header'
		'aside content';
	&--navbar-folded {
		grid-template-columns: 64px calc(100vw - 64px);
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
	border-radius: 8px 0px 0px 0px;
	&__container {
		padding: 24px 24px 0px;
		display: flex;
		height: 100%;
		overflow: auto;
		flex-direction: column;
		transition: 0.3s ease;
		max-height: calc(100vh - 126px);
	}
	&--blur > &__container {
		filter: blur(2px);
	}
}
</style>
