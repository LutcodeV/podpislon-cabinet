<script setup>
const LINKS = [
	{ title: 'Документы', tab: 'documents' },
	{ title: 'Клиенты', tab: 'clients' },
	{ title: 'Оплаты', tab: 'payments' },
	{ title: 'Товары', tab: 'products' },
]
</script>

<template>
	<BaseMainTabs :links="LINKS" parent="home" />
	<router-view></router-view>
</template>

<style scoped lang="scss"></style>
