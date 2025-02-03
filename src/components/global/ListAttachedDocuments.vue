<script setup>
import BaseCheckbox from './BaseCheckbox.vue'

const strongOrder = ref(false)
</script>

<template>
	<div class="list">
		<div class="list__wrapper">
			<slot :strongOrder="strongOrder"></slot>
		</div>
		<BaseCheckbox class="list-checkbox" v-model="strongOrder">
			<div class="list-checkbox__row">
				Строгий порядок подписания документов
				<QuestTooltip />
			</div>
		</BaseCheckbox>
	</div>
</template>

<style scoped lang="scss">
.list-checkbox {
	align-items: center;
	gap: 12px;
	&__row {
		display: flex;
		gap: 24px;
		align-items: center;
	}
}
.list {
	display: flex;
	flex-direction: column;
	gap: 24px;
	&__wrapper {
		display: flex;
		flex-direction: column;
		overflow: auto;
		gap: 12px;
	}
}
</style>
