<script setup>
import BaseColumn from '@/components/global/BaseColumn.vue'
import BaseTooltipActions from '@/components/global/BaseTooltipActions.vue'
import { provide, ref } from 'vue'

const contentIsBlur = ref(false)
const navbarIsFolded = ref(true)
provide('contentIsBlur', contentIsBlur)
provide('navbarIsFolded', navbarIsFolded)
const isModalUserVisible = ref(false)
const isModalUserPasswordVisible = ref(false)

const ACTIONS = [
	{
		label: 'Сменить пароль',
		callback: () => {
			isModalUserPasswordVisible.value = true
		},
	},
	{
		label: 'Редактировать',
		callback: () => {
			isModalUserVisible.value = true
		},
	},
]
const password = ref({
	old: '',
	new: '',
	confirm: '',
})
const info = {
	fio: 'Иванов Олег Иванович',
	phone: '+7 (999) 999-99-99',
	departament: 'Отдел продаж',
	status: 30,
	email: 's3vVx@example.com',
	date: '16.08.2024   19:47',
	avatar: '/assets/img/avatar.jpg',
	id: 'p[okjfew]',
}
const infoEdit = ref({
	first_name: info?.fio?.split(' ')[1],
	last_name: info?.fio?.split(' ')[0],
	surnamge: info?.fio?.split(' ')[2],
	departament: info.departament,
	phone: info.phone,
	email: info.email,
})
</script>

<template>
	<div class="layout" :class="{ 'layout--navbar-folded': navbarIsFolded }">
		<HeaderDefault class="layout-header" />
		<div class="layout-content" :class="{ 'layout-content--blur': contentIsBlur }">
			<BaseCard class="layout-content__info">
				<BaseTooltipActions class="layout-content__actions" :actions="ACTIONS" />
				<BaseColumn>
					<BaseRow align="center" gap="14px">
						<img src="/assets/img/avatar.jpg" alt="" class="layout-content__avatar" />
						<BaseText uppercase class="layout-content__title" variant="heading">
							Кудрявцев Олег Валериевич
						</BaseText>
					</BaseRow>
					<BaseColumn gap="12px">
						<BaseColumn gap="6px">
							<BaseText>Менеджер по продажам</BaseText>
							<BaseText variant="small-main" color="var(--Basic-Grey)">ID 2345_939</BaseText>
						</BaseColumn>
						<BaseColumn gap="6px">
							<BaseText variant="small-main" color="var(--Basic-Grey)">Телефон</BaseText>
							<BaseText>+7 980 657 45 34</BaseText>
						</BaseColumn>
						<BaseColumn gap="6px">
							<BaseText variant="small-main" color="var(--Basic-Grey)">E-mail</BaseText>
							<BaseText>Gmaimaeil@yandex.com</BaseText>
						</BaseColumn>
						<BaseColumn gap="6px">
							<BaseText variant="small-main" color="var(--Basic-Grey)">Права доступа</BaseText>
							<BaseText color="var(--Basic-Grey)">Полные права</BaseText>
						</BaseColumn>
						<BaseText variant="small-main" underline>Выход из личного кабинета</BaseText>
					</BaseColumn>
				</BaseColumn>
			</BaseCard>
			<div class="layout-content__wrapper">
				<div class="layout-content__container">
					<slot />
				</div>
				<FooterDefault />
			</div>
		</div>
	</div>
	<RightSlideModal
		:isVisible="isModalUserPasswordVisible"
		@close="isModalUserPasswordVisible = false"
	>
		<RightSlideModalContainer class="info-modal">
			<BaseColumn wFill>
				<BaseText variant="heading" uppercase>Смена Пароля</BaseText>
				<BaseCard :tag="BaseColumn" wFill>
					<BaseColumn gap="12px">
						<BaseInput wFill v-model="password.old" type="password" placeholder="Старый пароль" />
						<BaseInput wFill v-model="password.new" type="password" placeholder="Новый пароль" />
						<BaseInput
							wFill
							v-model="password.confirm"
							type="password"
							placeholder="Повтор пароль"
						/>
					</BaseColumn>
					<BaseButton>Сохранить</BaseButton>
				</BaseCard>
			</BaseColumn>
		</RightSlideModalContainer>
	</RightSlideModal>
	<RightSlideModal :isVisible="isModalUserVisible" @close="isModalUserVisible = false">
		<RightSlideModalContainer class="info-modal">
			<BaseColumn wFill>
				<BaseText variant="heading" uppercase>редактирование данных</BaseText>
				<BaseCard :tag="BaseColumn" wFill>
					<BaseColumn class="info-modal__avatar-column" gap="8px">
						<div class="info-modal__avatar">
							<img :src="info.avatar" alt="" v-if="info.avatar" />
							<svg
								v-else
								width="57"
								height="63"
								viewBox="0 0 57 63"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M28.5 0.59375C20.1682 0.59375 13.4062 7.35575 13.4062 15.6875C13.4062 24.0193 20.1682 30.7812 28.5 30.7812C36.8317 30.7812 43.5938 24.0193 43.5938 15.6875C43.5938 7.35575 36.8317 0.59375 28.5 0.59375ZM28.5 4.90625C34.4512 4.90625 39.2812 9.73625 39.2812 15.6875C39.2812 21.6388 34.4512 26.4688 28.5 26.4688C22.5487 26.4688 17.7188 21.6388 17.7188 15.6875C17.7188 9.73625 22.5487 4.90625 28.5 4.90625ZM4.78125 60.25C4.78125 47.1601 15.4101 36.5312 28.5 36.5312C41.5899 36.5312 52.2188 47.1601 52.2188 60.25V62.4062H56.5312V60.25C56.5312 44.7796 43.9704 32.2188 28.5 32.2188C13.0296 32.2188 0.46875 44.7796 0.46875 60.25V62.4062H4.78125V60.25Z"
									fill="#A7A7A7"
								/>
							</svg>
						</div>
						<BaseText variant="small-main" color="var(--Basic-Grey)">Загрузить фото</BaseText>
					</BaseColumn>
					<BaseColumn gap="12px">
						<BaseInput wFill v-model="infoEdit.first_name" placeholder="Имя" />
						<BaseInput wFill v-model="infoEdit.last_name" placeholder="Фамилия" />
						<BaseInput wFill v-model="infoEdit.surnamge" placeholder="Отчество" />
						<BaseInput wFill v-model="infoEdit.departament" placeholder="Должность" />
						<BaseInput wFill v-model="infoEdit.phone" placeholder="Телефон" />
						<BaseInput wFill v-model="infoEdit.email" placeholder="E-mail" />
						<BaseButton
							@click="codeSended = true"
							v-if="infoEdit.email !== info.email && !codeSended"
							wFill
							variant="outlined"
						>
							Отправить код подтверждения на почту
						</BaseButton>
						<BaseColumn gap="6px" v-if="codeSended">
							<BaseText variant="small-main">Код подтверждения был отправлен вам на почту</BaseText>
							<BaseInput wFill v-model="code" placeholder="Код подтверждения" />
							<BaseText variant="small-main" color="var(--Basic-Grey)">
								Отправить код повторно через 2:43
							</BaseText>
						</BaseColumn>
					</BaseColumn>
					<BaseButton :disabled="infoEdit.email !== info.email && code !== '000000'">
						Сохранить
					</BaseButton>
				</BaseCard>
			</BaseColumn>
		</RightSlideModalContainer>
	</RightSlideModal>
