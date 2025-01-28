<script setup>
defineProps({
	data: {
		type: Array,
		required: true,
	},
})
const statuses = {
	10: 'Черновик',
	15: 'Отправлен',
	20: 'Просмотрен',
	30: 'Подписан',
	40: 'Аннулирован',
}
</script>

<template>
	<div class="history">
		<div :class="`history-item history-item--${item.status}`" v-for="item in data">
			<p class="history-item__status">{{ item.date }} {{ statuses[item.status] }}</p>
			<p class="history-item__user">{{ item.user }}</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
.history-item {
	padding-left: 21px;
	display: flex;
	flex-direction: column;
	gap: 6px;
	position: relative;
	&__status {
		@extend .f-small-main;
	}
	&__user {
		@extend .f-small-main;
		color: var(--Basic-Grey);
	}
	&::before {
		content: '';
		width: 9px;
		height: 9px;
		border-radius: 50%;
		position: absolute;
		left: 0;
		top: 0;
		background: var(--Basic-Grey);
	}
	&:not(:last-child)::after {
		content: '';
		position: absolute;
		top: 0px;
		left: 4px;
		width: 0;
		height: calc(100% + 24px);
		border-right: 1px dashed var(--Basic-Grey);
	}
}
.history {
	display: flex;
	flex-direction: column;
	position: relative;
	gap: 24px;
}
</style>
