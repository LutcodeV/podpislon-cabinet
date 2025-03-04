<script setup>
const form = ref({
	email: '',
	password: '',
})

const refForm = ref(null)
const submitHandler = () => {
	const inputs = refForm.value.querySelectorAll('.input')
	inputs.forEach((input) => {
		const inputField = input.querySelector('input')
		if (inputField.checkValidity()) input.classList.remove('invalid')
		else input.classList.add('invalid')
	})
}
</script>

<template>
	<form class="form" ref="refForm">
		<base-input placeholder="Email" type="email" v-model="form.email" required />
		<base-input placeholder="Пароль" type="password" v-model="form.password" required />
		<div class="form__row">
			<base-checkbox class="form__checkbox">Запомнить меня</base-checkbox>
			<router-link class="form__link" to="/password-recovery">Забыли пароль?</router-link>
		</div>
		<base-button @click="submitHandler">Войти</base-button>
		<div class="form__methods">
			<ButtonAuthMethod type="biometry">Вход по биометрии</ButtonAuthMethod>
			<ButtonAuthMethod type="tbank">Вход через TБанк ID</ButtonAuthMethod>
			<ButtonAuthMethod type="sber">Вход через Сбер ID</ButtonAuthMethod>
		</div>
	</form>
</template>

<style scoped lang="scss">
.form {
	display: flex;
	flex-direction: column;
	gap: 24px;
	&__methods {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	&__checkbox {
		align-items: center;
	}
	&__row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__link {
		@extend .f-signatures;
		color: var(--Basic-Grey);
		transition: 0.3s ease;
		text-decoration: underline;

		&:hover {
			color: var(--Basic-Branded);
		}
	}
}
</style>
