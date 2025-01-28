<script setup>
defineProps({
	signatory: {
		type: Object,
		required: true,
	},
})
</script>

<template>
	<div :class="`signatory signatory--${signatory.type}`">
		<div class="signatory__column">
			<div class="signatory__header">
				<BaseIcon
					:name="signatory.type === 'company' ? 'case' : 'profile'"
					class="signatory__icon"
				/>
				<p class="signatory__title">{{ signatory.title }}</p>
			</div>
			<div class="signatory__body">
				<StatusTag :status="signatory.status" />
				<p class="signatory__date">{{ signatory.date }}</p>
			</div>
		</div>
		<OptionsList class="signatory__options" v-if="signatory.status === 15">
			<button>Скачать</button>
			<button>Запросить аннулирование</button>
			<button>Удалить</button>
		</OptionsList>
	</div>
</template>

<style scoped lang="scss">
.signatory {
	@extend .b-card;
	padding: 12px 16px;
	position: relative;
	&__column {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	&__options {
		position: absolute;
		display: flex;
		right: 16px;
		top: 12px;
	}
	&__header {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	&__body {
		display: flex;
		gap: 12px;
		align-items: center;
	}
	&__icon {
		width: 16px;
		height: 16px;
		min-width: 16px;
		min-height: 16px;
		max-width: 16px;
		max-height: 16px;
	}
	&__title {
		@extend .f-main-text;
	}
	&__date {
		@extend .f-signatures;
		color: var(--Basic-Grey);
	}
	&--person {
		.signatory__icon {
			color: var(--Basic-Branded);
		}
	}
}
</style>
