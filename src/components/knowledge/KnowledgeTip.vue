<script setup>
defineProps({
	info: {
		type: Object,
		required: true,
	},
})

const ICONS = {
	error: 'knowledge-tip-icon-01',
	success: 'knowledge-tip-icon-02',
}
</script>

<template>
	<BaseRow align="center" :class="`knowledge-tip knowledge-tip--${info.type}`">
		<BaseIcon save-color :name="ICONS[info.type]" />
		<BaseText variant="small-main" color="var(--Basic-Dark)">{{ info.message }}</BaseText>
	</BaseRow>
</template>

<style scoped lang="scss">
.knowledge-tip {
	padding: 18px 40px 18px 24px;
	border-radius: 4px;
	&--error {
		background: #ff7a7c;
	}
	&--success {
		background: var(--Status-Signed);
	}
}
</style>
