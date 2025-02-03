<script setup>
const LINKS = [
	{ title: 'Баланс и оплата', tab: 'balance' },
	{ title: 'Счета и акты', tab: 'bills' },
]
</script>

<template>
	<BaseMainTabs :links="LINKS" parent="tariff" />
	<router-view></router-view>
</template>

<style scoped lang="scss"></style>
