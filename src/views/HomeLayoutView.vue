<script setup>
const LINKS = [
	{ title: 'Документы', tab: 'documents' },
	{ title: 'Клиенты', tab: 'clients' },
	{ title: 'Оплаты', tab: 'payments' },
	{ title: 'Товары', tab: 'products' },
]
</script>

<template>
	<div class="home-tabs">
		<router-link class="home-tabs__link" v-for="link in LINKS" :to="`/home/${link.tab}`">
			{{ link.title }}
		</router-link>
	</div>
	<router-view></router-view>
</template>

<style scoped lang="scss">
.home-tabs {
	display: flex;
	gap: 32px;
	&__link {
		@extend .f-menu;
		padding-bottom: 6px;
		position: relative;
		color: var(--Basic-Grey);
		transition: 0.3s ease;
		&::after {
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			height: 2px;
			content: '';
			background: var(--Basic-Grey);
			transition: 0.3s ease;
			border-radius: 3px;
		}
		&.router-link-active {
			color: var(--Basic-Dark);
			&::after {
				background: var(--Basic-Dark);
			}
		}
	}
}
</style>
