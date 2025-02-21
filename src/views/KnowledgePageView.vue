<script setup>
import BaseColumn from '@/components/global/BaseColumn.vue'

const pageContent = {
	title: 'Авторизация',
	description:
		'Для входа в личный кабинет перейдите по ссылке: <a href="https://podpislon.ru/lk/login">https://podpislon.ru/lk/login</a> Введите E-mail и пароль. Системный пароль для входа в личный кабинет был отправлен вам в письме при регистрации. Если вы позднее изменили пароль и не помните его, воспользуйтесь восстановлением пароля.',
	image: {
		src: '/assets/img/knowledge-img-01.jpg',
		alt: 'Девушка в жёлтом свитере на фиолетовом фоне улыбается',
	},
	tips: [
		{
			type: 'error',
			message:
				'E-mail и пароль. Системный пароль для входа в личный кабинет был отправлен вам в письме при регистрации.',
		},
		{
			type: 'success',
			message:
				'E-mail и пароль. Системный пароль для входа в личный кабинет был отправлен вам в письме при регистрации.',
		},
	],
}
</script>

<template>
	<BaseColumn class="knowledge-page">
		<BaseText variant="heading" class="knowledge-page__title">{{ pageContent.title }}</BaseText>
		<BaseText
			variant="main-text"
			class="knowledge-page__text"
			v-html="pageContent.description"
		></BaseText>
		<img :src="pageContent.image.src" :alt="pageContent.image.alt" class="knowledge-page__img" />
		<KnowledgeTip v-for="item in pageContent.tips" :key="item.message" :info="item" />
	</BaseColumn>
</template>

<style scoped lang="scss">
.knowledge-page {
	&__text {
		:deep(a) {
			color: var(--Basic-Branded);
			text-decoration: underline;
		}
	}
	&__img {
		max-width: 524px;
		width: 100%;
	}
	.knowledge-tip {
		max-width: 524px;
		width: 100%;
	}
}
</style>
