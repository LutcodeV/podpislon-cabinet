<script setup>
defineProps({
	src: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<RightSlideModalContainer class="pdf-modal">
		<iframe class="pdf-modal__iframe" :src="src" />
	</RightSlideModalContainer>
</template>

<style scoped lang="scss">
.pdf-modal {
	padding: 0;
	max-width: 621px;
	width: 100%;
	display: flex;
	flex-direction: column;
	&__iframe {
		flex: 1;
		width: 100%;
		height: 100%;
	}
}
</style>
