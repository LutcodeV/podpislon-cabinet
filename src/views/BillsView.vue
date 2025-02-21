<script setup>
import AddBillButton from '@/components/bills/AddBillButton.vue'

const bills = ref([{}])
</script>

<template>
	<PageHeader title="СЧЕТ И АКТЫ">
		<AddBillButton class="bills-header__button" />
	</PageHeader>
	<BillsList class="bills" :items="bills" />
</template>

<style scoped lang="scss">
:deep(.bills-header__button) {
	margin-left: auto;
}
.bills {
	margin-top: 24px;
	flex: 1 1 0;
}
</style>
