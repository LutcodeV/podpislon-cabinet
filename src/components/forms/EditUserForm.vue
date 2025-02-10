<script setup>
const props = defineProps({
	info: {
		type: Object,
		required: true,
	},
})
defineEmits(['close', 'save'])

const formEditUser = ref({
	first_name: props.info.first_name,
	surname: props.info.surname,
	last_name: props.info.last_name,
	phone: props.info.phone,
})
</script>

<template>
	<form class="form">
		<BaseInput name="first_name" placeholder="Имя" v-model="formEditUser.first_name" />
		<BaseInput name="last_name" placeholder="Фамилия" v-model="formEditUser.surname" />
		<BaseInput name="surname" placeholder="Отчество" v-model="formEditUser.last_name" />
		<BaseInput name="phone" placeholder="Телефон" v-model="formEditUser.phone" />
		<div class="form__row">
			<BaseButton variant="outlined" size="small" @click="$emit('save', formEditUser)">
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
