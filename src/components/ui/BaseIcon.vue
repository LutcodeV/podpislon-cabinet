<script setup>
// const icons = {
//   home: require('../assets/icons/icon-home.vue'),
//   user: require('../assets/icons/icon-user.vue'),
//   // ...
// }
const props = defineProps({
	name: {
		type: String,
		required: true,
	},
})

const icon = defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg`))
</script>

<template>
	<component :is="icon" class="icon" />
</template>

<style scoped lang="scss">
.icon {
	display: inline-block;
	color: currentColor;
	:deep([fill]) {
		fill: currentColor;
		transition: 0.3s ease;
	}
	:deep([stroke]) {
		stroke: currentColor;
		transition: 0.3s ease;
	}
}
</style>
