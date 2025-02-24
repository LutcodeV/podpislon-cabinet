<script setup>
import { ref } from 'vue'
import RightSlideModal from '../global/RightSlideModal.vue'
import BaseColumn from '../global/BaseColumn.vue'
import BaseText from '../global/BaseText.vue'

const isModalUserVisible = ref(false)

const LIST_DEPARTAMENTS = [
	'Департамент 1',
	'Департамент 2',
	'Департамент 3',
	'Департамент 4',
	'Департамент 5',
	'Департамент 6',
]
const LIST_EMPLOYEES = [
	'Иванов Иван Иванович',
	'Петров Петр Петрович',
	'Сидоров Сидор Сидорович',
	'Смирнов Смирн Смирнович',
	'Кузнецов Кузнец Кузнецович',
	'Кузнецов Кузнец Кузнецович',
]

const form = ref({
	name: '',
	employees: '',
	departament: '',
})
</script>

<template>
	<button :class="`button ${$attrs.class}`" @click="isModalUserVisible = true">
		<span class="button__plus" />
		Добавить роль
	</button>

	<RightSlideModal
		:isVisible="isModalUserVisible"
		@close="
			() => {
				isModalUserVisible = false
				modalState = 'info'
			}
		"
	>
		<RightSlideModalContainer title="Добавить роли" class="info-modal">
			<BaseColumn>
				<BaseCard class="info-modal__card" :tag="BaseColumn" wFill>
					<BaseColumn gap="12px" wFill>
						<BaseInput placeholder="Название" v-model="form.name" wFill />
						<BaseSelect
							placeholder="Отделы"
							wFill
							v-model="form.departament"
							:list="LIST_DEPARTAMENTS"
						/>
						<BaseSelect
							placeholder="Сотрудники"
							wFill
							v-model="form.employees"
							:list="LIST_EMPLOYEES"
						/>
					</BaseColumn>
					<BaseColumn gap="12px">
						<BaseRow gap="12px" align="center" wFill justify="space-between">
							<BaseText variant="menu">Документы</BaseText>
							<BaseIcon class="info-modal__trash" name="thin-chevron-down"></BaseIcon>
						</BaseRow>
						<BaseColumn gap="12px" wFill>
							<BaseRow gap="12px" justify="space-between" align="center" wFill>
								<BaseRow :tag="BaseText" gap="16px" align="center">
									Подписание документов
									<QuestTooltip />
								</BaseRow>
								<BaseSwitch />
							</BaseRow>
							<BaseRow gap="12px" justify="space-between" align="center" wFill>
								<BaseRow :tag="BaseText" gap="16px" align="center">
									Просмотр всех документов
									<QuestTooltip />
								</BaseRow>
								<BaseSwitch />
							</BaseRow>
							<BaseRow gap="12px" justify="space-between" align="center" wFill>
								<BaseRow :tag="BaseText" gap="16px" align="center">
									Добавление документов
									<QuestTooltip />
								</BaseRow>
								<BaseSwitch />
							</BaseRow>
						</BaseColumn>
					</BaseColumn>
					<BaseColumn gap="12px">
						<BaseRow gap="12px" align="center" wFill justify="space-between">
							<BaseText variant="menu">Клиенты</BaseText>
							<BaseIcon class="info-modal__trash" name="thin-chevron-down"></BaseIcon>
						</BaseRow>
						<BaseColumn gap="12px" wFill>
							<BaseRow gap="12px" justify="space-between" align="center" wFill>
								<BaseRow :tag="BaseText" gap="16px" align="center">
									Добавление клиентов
									<QuestTooltip />
								</BaseRow>
								<BaseSwitch />
							</BaseRow>
							<BaseRow gap="12px" justify="space-between" align="center" wFill>
								<BaseRow :tag="BaseText" gap="16px" align="center">
									Редактирование клиентов
									<QuestTooltip />
								</BaseRow>
								<BaseSwitch />
							</BaseRow>
							<BaseRow gap="12px" justify="space-between" align="center" wFill>
								<BaseRow :tag="BaseText" gap="16px" align="center">
									Верификация клиентов
									<QuestTooltip />
								</BaseRow>
								<BaseSwitch />
							</BaseRow>
						</BaseColumn>
					</BaseColumn>
					<BaseButton>Сохранить</BaseButton>
				</BaseCard>
			</BaseColumn>
		</RightSlideModalContainer>
	</RightSlideModal>
</template>

<style scoped lang="scss">
.info-modal {
	width: 100%;
	max-width: 540px;
	&__button {
		width: 148px;
		height: 44px;
	}
}
.button {
	@extend .f-main-text;
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
