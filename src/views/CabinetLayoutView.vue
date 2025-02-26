<script setup>
const LINKS = [
	{ title: 'Мои компании', tab: 'companies' },
	{ title: 'Мои документы', tab: 'documents' },
]
</script>

<template>
	<BaseMainTabs :links="LINKS" parent="cabinet" />
	<router-view></router-view>
</template>

<style scoped lang="scss"></style>
