<script setup></script>

<template>
	<div class="nothing">
		<base-icon name="not-founded-icon" />
		<p>Здесь пока ничего нет</p>
	</div>
</template>

<style scoped lang="scss">
.nothing {
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 12px;
	align-items: center;
	justify-content: center;
	color: var(--Basic-Grey);
	p {
		@extend .f-menu;
	}
}
</style>
