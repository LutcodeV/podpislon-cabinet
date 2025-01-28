<script setup>
import RightScreenNews from '@/components/auth/RightScreenNews.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
</script>

<template>
	<AuthLayout>
		<template #left>
			<div class="login">
				<p class="auth__title">Авторизация</p>
				<LoginForm />
				<p class="login__footer">
					Нет аккаунта?
					<router-link class="login__link" to="/registration">Регистрация</router-link>
				</p>
			</div>
		</template>
		<template #right>
			<RightScreenNews />
		</template>
	</AuthLayout>
</template>

<style scoped lang="scss">
.login {
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
