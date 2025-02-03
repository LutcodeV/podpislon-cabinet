<script setup>
import DocumentListItem from './DocumentListItem.vue'
import DocumentUsers from './DocumentUsers.vue'
import StatusTag from './StatusTag.vue'

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
	<div class="documents-list">
		<table class="documents-table">
			<thead>
				<tr>
					<th></th>
					<th>Дата создания <BaseIcon name="chevron-down" /></th>
					<th>Документы</th>
					<th>Статус</th>
					<th>Оплата</th>
					<th>Подписанты</th>
				</tr>
			</thead>
			<tbody>
				<DocumentListItem v-for="document in documents" :info="document" />
			</tbody>
		</table>
		<div class="documents-pagination">
			<p class="documents-pagination__text">Показано 1 - 30 из 7391</p>
			<div class="documents-pagination__buttons">
				<button class="documents-pagination__arrow">
					<BaseIcon name="arrow-pagination-left" />
				</button>
				<div class="documents-pagination__list">
					<button class="documents-pagination__button">1</button>
					<button class="documents-pagination__button documents-pagination__button--active">
						2
					</button>
					<button class="documents-pagination__button">3</button>
					<button class="documents-pagination__button">...</button>
					<button class="documents-pagination__button">10</button>
				</div>
				<button class="documents-pagination__arrow">
					<BaseIcon name="arrow-pagination-right" />
				</button>
			</div>
		</div>
		<div class="documents-list__preloader" v-if="isPending">
			<PreloaderElement />
		</div>
		<div class="documents-list__nothing" v-else-if="documents.length === 0">
			<base-icon name="not-founded-icon" />
			<p>Здесь пока ничего нет</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
.documents-pagination {
	display: flex;
	align-items: center;
	gap: 100px;
	padding-left: 24px;
	margin-top: auto;
	margin-bottom: 24px;
	&__text {
		@extend .f-signatures;
		color: var(--Basic-Grey);
	}
	&__buttons {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	&__list {
		display: flex;
	}
	&__button {
		@extend .f-small-main;
		width: 18px;
		height: 18px;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.3s ease;
		&--active {
			color: #fff;
			background: var(--Basic-Branded);
		}
	}
}
.documents-table {
	border-collapse: collapse;
	width: 100%;
	th {
		@extend .f-main-text;
		color: var(--Basic-Grey);
		padding: 12px 0;
		text-align: left;
		:deep(svg) {
			margin-left: 8px;
		}
	}
}
.documents-list {
	@extend .b-card;
	display: flex;
	padding: 0;
	flex-direction: column;
	align-items: flex-start;
	&__preloader {
		margin: auto;
	}
	&__nothing {
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: 12px;
		align-items: center;
		justify-content: center;
		color: var(--Basic-Grey);
		p {
			@extend .f-menu;
		}
	}
}
</style>
