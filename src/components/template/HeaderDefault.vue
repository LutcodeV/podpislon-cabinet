<script setup>
import { inject } from 'vue'
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
const BALANCES = [
	{
		icon: 'documents',
		title: 'Баланс документов',
		value: '222 534',
	},
	{
		icon: 'ruble',
		title: 'Баланс',
		value: '222 534 руб.',
	},
	{
		icon: 'tariff',
		title: 'Подписка',
		value: 'до 12.12.2024',
	},
]
const COMPANIES = ['ООО Ромашка', 'ООО Газпром межрегионгаз промпромпромпромпромпромпром']
</script>

<template>
	<header class="header">
		<img src="/assets/img/logo.svg" alt="" class="header__logo" />
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
		<button
			class="header-balance"
			@mouseenter="contentIsBlur = true"
			@mouseleave="contentIsBlur = false"
		>
			<div class="header-balance__icon">
				<BaseIcon name="ruble" />
			</div>
			<p class="header-balance__value">Баланс: 345</p>
			<BaseIcon class="header-balance__chevron" name="chevron-down" />
			<div class="header-balance__list-wrapper">
				<div class="header-balance__list">
					<div class="header-balance-item" v-for="item in BALANCES">
						<BaseIcon class="header-balance-item__icon" :name="item.icon" />
						<p class="header-balance-item__title">{{ item.title }}</p>
						<p class="header-balance-item__value">{{ item.value }}</p>
					</div>
					<a href="#" class="header-balance__add">Пополнить баланс</a>
				</div>
			</div>
		</button>
		<button
			class="header-company"
			@mouseenter="contentIsBlur = true"
			@mouseleave="contentIsBlur = false"
		>
			<BaseIcon class="header-company__icon" name="case" />
			<p class="header-company__value">ИП Пантелемеев Горгивмва</p>
			<BaseIcon class="header-company__chevron" name="chevron-down" />
			<div class="header-company__list-wrapper">
				<div class="header-company__list">
					<p class="header-company__title">Выбрать другую компанию</p>
					<a href="#" class="header-company__link" v-for="item in COMPANIES">
						{{ item }}
					</a>
				</div>
			</div>
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
	position: relative;
	z-index: 1;
	&__chevron {
		transition: transform 0.3s ease;
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
	&__list-wrapper {
		position: absolute;
		top: 100%;
		right: -16px;
		opacity: 0;
		pointer-events: none;
		border-radius: 4px;
		transition: 0.3s ease;
		padding-top: 16px;
		transform: translateY(10px);
	}
	&__list {
		padding: 12px;
		border-radius: 4px;
		background: #fff;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		gap: 12px;
		box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
	}
	&__add {
		@extend .f-signatures;
		color: var(--Basic-Grey);
		text-decoration-line: underline;
		text-decoration-style: solid;
		text-decoration-skip-ink: auto;
		text-decoration-thickness: auto;
		text-underline-offset: auto;
		text-underline-position: from-font;
		text-align: right;
	}
	&:hover {
		.header-balance__list-wrapper {
			opacity: 1;
			transform: translateY(0);
			pointer-events: all;
		}
		.header-balance__chevron {
			transform: rotate(180deg);
			color: var(--Basic-Background);
		}
	}
}
.header-balance-item {
	display: flex;
	align-items: center;
	max-width: 246px;
	min-width: 246px;
	gap: 8px;
	width: 100%;
	padding: 10px 12px;
	border: 1px solid var(--Basic-Background);
	transition: 0.3s ease;
	border-radius: 4px;
	&__title {
		@extend .f-small-main;
	}
	&__value {
		@extend .f-small-main;
		margin-left: auto;
	}
	&__icon {
		width: 16px;
		height: 16px;
		min-width: 16px;
		min-height: 16px;
	}
}
.header-company {
	display: flex;
	align-items: center;
	gap: 12px;
	position: relative;
	margin-left: 80px;
	&__icon {
		color: var(--Basic-Grey);
	}
	&__value {
		@extend .f-main-text !optional;
		color: #fff;
	}
	&__chevron {
		transition: transform 0.3s ease;
		color: var(--Basic-Grey);
	}
	&__list-wrapper {
		position: absolute;
		top: 100%;
		right: 0;
		opacity: 0;
		pointer-events: none;
		border-radius: 4px;
		z-index: 1;
		transition: 0.3s ease;
		padding-top: 16px;
		min-width: 100%;
		transform: translateY(10px);
	}
	&__list {
		max-width: 226px;
		margin: 0 auto;
		padding: 12px;
		border-radius: 4px;
		background: #fff;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: 12px;
		box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
	}
	&__link {
		@extend .f-small-main;
		max-width: 200px;
		min-width: 200px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		word-break: break-all;
		overflow: hidden;
		text-align: left;
		color: var(--Basic-Dark);
		text-overflow: ellipsis;
		transition: 0.3s ease;
		&:hover {
			color: var(--Basic-Branded);
			text-decoration: underline;
		}
	}
	&__title {
		@extend .f-signatures;
		color: var(--Basic-Grey);
		text-align: left;
	}
	&:hover {
		.header-company__list-wrapper {
			opacity: 1;
			transform: translateY(0);
			pointer-events: all;
		}
		.header-company__chevron {
			transform: rotate(180deg);
			color: var(--Basic-Background);
		}
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
