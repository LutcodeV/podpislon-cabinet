<script setup>
import SettingsView from '../settings/SettingsView.vue'

const navbarIsFolded = inject('navbarIsFolded')
const LINKS = [
	{ href: '/', icon: 'home', title: 'Главная' },
	{ href: '/tariff', icon: 'tariff', title: 'Мой тариф' },
	{ href: '/employees', icon: 'employees', title: 'Сотрудники' },
	{
		action: () => (settingIsOpen.value = !settingIsOpen.value),
		icon: 'settings',
		title: 'Настройки',
	},
	{ href: '/knowledge', icon: 'knowledge', title: 'База знаний' },
	{ href: '/partners', icon: 'partners', title: 'Партнерка' },
	{ href: '/bonuses', icon: 'bonuses', title: 'Бонусы' },
]

const settingIsOpen = ref(false)
</script>

<template>
	<aside class="aside" :class="{ 'aside--folded': navbarIsFolded }">
		<nav class="aside-nav">
			<AsideLink
				:key="link.href"
				v-for="link in LINKS"
				:is-folded="navbarIsFolded"
				:href="link.href"
				:action="link.action"
				:icon="link.icon"
				:title="link.title"
			/>
		</nav>
		<button class="aside__button" @click="navbarIsFolded = !navbarIsFolded">
			<BaseIcon name="arrow-left" />
		</button>

		<SettingsView :isVisible="settingIsOpen" @close="settingIsOpen = false" />
	</aside>
</template>

<style scoped lang="scss">
.aside-nav {
	display: flex;
	flex-direction: column;
	gap: 40px;
	padding-top: 30px;
	overflow: auto;
	max-height: calc(100vh - 62px - 73px);
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
}
.aside {
	display: flex;
	flex-direction: column;
	&__button {
		padding: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		border-top: 1px solid var(--Basic-Grey);
		margin-top: auto;
		.icon {
			color: #fff;
			transition: 0.3s ease;
			min-width: 16px;
			min-height: 16px;
		}
	}
	&--folded {
		.aside__button .icon {
			transform: rotate(180deg);
		}
	}
}
</style>
