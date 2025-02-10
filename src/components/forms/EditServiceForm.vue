<script setup>
const props = defineProps({
	info: {
		type: Object,
		required: true,
	},
})
defineEmits(['close', 'save'])

const formEditService = ref({
	service: props.info.service,
	price: props.info.price,
})
</script>

<template>
	<form class="form">
		<BaseInput name="service" placeholder="Услуга" v-model="formEditService.service" />
		<BaseInput name="price" placeholder="Сумма" v-model="formEditService.price" />
		<div class="form__row">
			<BaseButton variant="outlined" size="small" @click="$emit('save', formEditService)">
				Сохранить
			</BaseButton>
			<BaseButton variant="outlined" size="small" color="grey" @click="$emit('close')">
				Отменить
			</BaseButton>
		</div>
	</form>
</template>

<style scoped lang="scss">
.form {
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
	&__row {
		margin-top: 4px;
		display: flex;
		justify-content: space-between;
	}
}
</style>
