<script setup>
const form = ref({
	email: '',
	phone: '',
	password: '',
	registration_type: 'Не выбрано',
})

const LIST_REGISTRATION_TYPE = ['Кабинет физлица', 'Кабинет компании']
const LIST_TITLES = {
	'Не выбрано': 'РЕГИСТРАЦИЯ',
	'Кабинет физлица': 'РЕГИСТРАЦИЯ ФИЗЛИЦА',
	'Кабинет компании': 'РЕГИСТРАЦИЯ КОМПАНИИ',
}
const LIST_SUBTITLES = {
	'Кабинет физлица': 'Ваш личный архив документов, которые вы подписали.',
	'Кабинет компании': 'Подписывайте документы с клиентами и сотрудниками!',
}

const submitHandler = () => {
	emit('submit', form.value)
}
watch(
	() => form.value.registration_type,
	() => {
		emit('selectRegistrationType', form.value.registration_type)
	},
)

const emit = defineEmits(['submit', 'selectRegistrationType'])
</script>

<template>
	<div class="auth__title">{{ LIST_TITLES[form.registration_type] }}</div>
	<div class="auth__subtitle auth__subtitle--small" v-if="form.registration_type !== 'Не выбрано'">
		{{ LIST_SUBTITLES[form.registration_type] }}
	</div>
	<form class="form" @submit.prevent="submitHandler">
		<base-select
			v-model="form.registration_type"
			placeholder="Тип регистрации"
			:list="LIST_REGISTRATION_TYPE"
		/>
		<template v-if="form.registration_type !== 'Не выбрано'">
			<base-input placeholder="Email" type="email" :required="true" v-model="form.email" required />
			<base-input
				placeholder="Телефон"
				type="phone"
				:required="true"
				v-model="form.password"
				v-if="form.registration_type === 'Кабинет физлица'"
				required
			/>
			<base-input
				placeholder="Пароль"
				type="password"
				:required="true"
				v-model="form.password"
				required
				v-else
			/>
			<div class="form__row">
				<base-checkbox required>
					Нажимая на кнопку «Зарегистрироваться», я даю согласие на
					<a href="#">обработку персональных данных</a> и соглашаюсь c условиями
					<a href="#">оферты</a>.
				</base-checkbox>
			</div>
		</template>
		<base-button :disabled="form.registration_type === 'Не выбрано'">
			Зарегистрироваться
		</base-button>
		<div class="form__methods" v-if="form.registration_type !== 'Не выбрано'">
			<ButtonAuthMethod type="tbank">Зарегистрироваться через TБанк ID</ButtonAuthMethod>
			<ButtonAuthMethod type="sber">Зарегистрироваться через Сбер ID</ButtonAuthMethod>
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
