<script setup>
defineProps({
	info: {
		type: Object,
		required: true,
	},
})

const isModalVisible = ref(false)
const mainModal = ref(null)
const openModal = () => {
	isModalVisible.value = true
}
const closeModal = () => {
	isModalVisible.value = false
}
</script>

<template>
	<div class="document">
		<button @click="openModal" class="document__title">{{ info.title }}</button>
		<DocumentUsers :info="info" />
		<p class="document__date">{{ info.date }}</p>
	</div>
	<DocumentDetails :is-modal-visible="isModalVisible" @close="closeModal" :info="info" />
</template>

<style scoped lang="scss">
.document {
	display: flex;
	flex-direction: column;
	gap: 12px;
	background: var(--Basic-Background);
	border-radius: 4px;
	padding: 16px;
	&__title {
		@extend .f-main-text;
		transition: 0.3s ease;
		cursor: pointer;
		text-align: left;
		@include hover {
			color: var(--Basic-Branded);
		}
	}
	&__date {
		@extend .f-signatures;
		transition: 0.3s ease;
		color: var(--Basic-Grey);
	}
	&:has(.document__title:hover) {
		.document-users,
		.document__date {
			opacity: 0.5;
		}
	}
	&:has(.document-users:hover) {
		.document__title,
		.document__date {
			opacity: 0.5;
		}
	}
}
</style>
