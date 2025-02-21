<script setup>
import { ref } from 'vue'
import RightSlideModal from '../global/RightSlideModal.vue'
import PDFModal from '../global/PDFModal.vue'
const STEP_TITLES = [
	'Добавление подписантов',
	'Добавления Оплаты',
	'Добавление документов',
	'Отправка документов',
]

const isModalVisible = ref(false)
const currentStep = ref(1)
const selectedFileURL = ref(null)
const closeModal = () => {
	isModalVisible.value = false
}
</script>

<template>
	<button :class="`button ${$attrs.class}`" @click="isModalVisible = true">
		<span class="button__plus" />
		Добавить документ
	</button>

	<RightSlideModal :isVisible="isModalVisible" @close="closeModal">
		<PDFModal :src="selectedFileURL" v-if="selectedFileURL && currentStep === 3" />
		<RightSlideModalContainer :title="STEP_TITLES[currentStep - 1]">
			<CreateDocumentForm
				v-model:currentStep="currentStep"
				v-model:selectedFileURL="selectedFileURL"
			/>
		</RightSlideModalContainer>
	</RightSlideModal>
</template>

<style scoped lang="scss">
.button {
	@extend .f-main-text;
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 5px 12px;
	background: var(--Basic-Branded);
	border-radius: 4px;
	color: #fff;
	transition: 0.3s ease;
	&__plus {
		width: 13px;
		height: 13px;
		border-radius: 2px;
		background: #fff;
		position: relative;
		&::before,
		&::after {
			width: 7px;
			height: 1px;
			transform: translate(-50%, -50%);
			background: var(--Basic-Branded);
			content: '';
			position: absolute;
			left: 50%;
			top: 50%;
			border-radius: 1px;
		}
		&::before {
			transform: translate(-50%, -50%) rotate(90deg);
		}
	}
	&:hover {
		background: #f9ac2e;
	}
	&:active {
		background: #ea950c;
	}
}
</style>
