<script setup>
import RegistrationForm from '@/components/forms/RegistrationForm.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const isSubmiting = ref(false)
const submitingEmail = ref('')
const registrationType = ref('Не выбрано')
</script>

<template>
	<AuthLayout>
		<template #left>
			<div class="registration">
				<template v-if="isSubmiting">
					<p class="auth__title">Подтвердите E-mail</p>
					<p class="auth__subtitle auth__subtitle--big">Спасибо за регистрацию!</p>
					<p class="auth__subtitle auth__subtitle--small">
						Проверьте ваш почтовый ящик <br />
						<mark>{{ submitingEmail }}</mark> для подтверждения адреса электронной почты.
					</p>
				</template>
				<template v-else>
					<RegistrationForm
						@submit="
							(e) => {
								isSubmiting = true
								submitingEmail = e.email
							}
						"
						@selectRegistrationType="(e) => (registrationType = e)"
					/>
					<p class="registration__footer">
						Уже есть аккаунт? <router-link class="login__link" to="/login">Войти</router-link>
					</p>
				</template>
			</div>
		</template>
		<template #right>
			<img
				class="registration__right"
				src="/assets/img/registration-banner-01.png"
				v-if="registrationType === 'Не выбрано' || registrationType === 'Кабинет физлица'"
				alt=""
			/>
			<img v-else class="registration__right" src="/assets/img/registration-banner-02.png" alt="" />
		</template>
	</AuthLayout>
</template>

<style scoped lang="scss">
.registration {
	&__right {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: bottom;
	}
	&__footer {
		@extend .f-small-main;
		margin-top: 24px;
		text-align: center;
		color: var(--Basic-Grey);
		a {
			color: var(--Basic-Branded);
			text-decoration: underline;
		}
	}
}
</style>
