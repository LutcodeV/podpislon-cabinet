<script setup></script>

<template>
	<div class="preloader">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</div>
</template>

<style scoped lang="scss">
.preloader {
	--duration: 1s;
	display: flex;
	gap: 7px;
	align-items: center;
	justify-content: center;
	span {
		display: block;
		width: 3px;
		border-radius: 2px;
		background: var(--Basic-Background);
		&:nth-child(1),
		&:nth-child(5) {
			height: 18px;
		}
		&:nth-child(2),
		&:nth-child(4) {
			height: 26px;
		}
		&:nth-child(3) {
			height: 36px;
		}
		&:nth-child(1) {
			animation: preloader-1 var(--duration) infinite;
		}
		&:nth-child(2) {
			animation: preloader-2 var(--duration) infinite;
		}
		&:nth-child(3) {
			animation: preloader-3 var(--duration) infinite;
		}
		&:nth-child(4) {
			animation: preloader-4 var(--duration) infinite;
		}
		&:nth-child(5) {
			animation: preloader-5 var(--duration) infinite;
		}
	}
}

@keyframes preloader-1 {
	0%,
	56% {
		background: var(--Basic-Background);
	}
	8%,
	48% {
		background: var(--Basic-Grey);
	}
}
@keyframes preloader-2 {
	8%,
	64% {
		background: var(--Basic-Background);
	}
	16%,
	56% {
		background: var(--Basic-Grey);
	}
}
@keyframes preloader-3 {
	16%,
	72% {
		background: var(--Basic-Background);
	}
	24%,
	64% {
		background: var(--Basic-Grey);
	}
}
@keyframes preloader-4 {
	24%,
	80% {
		background: var(--Basic-Background);
	}
	32%,
	72% {
		background: var(--Basic-Grey);
	}
}
@keyframes preloader-5 {
	32%,
	88% {
		background: var(--Basic-Background);
	}
	40%,
	80% {
		background: var(--Basic-Grey);
	}
}
</style>
