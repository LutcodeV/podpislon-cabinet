<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'

const isSubmiting = ref(false)
const submitingEmail = ref('')
</script>

<template>
	<AuthLayout>
		<template #left>
			<div class="login">
				<p class="auth__title">Восстановления пароля</p>
				<p class="auth__subtitle auth__subtitle--small" style="margin-top: 24px" v-if="isSubmiting">
					Проверьте ваш почтовый ящик <br />
					<mark>{{ submitingEmail }}</mark> и перейдите по ссылке для восстановления пароля.
				</p>
				<template v-else>
					<p class="auth__subtitle">
						Введите ваш E-mail на него придет ссылка для востановления пароля
					</p>
					<PasswordRecoveryForm
						@submit="
							(e) => {
								isSubmiting = true
								submitingEmail = e.email
							}
						"
					/>
				</template>
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
