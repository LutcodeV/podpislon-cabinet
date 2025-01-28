<script setup>
defineProps({
	title: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div class="modal-container">
		<div class="modal-container__header" v-if="title">
			<slot name="header">
				<p class="modal-container__title">{{ title }}</p>
				<slot name="header-additional"></slot>
			</slot>
		</div>
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
.modal-container {
	border-radius: 4px 0px 0px 4px;
	background: var(--Basic-Background, #f6f6f6);
	box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.1);
	overflow: auto;
	max-height: 100vh;
	min-height: 100vh;
	padding: 52px;
	z-index: 1;
	position: relative;
	&__header {
		display: flex;
		align-items: center;
		& + * {
			margin-top: 32px;
		}
	}
	&__title {
		@extend .f-heading;
		text-transform: uppercase;
	}
}
</style>
