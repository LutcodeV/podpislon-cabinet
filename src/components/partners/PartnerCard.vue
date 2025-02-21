<script setup>
import BaseColumn from '../global/BaseColumn.vue'

defineProps({
	info: {
		type: Object,
		required: true,
	},
})
</script>

<template>
	<BaseCard class="partner-card" align="center" :tag="BaseColumn">
		<img :src="`/assets/img/${info.logo}`" alt="" class="partner-card__logo" />
		<BaseText variant="small-main" isCentered>{{ info.description }}</BaseText>
		<BaseColumn align="center" gap="12px">
			<BaseText variant="heading">{{ info.duration }}</BaseText>
			<BaseText variant="small-main" color="var(--Basic-Grey)">{{ info.tariff }}</BaseText>
			<BaseText variant="heading">{{ info.price }}</BaseText>
		</BaseColumn>
		<BaseButton>{{ info.buttonText }}</BaseButton>
	</BaseCard>
</template>

<style scoped lang="scss">
.partner-card {
	max-width: 314px;
	flex: 1 1 0;
	min-width: 250px;
	&__logo {
		max-width: 160px;
	}
}
</style>
