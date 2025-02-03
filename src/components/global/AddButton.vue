<script setup>
import { ref } from 'vue'
import DocumentAddButton from '../Documents/DocumentAddButton.vue'
import ListAttachedDocuments from './ListAttachedDocuments.vue'
import RightSlideModal from './RightSlideModal.vue'
import PDFModal from './PDFModal.vue'

const isModalVisible = ref(false)
const closeModal = () => {
	isModalVisible.value = false
}

const documentsRaw = ref(null)
const dragIndex = ref(null)
const documents = ref([])
watch(documentsRaw, () => {
	if (documentsRaw.value === null) return
	documents.value.push(
		...Array.from(documentsRaw.value).map((file) => ({
			file,
			url: URL.createObjectURL(file),
		})),
	)
	console.log(documents.value)
	documentsRaw.value = null
})

// Начало перетаскивания
const dragStart = (index) => {
	dragIndex.value = index
}

// Перетаскивание на другой элемент (меняем местами)
const drop = (index) => {
	if (dragIndex.value !== null && dragIndex.value !== index) {
		;[documents.value[dragIndex.value], documents.value[index]] = [
			documents.value[index],
			documents.value[dragIndex.value],
		]
	}
	dragIndex.value = null
}
const selectedFileURL = ref(null)
const deleteFile = (index) => {
	if (selectedFileURL.value === documents.value[index].url) selectedFileURL.value = null
	documents.value.splice(index, 1)
}
</script>

<template>
	<button :class="`button ${$attrs.class}`" @click="isModalVisible = true">
		<span class="button__plus" />
		Добавить документ
	</button>

	<RightSlideModal :isVisible="isModalVisible" @close="closeModal">
		<PDFModal :src="selectedFileURL" v-if="selectedFileURL" />
		<RightSlideModalContainer title="Добавление документов">
			<div class="document-add">
				<div class="document-add__row">
					<DocumentAddButton v-model="documentsRaw" />
					<DocumentAddButton from-template />
				</div>
				<hr />
				<ListAttachedDocuments>
					<template #default="{ strongOrder }">
						<AttachedDocument
							v-for="(doc, index) in documents"
							:key="index"
							:info="doc.file"
							:is-draggable="strongOrder"
							@delete="deleteFile(index)"
							@click="selectedFileURL = doc.url"
							@dragstart="() => dragStart(index)"
							@drop="() => drop(index)"
							@dragover.prevent
						/>
					</template>
				</ListAttachedDocuments>
				<hr />
			</div>
		</RightSlideModalContainer>
	</RightSlideModal>
</template>

<style scoped lang="scss">
.document-add {
	display: flex;
	flex-direction: column;
	max-width: 484px;
	width: 100%;
	gap: 32px;
	&__row {
		display: flex;
		gap: 24px;
	}
	hr {
		margin-left: -52px;
		max-width: calc(100% + 104px);
		width: calc(100% + 104px);
		border: 0;
		height: 1px;
		background: #fff;
	}
}
.button {
	@extend .f-signatures;
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
