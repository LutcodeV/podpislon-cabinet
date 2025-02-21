<script setup></script>

<template>
	<BaseText variant="small-main" class="info-block">
		<slot />
	</BaseText>
</template>

<style scoped lang="scss">
.info-block {
	color: #ab8648;
	background: rgba(247, 153, 0, 0.2);
	border-radius: 4px;
	padding: 12px 16px;
	text-align: center;
	:deep(a) {
		font: inherit !important;
		color: inherit !important;
		text-decoration: underline !important;
	}
}
</style>