</template>

<style scoped lang="scss">
.info-modal {
	max-width: 540px;
	width: 100%;
	&__trash {
		cursor: pointer;
		margin-left: auto;
		color: var(--Basic-Grey);
	}
	&__avatar {
		background: var(--Basic-Background);
		border-radius: 50%;
		width: 100px;
		height: 100px;
		display: flex;
		overflow: hidden;
		margin: auto 0;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		svg {
			margin: auto auto 0;
		}
	}
	&__avatar-column {
		width: auto;
		align-items: center;
		justify-content: center;
	}
	&__card {
		position: relative;
	}
	&__edit {
		position: absolute;
		top: 14px;
		color: var(--Basic-Grey);
		right: 14px;
	}
}
.layout {
	max-width: 100vw;
	max-height: 100vh;
	width: 100vw;
	height: 100vh;
	background: var(--Basic-Dark);
	display: grid;
	transition: 0.3s ease;
	grid-template-columns: 168px 1fr;
	grid-template-rows: auto 1fr;
	grid-template-areas:
		'header header'
		'content content';
	&--navbar-folded {
		grid-template-columns: 64px 1fr;
	}
}
.layout-header {
	grid-area: header;
}
.layout-aside {
	grid-area: aside;
}
.layout-content {
	grid-area: content;
	display: flex;
	background: var(--Basic-Background);
	&__actions {
		position: absolute;
		right: 14px;
		top: 20px;
	}
	&__avatar {
		border-radius: 50%;
		overflow: hidden;
		width: 64px;
		height: 64px;
		min-width: 64px;
		min-height: 64px;
	}
	&__info {
		max-width: 384px;
		margin-bottom: auto;
		margin-top: 24px;
		margin-left: 24px;
		position: relative;
	}
	&__wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	&__container {
		padding: 24px 24px 0px;
		display: flex;
		height: 100%;
		overflow: auto;
		flex-direction: column;
		transition: 0.3s ease;
		max-height: calc(100vh - 126px);
	}
	&--blur > &__container {
		filter: blur(2px);
	}
}
</style>
