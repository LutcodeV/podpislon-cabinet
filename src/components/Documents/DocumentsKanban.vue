<script setup>
const props = defineProps({
	documents: {
		type: Array,
		required: true,
	},
	isPending: {
		type: Boolean,
		default: false,
	},
})
const KANBAN_STATUSES = {
	10: 'Черновик',
	15: 'Отправлен',
	20: 'Просмотрен',
	30: 'Подписан',
	40: 'Аннулирован',
}
</script>

<template>
	<div class="documents-kanban">
		<div class="documents-kanban__row">
			<div class="documents-kanban__col" v-for="[key, value] in Object.entries(KANBAN_STATUSES)">
				<p class="documents-kanban__title" :class="`documents-kanban__title--${key}`">
					{{ value }}
				</p>
				<document-kanban-item
					v-for="document in documents.filter((doc) => doc.status == key)"
					:info="document"
				/>
			</div>
		</div>
		<BasePreloader v-if="isPending" />
		<BaseNothing v-else-if="documents.length === 0" />
	</div>
</template>

<style scoped lang="scss">
.documents-kanban {
	@extend .b-card;
	display: flex;
	flex-direction: column;
	gap: 24px;
	align-items: flex-start;
	&__row {
		display: flex;
		align-items: flex-start;
		width: 100%;
		gap: 24px;
	}
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
		&--10 {
			background-color: var(--Status-Created);
		}
		&--15 {
			background-color: var(--Status-Sent);
		}
		&--20 {
			background-color: var(--Status-Viewed);
		}
		&--30 {
			background-color: var(--Status-Signed);
		}
		&--40 {
			background-color: var(--Status-Canceled);
		}
	}
}
</style>
