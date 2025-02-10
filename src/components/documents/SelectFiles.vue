<script setup>
const props = defineProps({
	selectedFiles: {
		required: true,
	},
})

const emit = defineEmits(['update:selectedFiles', 'selectedFileURL'])

const documentsRaw = ref(null)
const dragIndex = ref(null)
const documents = ref(props.selectedFiles)

const dragStart = (index) => {
	dragIndex.value = index
}
const drop = (index) => {
	if (dragIndex.value !== null && dragIndex.value !== index) {
		;[documents.value[dragIndex.value], documents.value[index]] = [
			documents.value[index],
			documents.value[dragIndex.value],
		]
	}
	dragIndex.value = null
}
const deleteFile = (index) => {
	if (props.selectedFileURL === documents.value[index].url) props.selectedFileURL = null
	documents.value.splice(index, 1)
}
watch(documentsRaw, () => {
	if (documentsRaw.value === null) return
	documents.value.push(
		...Array.from(documentsRaw.value).map((file) => ({
			file,
			url: URL.createObjectURL(file),
		})),
	)
	documentsRaw.value = null
})
watch(documents, () => emit('update:selectedFiles', documents.value))
</script>

<template>
	<div class="files-select-group__add">
		<DocumentAddButton v-model="documentsRaw" />
		<DocumentAddButton from-template />
	</div>
	<hr v-if="documents.length > 0" />
	<ListAttachedDocuments v-if="documents.length > 0" :list-length="documents.length">
		<template #default="{ strongOrder }">
			<AttachedDocument
				v-for="(doc, index) in documents"
				:key="index"
				:info="doc.file"
				:is-draggable="strongOrder"
				@delete="deleteFile(index)"
				@click="$emit('selectedFileURL', doc.url)"
				@dragstart="() => dragStart(index)"
				@drop="() => drop(index)"
				@dragover.prevent
				editable
			/>
		</template>
	</ListAttachedDocuments>
</template>

<style scoped lang="scss">
.files-select-group {
	&__add {
		display: flex;
		gap: 24px;
	}
}
</style>
