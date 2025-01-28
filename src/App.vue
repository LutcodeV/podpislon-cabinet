c<script setup>
import { RouterView, useRoute } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'

const route = useRoute()
const layout = computed(() => route.meta.layout || DefaultLayout)
</script>

<template>
	<component :is="layout">
		<RouterView />
	</component>
</template>

<style scoped></style>
