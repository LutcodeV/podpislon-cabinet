<script setup>
defineProps({
	type: {
		type: String,
		default: 'tbank',
	},
	href: {
		type: String,
		default: '#',
	},
})
const icons = {
	tbank: 'auth-tbank',
	sber: 'auth-sber',
	biomery: 'auth-biometry',
}
</script>

<template>
	<a :href="href" :class="`method method--${type}`">
		<base-icon save-color :name="icons[type]"></base-icon>
		<slot></slot>
	</a>
</template>

<style scoped lang="scss">
.method {
	@extend .f-main-text;
	color: #fff;
	gap: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px 8px;
	border-radius: 4px;
	&--tbank {
		background: #fab718;
	}
	&--sber {
		background: linear-gradient(90deg, #63b22f 0%, #0291eb 100%);
	}
	&--biometry {
		background: var(--Basic-Dark);
	}
}
</style>
