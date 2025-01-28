<script setup></script>

<template>
	<button class="button">
		<span class="button__plus" />
		Добавить документ
	</button>
</template>

<style scoped lang="scss">
.button {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 5px 12px;
	background: var(--Basic-Branded);
	border-radius: 4px;
	color: #fff;
	transition: 0.3s ease;
	&__plus {
		width: 13px;
		height: 13px;
		border-radius: 2px;
		background: #fff;
		position: relative;
		&::before,
		&::after {
			width: 7px;
			height: 1px;
			transform: translate(-50%, -50%);
			background: var(--Basic-Branded);
			content: '';
			position: absolute;
			left: 50%;
			top: 50%;
			border-radius: 1px;
		}
		&::before {
			transform: translate(-50%, -50%) rotate(90deg);
		}
	}
	&:hover {
		background: #f9ac2e;
	}
	&:active {
		background: #ea950c;
	}
}
</style>
