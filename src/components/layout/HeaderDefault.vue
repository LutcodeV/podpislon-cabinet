<script setup>
import { inject } from 'vue'
import BaseIcon from '../ui/BaseIcon.vue'
const contentIsBlur = inject('contentIsBlur')

const SERVICES_LINKS = [
	{
		title: 'Подпислон',
		href: '#',
		text: 'Подписание документов с физлицами',
	},
	{
		title: 'АйКЭДО',
		href: '#',
		text: 'Подписание документов с сотрудниками',
	},
	{
		title: 'Отзовчикофф',
		href: '#',
		text: 'Виджет для получения отзывов',
	},
	{
		title: 'CRM',
		href: '#',
		text: 'Управление  продажами',
	},
]
</script>

<template>
	<header class="header">
		<img src="@/assets/img/logo.png" alt="" class="header__logo" />
		<button
			class="header-services"
			@mouseenter="contentIsBlur = true"
			@mouseleave="contentIsBlur = false"
		>
			<BaseIcon name="services-menu" />
			<div class="header-services__list">
				<p class="header-services__title">Выбор сервиса</p>
				<a :href="link.href" class="header-services-link" v-for="link in SERVICES_LINKS">
					<base-icon name="service-icon" />
					<span class="header-services-link__col">
						<span class="header-services-link__title">{{ link.title }}</span>
						<span class="header-services-link__text">{{ link.text }}</span>
					</span>
				</a>
			</div>
		</button>
		<button class="header-balance">
			<div class="header-balance__icon">
				<BaseIcon name="ruble" />
			</div>
			<p class="header-balance__value">Баланс: 345</p>
			<BaseIcon class="header-balance__chevron" name="chevron-down" />
		</button>
		<button class="header-company">
			<BaseIcon class="header-company__icon" name="case" />
			<p class="header-company__value">ИП Пантелемеев Горгивмва</p>
			<BaseIcon class="header-company__chevron" name="chevron-down" />
		</button>
		<button class="header-account">
			<BaseIcon class="header-account__icon" name="profile" />
			<p class="header-account__value">Георгий Героев</p>
		</button>
		<div class="header-notification header-notification--new">
			<BaseIcon name="notification" />
		</div>
	</header>
</template>

<style scoped lang="scss">
.header {
	padding: 16px 24px 16px 20px;
	display: flex;
	align-items: center;
	gap: 20px;
}
.header-services-link {
	display: flex;
	gap: 12px;
	align-items: flex-start;
	&__col {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	&__title {
		@extend .f-main-text;
		color: var(--Basic-Dark);
		text-align: left;
		transition: 0.3s ease;
	}
	&__text {
		@extend .f-small-main;
		text-align: left;
		color: var(--Basic-Grey);
	}
	svg {
		color: var(--Basic-Branded);
		margin-top: 4px;
		min-width: 22px;
	}
	&:hover {
		.header-services-link__title {
			color: var(--Basic-Branded);
		}
	}
}
.header-services {
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	transition: 0.3s ease;
	padding: 14px;
	margin: -14px;
	position: relative;
	&__list {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 24px;
		width: 230px;
		border-radius: 4px;
		background: #fff;
		box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
		position: absolute;
		left: 100%;
		top: 14px;
		pointer-events: none;
		opacity: 0;
		gap: 16px;
		transform: translateX(10px);
		transition: 0.3s ease;
		z-index: 1;
	}
	&__title {
		@extend .f-menu;
		color: var(--Basic-Dark);
	}
	&:hover {
		svg {
			color: var(--Basic-Branded);
		}
		.header-services__list {
			opacity: 1;
			transform: translateX(0);
			pointer-events: all;
		}
	}
}
.header-balance {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-left: auto;
	&__chevron {
		color: var(--Basic-Grey);
	}
	&__icon {
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--Basic-Branded);
		border-radius: 50%;
		color: var(--Basic-Dark);
	}
	&__value {
		@extend .f-main-text !optional;
		color: #fff;
	}
}
.header-company {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-left: 80px;
	&__icon {
		color: var(--Basic-Grey);
	}
	&__value {
		@extend .f-main-text !optional;
		color: #fff;
	}
	&__chevron {
		color: var(--Basic-Grey);
	}
}
.header-account {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-left: 80px;
	&__icon {
		color: var(--Basic-Grey);
	}
	&__value {
		@extend .f-main-text !optional;
		color: #fff;
	}
}
.header-notification {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin-left: 80px;
	color: var(--Basic-Grey);
	&--new {
		&::after {
			content: '';
			position: absolute;
			top: -3px;
			right: -3px;
			width: 6px;
			height: 6px;
			border-radius: 50%;
			background: #ff2507;
			box-shadow: 0 0 0 4px rgba($color: #ff2507, $alpha: 0.5);
		}
	}
}
</style>
