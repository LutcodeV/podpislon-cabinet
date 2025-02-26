<script setup>
import BaseColumn from '../global/BaseColumn.vue'
import BaseInput from '../global/BaseInput.vue'
import BaseTooltipActions from '../global/BaseTooltipActions.vue'

defineProps({
	info: {
		type: Object,
		required: true,
	},
})

const ACTIONS = [
	{
		label: 'Редактировать сотрудника',
		callback: () => {},
	},
	{
		label: 'Удалить сотрудника',
		callback: () => {},
	},
]

const isVisible = ref(false)
const closeModal = () => {
	isVisible.value = false
}
</script>

<template>
	<BaseCard class="employee-structure-card" :padding="{ x: '14px', y: '14px' }">
		<BaseRow class="employee-structure-card__container" gap="15px">
			<BaseColumn gap="14px">
				<BaseText variant="menu">{{ info.name }}</BaseText>
				<BaseColumn v-if="info.supervisor" gap="4px">
					<BaseText variant="small-main" color="var(--Basic-Grey)">Руководитель</BaseText>
					<BaseRow gap="12px" align="center">
						<img :src="info.supervisor.avatar" alt="" />
						<BaseText>{{ info.supervisor.name }}</BaseText>
					</BaseRow>
				</BaseColumn>
				<BaseColumn gap="4px">
					<BaseText variant="small-main" color="var(--Basic-Grey)">Подчиненные</BaseText>
					<DocumentUsers :info="info" />
				</BaseColumn>
			</BaseColumn>
			<BaseTooltipActions :actions="ACTIONS" />
		</BaseRow>
		<button class="employee-structure-card__button" @click="isVisible = true"></button>
		<RightSlideModal :isVisible="isVisible" @close="closeModal">
			<RightSlideModalContainer class="employee-structure-modal" title="Добавление отдела">
				<BaseCard :tag="BaseColumn">
					<BaseColumn gap="12px">
						<BaseInput wFill placeholder="Вышестоящий отдел" />
						<BaseInput wFill placeholder="Название отдела" />
						<BaseInput wFill placeholder="Руководитель" />
						<BaseInput wFill placeholder="Сотрудники отдела" />
					</BaseColumn>
					<BaseButton>Сохранить</BaseButton>
				</BaseCard>
			</RightSlideModalContainer>
		</RightSlideModal>
	</BaseCard>
</template>

<style scoped lang="scss">
.employee-structure-modal {
	max-width: 540px;
	width: 100%;
}
.employee-structure-card {
	position: relative;
	width: 282px;
	min-width: 282px;
	max-width: 282px;
	&__container {
		padding: 14px;
		border-radius: 4px;
		border: 1px solid var(--Basic-Grey);
	}
	&__button {
		position: absolute;
		top: calc(100% + 6px);
		left: 50%;
		transform: translateX(-50%);
		width: 25px;
		border-radius: 50%;
		height: 25px;
		min-height: 25px;
		transition: 0.3s ease;
		min-width: 25px;
		z-index: 2;
		background: var(--Basic-Grey);
		&::before,
		&::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 13px;
			height: 1px;
			background: #fff;
		}
		&::after {
			transform: translate(-50%, -50%) rotate(-90deg);
		}
		&:hover {
			background: var(--Basic-Branded);
		}
	}
	&:has(+ .employees-structure__row) {
		&::before {
			content: '';
			position: absolute;
			top: 100%;
			left: 50%;
			transform: translateX(-50%);
			background: var(--Basic-Grey);
			width: 1px;
			height: 50px;
		}
	}
	& + :deep(.employees-structure__row) {
		position: relative;
		&::after {
			content: '';
			position: absolute;
			bottom: calc(100% + 20px);
			left: 50%;
			transform: translateX(-50%);
			background: var(--Basic-Grey);
			width: calc(100% - 282px);
			height: 1px;
		}
	}
	.employees-structure__row & {
		&::after {
			content: '';
			position: absolute;
			bottom: 100%;
			left: 50%;
			transform: translateX(-50%);
			background: var(--Basic-Grey);
			width: 1px;
			height: 20px;
		}
	}
}
</style>
