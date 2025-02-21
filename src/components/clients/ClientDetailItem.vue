<script setup>
const props = defineProps({
	id: { type: String, required: true },
	companyName: { type: String, required: true },
	status: { type: String, required: false, default: '' },
	date: { type: String, required: true },
	amount: { type: Number, required: false, default: null },
})
</script>

<template>
	<BaseCard class="client-detail-item">
		<BaseText variant="small-main">{{ companyName }}</BaseText>
		<BaseRow gap="12px">
			<StatusTag v-if="status" :status="status" />
			<BaseText variant="signatures" color="var(--Basic-Grey)">{{ date }}</BaseText>
			<BaseText class="client-detail-item__amount" variant="small-main" v-if="amount">
				{{ amount }} руб.
			</BaseText>
		</BaseRow>
	</BaseCard>
</template>

<style lang="scss" scoped>
.client-detail-item {
	padding: 12px 14px !important;
	display: flex;
	flex-direction: column;
	gap: 10px;
	&__amount {
		margin-left: auto;
	}
}
</style>
