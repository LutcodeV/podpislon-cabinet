<script setup>
defineProps({
	fromTemplate: {
		type: Boolean,
		default: false,
	},
	modelValue: {
		type: FileList,
		default: null,
	},
})

defineEmits(['update:modelValue'])
</script>

<template>
	<div class="document-add-button">
		<input
			type="file"
			class="document-add-button__input"
			multiple
			accept="application/pdf"
			v-if="!fromTemplate"
			@input="$emit('update:modelValue', $event.target.files)"
		/>
		<base-icon name="from-computer" class="document-add-button__icon" v-if="!fromTemplate" />
		<base-icon name="from-template" class="document-add-button__icon" v-else />
		<div class="document-add-button__col">
			<p class="document-add-button__title">
				{{ fromTemplate ? 'Из шаблона' : 'С компютера' }}
			</p>
			<p class="document-add-button__text">
				{{ fromTemplate ? 'Выберите файл из шаблона' : 'Выберите файл с компьютера' }}
			</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
.document-add-button {
	@extend .b-card;
	display: flex;
	gap: 24px;
	align-items: center;
	cursor: pointer;
	position: relative;

	padding: 10px 18px 12px;
	&__input {
		opacity: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: absolute;
	}
	&__title {
		@extend .f-main-text;
		text-decoration: underline;
	}
	&__text {
		@extend .f-signatures;
		color: var(--Basic-Grey);
	}
	&__icon {
		min-width: 24px;
		min-height: 24px;
	}
	&__col {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
}
</style>
