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
	saveColor: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String,
		default: '',
	},
})

const icon = defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg`))
</script>

<template>
	<component
		:is="icon"
		:style="{
			width: size,
			height: size,
			minWidth: size,
			minHeight: size,
			maxWidth: size,
			maxHeight: size,
		}"
		:class="`icon ${saveColor ? 'save-color' : ''}`"
	/>
</template>

<style scoped lang="scss">
.icon {
	display: inline-block;
	color: currentColor;
	&:not(.save-color) {
		:deep([fill]) {
			fill: currentColor;
			transition: 0.3s ease;
		}
		:deep([stroke]) {
			stroke: currentColor;
			transition: 0.3s ease;
		}
	}
}
</style>
