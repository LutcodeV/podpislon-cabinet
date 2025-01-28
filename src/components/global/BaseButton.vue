<script setup></script>

<template>
	<button class="button"><slot></slot></button>
</template>

<style scoped lang="scss">
.button {
	@extend .f-main-text;
	padding: 12px 24px;
	background: var(--Basic-Branded);
	transition: 0.3s ease;
	border-radius: 4px;
	color: #fff;

	&:hover {
		background: #f9ac2e;
	}
	&:active {
		background: #ea960c;
	}
	&:disabled {
		background: var(--Basic-Grey);
	}
	&--loading {
		background: #f9ac2e;
	}
}
</style>
