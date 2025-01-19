<script setup>
const props = defineProps({
	documents: {
		type: Array,
		required: true,
	},
})
const documents = ref(props.documents)
const KANBAN_STATUSES = {
	draft: 'Черновик',
	sent: 'Отправлен',
	viewed: 'Просмотрен',
	signed: 'Подписан',
	canceled: 'Аннулирован',
}
</script>

<template>
	<div class="documents-kanban">
		<div class="documents-kanban__col" v-for="[key, value] in Object.entries(KANBAN_STATUSES)">
			<p class="documents-kanban__title" :class="`documents-kanban__title--${key}`">{{ value }}</p>
			<document-kanban-item
				v-for="document in documents.filter((doc) => doc.status === key)"
				:info="document"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
.documents-kanban {
	@extend .b-card;
	display: flex;
	gap: 24px;
	&__col {
		display: flex;
		flex-direction: column;
		gap: 12px;
		flex: 1 1 0;
	}
	&__title {
		@extend .f-main-text;
		padding: 8px 16px;
		border-radius: 4px;
		&--draft {
			background-color: var(--Status-Created);
		}
		&--sent {
			background-color: var(--Status-Sent);
		}
		&--viewed {
			background-color: var(--Status-Viewed);
		}
		&--signed {
			background-color: var(--Status-Signed);
		}
		&--canceled {
			background-color: var(--Status-Canceled);
		}
	}
}
</style>
