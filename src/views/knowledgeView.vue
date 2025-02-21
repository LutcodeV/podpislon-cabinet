<script setup>
import BaseColumn from '@/components/global/BaseColumn.vue'

const menuData = [
	{
		title: 'Начало работы',
		items: [
			{ link: '/knowledge/1', title: 'Регистрация в сервисе' },
			{ link: '/knowledge/2', title: 'Авторизация' },
			{ link: '/knowledge/3', title: 'Восстановление пароля' },
			{ link: '/knowledge/4', title: 'Заполнение профиля пользователя' },
			{ link: '/knowledge/5', title: 'Изменение пароля' },
			{ link: '/knowledge/6', title: 'Редактирование данных компании' },
			{ link: '/knowledge/7', title: 'Добавление новой компании' },
			{ link: '/knowledge/8', title: 'Распределение документов' },
			{ link: '/knowledge/9', title: 'Удаление тестовой компании' },
		],
	},
	{
		title: 'Работа с документами',
		items: [],
	},
	{
		title: 'Клиенты',
		items: [],
	},
	{
		title: 'Сотрудники',
		items: [],
	},
	{
		title: 'Оплата',
		items: [],
	},
]
</script>

<template>
	<PageHeader title="База знаний" />
	<BaseRow class="knowledge">
		<BaseCard :tag="BaseColumn" class="knowledge__aside">
			<KnowledgeChapter v-for="item in menuData" :key="item.title" :info="item" />
		</BaseCard>
		<BaseCard :tag="BaseColumn" class="knowledge__content">
			<router-view></router-view>
		</BaseCard>
	</BaseRow>
</template>

<style scoped lang="scss">
.knowledge {
	display: flex;
	margin-top: 24px;
	flex: 1 1 0;
	&__aside {
		flex: 0 0 268px;
		height: 100%;
	}
	&__content {
		height: 100%;
		flex: 1 1 0;
		overflow: auto;
	}
}
</style>
