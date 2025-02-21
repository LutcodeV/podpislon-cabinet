<script setup>
import BillListItem from './BillListItem.vue'

const props = defineProps({
	items: {
		type: Array,
		required: true,
	},
	isPending: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<div class="documents-list">
		<BaseTable>
			<template #head>
				<tr>
					<th></th>
					<th>
						Дата создания
						<BaseIcon name="chevron-down" />
					</th>
					<th>Наименование</th>
					<th>Статус</th>
					<th>Тип</th>
					<th>Счет</th>
					<th>Акт / Чек</th>
				</tr>
			</template>
			<template #body>
				<BillListItem v-for="item in items" :info="item" />
			</template>
		</BaseTable>
		<BasePreloader v-if="isPending" />
		<BaseNothing v-else-if="items.length === 0" />
	</div>
</template>

<style scoped lang="scss">
.documents-list {
	@extend .b-card;
	display: flex;
	padding: 0;
	flex-direction: column;
	align-items: flex-start;
}
</style>
