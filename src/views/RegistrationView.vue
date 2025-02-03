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
			<div
				class="registration-right"
				v-if="registrationType === 'Не выбрано' || registrationType === 'Кабинет физлица'"
			>
				<p class="registration-right__title">
					<span>10 бесплатных документов*</span><br />
					после регистрации
				</p>
				<p class="registration-right__subtitle">Подписывай документы в один клик</p>
				<p class="registration-right__footnote">
					<span>*</span>Документы до первой оплаты не будут иметь юридической силы, на них будет
					наноситься водяной знак "Образец".
				</p>
				<p class="registration-right__benefit">
					Первый пецеализированный сервис ЭДО для работы с физлицами
				</p>
				<img src="/assets/img/registration-phone.png" alt="" class="registration-right__img" />
			</div>
			<div class="registration-right" v-else>
				<p class="registration-right__title">
					<span>Онлайн архив</span> <br />
					ваших документов
				</p>
				<p class="registration-right__subtitle">Подписывай документы в один клик</p>
				<p class="registration-right__benefit">
					Первый пецеализированный сервис ЭДО для работы с физлицами
				</p>
				<img src="/assets/img/registration-phone.png" alt="" class="registration-right__img" />
			</div>
			<!-- <img
				class="registration__right"
				src="/assets/img/registration-banner-01.png"
				v-if="registrationType === 'Не выбрано' || registrationType === 'Кабинет физлица'"
				alt=""
			/>
			<img v-else class="registration__right" src="/assets/img/registration-banner-02.png" alt="" /> -->
		</template>
	</AuthLayout>
</template>

<style scoped lang="scss">
.registration-right {
	width: 100%;
	height: 100%;
	min-height: 100%;
	flex: 1 1 0;
	position: relative;
	overflow: hidden;
	&__img {
		left: 50%;
		position: absolute;
		bottom: -227px;
		transform: translate(calc(-50% - 41px), 0);
	}
	&__benefit {
		@extend .f-menu;
		position: absolute;
		left: 50%;
		bottom: 130px;
		color: #fff;
		max-width: 400px;
		padding: 24px 24px 24px 160px;
		background: rgba(0, 0, 0, 0.37);
	}
	&__subtitle {
		@extend .f-heading;
		margin-top: 34px;
		text-align: center;
		color: #fff;
	}
	&__title {
		color: #fff;
		font-size: 64px;
		font-style: normal;
		font-weight: 900;
		line-height: 106%;
		gap: 24px;
		margin: 100px auto 0;
		text-align: center;
		span {
			color: var(--Basic-Branded);
		}
	}
	&__footnote {
		@extend .f-small-main;
		position: absolute;
		bottom: 48px;
		left: 64px;
		max-width: 266px;
		color: #fff;
		span {
			color: var(--Basic-Branded);
		}
	}
}
.registration {
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
