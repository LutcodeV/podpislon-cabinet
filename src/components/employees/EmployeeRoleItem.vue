<script setup>
import BaseColumn from '../global/BaseColumn.vue'
import BaseRow from '../global/BaseRow.vue'
import BaseSwitch from '../global/BaseSwitch.vue'
import BaseText from '../global/BaseText.vue'

const { info } = defineProps({
	info: {
		type: Object,
		required: true,
	},
})

const ACTIONS = [
	{
		label: 'Отправить документ',
		callback: () => {
			console.log(1)
		},
	},
	{
		label: 'Редактировать',
		callback: () => {
			console.log(1)
		},
	},
	{
		label: 'Удалить',
		callback: () => {
			console.log(1)
		},
	},
]

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
	<tr class="employee-item" @click="isModalUserVisible = true">
		<td>
			<BaseRow gap="16px" align="center">
				<BaseTooltipActions :actions="ACTIONS" />
			</BaseRow>
		</td>
		<td>
			<BaseText>{{ info.date }}</BaseText>
		</td>
		<td>
			<BaseText>{{ info.name }}</BaseText>
		</td>
		<td>
			<BaseText>{{ info.employees }}</BaseText>
		</td>
	</tr>

	<RightSlideModal
		:isVisible="isModalUserVisible"
		@close="
			() => {
				isModalUserVisible = false
				modalState = 'info'
			}
		"
	>
		<RightSlideModalContainer title="Редактирование роли" class="info-modal">
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
	max-width: 540px;
	width: 100%;
	&__trash {
		cursor: pointer;
		margin-left: auto;
		color: var(--Basic-Grey);
	}
	&__avatar {
		background: var(--Basic-Background);
		border-radius: 50%;
		width: 100px;
		height: 100px;
		display: flex;
		overflow: hidden;
		margin: auto 0;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		svg {
			margin: auto auto 0;
		}
	}
	&__avatar-column {
		width: auto;
		align-items: center;
		justify-content: center;
	}
	&__card {
		position: relative;
	}
	&__edit {
		position: absolute;
		top: 14px;
		color: var(--Basic-Grey);
		right: 14px;
	}
}

.employee-item {
	& > * {
		@extend .f-small-main;
		padding: 12px 0;
		border-top: 1px solid var(--Basic-Background);
		box-sizing: content-box;
		padding-right: 16px;
		transition: 0.3s ease;
		&:first-child {
			padding-left: 24px;
			max-width: 14px;
			width: 14px;
		}
		&:last-child {
			padding-right: 32px;
		}
	}
	&__avatar {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		overflow: hidden;
		background: var(--Basic-Background);
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	&:hover > * {
		background: var(--Basic-Background);
	}
	&__title {
		cursor: pointer;
		transition: 0.3s ease;
		@include hover {
			color: var(--Basic-Branded);
		}
	}
	&__status {
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: flex-start;
	}
}
</style>
