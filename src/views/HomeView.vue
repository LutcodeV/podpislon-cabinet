<script setup>
const LINKS = [
	{ title: 'Документы', tab: 'documents' },
	{ title: 'Клиенты', tab: 'clients' },
	{ title: 'Оплаты', tab: 'payments' },
	{ title: 'Товары', tab: 'products' },
]
const activeTab = ref(LINKS[0].tab)
</script>

<template>
	<div class="home-tabs">
		<button
			class="home-tabs__link"
			:class="{ 'home-tabs__link--active': activeTab === link.tab }"
			v-for="link in LINKS"
			@click="activeTab = link.tab"
		>
			{{ link.title }}
		</button>
	</div>
	<documents-view v-if="activeTab === 'documents'" />
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
		&--active {
			color: var(--Basic-Dark);
			&::after {
				background: var(--Basic-Dark);
			}
		}
	}
}
</style>
