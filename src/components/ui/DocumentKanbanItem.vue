<script setup>
defineProps({
	info: {
		type: Object,
		required: true,
	},
})
</script>

<template>
	<div class="document">
		<p class="document__title">{{ info.title }}</p>
		<p class="document__users">
			{{ info.users.length > 1 ? `${info.users[0]} +${info.users.length - 1}` : info.users[0] }}
		</p>
		<p class="document__date">{{ info.date }}</p>
	</div>
</template>

<style scoped lang="scss">
.document {
	display: flex;
	flex-direction: column;
	gap: 12px;
	background: var(--Basic-Background);
	border-radius: 4px;
	padding: 16px;
	&__title {
		@extend .f-main-text;
	}
	&__users {
		@extend .f-main-text;
	}
	&__date {
		@extend .f-signatures;
		color: var(--Basic-Grey);
	}
}
</style>
