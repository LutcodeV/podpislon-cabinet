<script setup>
defineProps({
	status: {
		type: Number,
		required: true,
	},
})

const STATUSES = {
	10: 'Черновик',
	15: 'Отправлен',
	20: 'Просмотрен',
	30: 'Подписан',
	40: 'Аннулирован',
	123: 'Договор не подписан',
}
</script>

<template>
	<div :class="`status status--${status}`">{{ STATUSES[status] }}</div>
</template>

<style scoped lang="scss">
.status {
	@extend .f-signatures;
	padding: 2px 10px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	background: var(--Basic-Grey);
	color: var(--Basic-Dark);
	&--10 {
		background: var(--Status-Created);
	}
	&--15 {
		background: var(--Status-Sent);
	}
	&--20 {
		background: var(--Status-Viewed);
	}
	&--30 {
		background: var(--Status-Signed);
	}
	&--40,
	&--123 {
		background: var(--Status-Canceled);
	}
}
</style>
