<script setup>
import ClientListItem from './EmployeeListItem.vue'

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
					<th>Дата добавления</th>
					<th>Название</th>
					<th>Сотрудники/отделы</th>
				</tr>
			</template>
			<template #body>
				<EmployeeRoleItem v-for="item in items" :info="item" />
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
