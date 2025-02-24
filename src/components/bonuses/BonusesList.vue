<script setup>
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
					<th>Дата и время</th>
					<th>Сумма</th>
					<th>Контрагент</th>
					<th>Операция</th>
					<th>Статус</th>
				</tr>
			</template>
			<template #body>
				<tr v-for="item in items">
					<td>{{ item.date }}</td>
					<td>{{ item.price }}</td>
					<td>{{ item.company }}</td>
					<td>{{ item.operation }}</td>
					<td><StatusTag :status="item.status" /></td>
				</tr>
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
	width: 100%;
	padding: 0;
	flex-direction: column;
	align-items: flex-start;
	td:first-child,
	th:first-child {
		padding-left: 24px;
	}
}
</style>
