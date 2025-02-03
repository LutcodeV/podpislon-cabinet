<script setup></script>

<template>
	<div class="documents-pagination">
		<p class="documents-pagination__text">Показано 1 - 30 из 7391</p>
		<div class="documents-pagination__buttons">
			<button class="documents-pagination__arrow">
				<BaseIcon name="arrow-pagination-left" />
			</button>
			<div class="documents-pagination__list">
				<button class="documents-pagination__button">1</button>
				<button class="documents-pagination__button documents-pagination__button--active">2</button>
				<button class="documents-pagination__button">3</button>
				<button class="documents-pagination__button">...</button>
				<button class="documents-pagination__button">10</button>
			</div>
			<button class="documents-pagination__arrow">
				<BaseIcon name="arrow-pagination-right" />
			</button>
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
</style>
