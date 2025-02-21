<script setup>
import ClientListItem from './ClientListItem.vue'

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
					<th>ФИО</th>
					<th>Телефон</th>
				</tr>
			</template>
			<template #body>
				<ClientListItem v-for="item in items" :info="item" />
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
