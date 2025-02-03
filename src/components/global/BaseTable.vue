<script setup></script>

<template>
	<table class="documents-table">
		<thead>
			<slot name="head"></slot>
		</thead>
		<tbody>
			<slot name="body"></slot>
		</tbody>
	</table>
	<BasePagination />
</template>

<style scoped lang="scss">
.documents-table {
	border-collapse: collapse;
	width: 100%;
	:deep(th) {
		@extend .f-main-text;
		color: var(--Basic-Grey);
		padding: 12px 0;
		text-align: left;
		:deep(svg) {
			margin-left: 8px;
		}
	}
}
</style>
