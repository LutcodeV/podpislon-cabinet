<script setup>
const LIST_NEWS = [
	{
		title: 'Верефикация клиента',
		date: '22.12.2024',
		text: 'Авторизация - без ярлычка закрытия, форму влево, справа лог обновлений сервиса и баннер.',
		link: '/',
	},
	{
		title: 'Верефикация клиента',
		date: '22.12.2024',
		text: 'Авторизация - без ярлычка закрытия, форму влево, справа лог обновлений сервиса и баннер.',
		link: '/',
	},
]
</script>

<template>
	<div class="right-screen-news">
		<div class="right-screen-news__container">
			<img src="/assets/img/news-banner.jpg" class="right-screen-news__img" alt="" />
			<p class="right-screen-news__title">Последние обновления</p>
			<router-link :to="item.link" class="right-screen-news-item" v-for="item in LIST_NEWS">
				<div class="right-screen-news-item__header">
					<p class="right-screen-news-item__title">{{ item.title }}</p>
					<p class="right-screen-news-item__date">{{ item.date }}</p>
				</div>
				<p class="right-screen-news-item__text">
					{{ item.text }}
				</p>
			</router-link>
		</div>
	</div>
</template>

<style scoped lang="scss">
.right-screen-news-item {
	display: flex;
	flex-direction: column;
	padding: 16px 24px;
	gap: 12px;
	color: var(--Basic-Dark);
	border-radius: 4px;
	background: #fff;
	&__header {
		display: flex;
		justify-content: space-between;
	}
	&__title {
		@extend .f-menu;
	}
	&__date {
		@extend .f-small-main;
		color: var(--Basic-Grey);
	}
	&__text {
		@extend .f-small-main;
	}
	& + & {
		margin-top: 24px;
	}
}
.right-screen-news {
	width: 100%;

	&__container {
		max-width: 572px;
		width: 100%;
		margin: 82px auto 0;
	}
	&__img {
		width: 100%;
		border-radius: 4px;
		display: block;
		& + * {
			margin-top: 64px;
		}
	}
	&__title {
		color: #fff;
		font-size: 32px;
		font-weight: 900;
		line-height: 106%; /* 33.92px */
		& + * {
			margin-top: 32px;
		}
	}
}
</style>
