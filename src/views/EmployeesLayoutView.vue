<script setup>
const LINKS = [
	{ title: 'Список сотрудников', tab: 'list' },
	{ title: 'Cтруктура компании', tab: 'structure' },
	{ title: 'Права доступа', tab: 'agreements' },
]
</script>

<template>
	<BaseMainTabs :links="LINKS" parent="employees" />
	<router-view></router-view>
</template>

<style scoped lang="scss"></style>
