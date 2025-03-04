<script setup>
const form = ref({
	email: '',
})

const emit = defineEmits(['submit'])

const submitHandler = () => {
	const inputs = refForm.value.querySelectorAll('.input')
	let isError = false
	inputs.forEach((input) => {
		const inputField = input.querySelector('input')
		if (inputField.checkValidity()) input.classList.remove('invalid')
		else {
			input.classList.add('invalid')
			isError = true
		}
	})
	if (isError) return
	emit('submit', form.value)
}

const refForm = ref(null)
</script>

<template>
	<form class="form" ref="refForm">
		<base-input placeholder="Email" type="email" v-model="form.email" required />
		<base-button @click="submitHandler">Отправить</base-button>
	</form>
</template>

<style scoped lang="scss">
.form {
	display: flex;
	flex-direction: column;
	gap: 24px;
}
</style>
