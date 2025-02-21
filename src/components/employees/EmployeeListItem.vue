<script setup>
import BaseColumn from '../global/BaseColumn.vue'
import BaseRow from '../global/BaseRow.vue'
import StatusTag from '../global/StatusTag.vue'

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
const modalState = ref('info')

const infoEdit = ref({
	first_name: info?.fio?.split(' ')[1],
	last_name: info?.fio?.split(' ')[0],
	surnamge: info?.fio?.split(' ')[2],
	departament: info.departament,
	phone: info.phone,
	email: info.email,
})

const code = ref('')
const codeSended = ref(false)

const isCreateAgreementVisible = ref(false)
const agreements = ref([])
const newAgreement = ref({
	id: '',
	company: '',
	date: '',
	file: '',
})
const createAgreement = () => {
	agreements.value.push({ ...newAgreement.value, edit: false })
	newAgreement.value = {
		id: '',
		company: '',
		date: '',
		file: '',
	}
	isCreateAgreementVisible.value = false
}
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
			<BaseRow align="center" gap="12px">
				<div class="employee-item__avatar">
					<img :src="info.avatar" alt="" v-if="info.avatar" />
					<svg
						v-else
						width="20"
						height="22"
						viewBox="0 0 20 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M10 0.25C7.102 0.25 4.75 2.602 4.75 5.5C4.75 8.398 7.102 10.75 10 10.75C12.898 10.75 15.25 8.398 15.25 5.5C15.25 2.602 12.898 0.25 10 0.25ZM10 1.75C12.07 1.75 13.75 3.43 13.75 5.5C13.75 7.57 12.07 9.25 10 9.25C7.93 9.25 6.25 7.57 6.25 5.5C6.25 3.43 7.93 1.75 10 1.75ZM1.75 21C1.75 16.447 5.447 12.75 10 12.75C14.553 12.75 18.25 16.447 18.25 21V21.75H19.75V21C19.75 15.619 15.381 11.25 10 11.25C4.619 11.25 0.25 15.619 0.25 21V21.75H1.75V21Z"
							fill="#A7A7A7"
						/>
					</svg>
				</div>
				<BaseText>{{ info.fio }}</BaseText>
			</BaseRow>
		</td>
		<td>
			<BaseText>{{ info.departament }}</BaseText>
		</td>
		<td>
			<BaseText>{{ info.phone }}</BaseText>
		</td>
		<td>
			<BaseText>{{ info.email }}</BaseText>
		</td>
		<td>
			<BaseText><StatusTag :status="info.status" /></BaseText>
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
		<RightSlideModalContainer class="info-modal">
			<BaseColumn gap="42px" v-if="modalState === 'info'">
				<BaseColumn>
					<BaseColumn gap="8px">
						<BaseText variant="heading" uppercase>{{ info.fio }}</BaseText>
						<BaseColumn gap="10px">
							<BaseText>{{ info.departament }}</BaseText>
							<BaseText variant="small-main" color="var(--Basic-Grey)">{{ info.id }}</BaseText>
						</BaseColumn>
					</BaseColumn>
					<BaseCard
						class="info-modal__card"
						:tag="BaseRow"
						justify="space-between"
						align="center"
						wFill
					>
						<BaseColumn gap="16px">
							<BaseColumn gap="6px">
								<BaseText variant="small-main" color="var(--Basic-Grey)">Телефон</BaseText>
								<BaseText>{{ info.phone ? info.phone : '-' }}</BaseText>
							</BaseColumn>
							<BaseColumn gap="6px">
								<BaseText variant="small-main" color="var(--Basic-Grey)">E-mail</BaseText>
								<BaseText>{{ info.email ? info.email : '-' }}</BaseText>
							</BaseColumn>
							<BaseColumn gap="6px">
								<BaseText variant="small-main" color="var(--Basic-Grey)">Права доступа</BaseText>
								<BaseText color="var(--Basic-Grey)">Полные права</BaseText>
							</BaseColumn>
						</BaseColumn>
						<BaseColumn class="info-modal__avatar-column" gap="8px">
							<div class="info-modal__avatar">
								<img :src="info.avatar" alt="" v-if="info.avatar" />
								<svg
									v-else
									width="57"
									height="63"
									viewBox="0 0 57 63"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M28.5 0.59375C20.1682 0.59375 13.4062 7.35575 13.4062 15.6875C13.4062 24.0193 20.1682 30.7812 28.5 30.7812C36.8317 30.7812 43.5938 24.0193 43.5938 15.6875C43.5938 7.35575 36.8317 0.59375 28.5 0.59375ZM28.5 4.90625C34.4512 4.90625 39.2812 9.73625 39.2812 15.6875C39.2812 21.6388 34.4512 26.4688 28.5 26.4688C22.5487 26.4688 17.7188 21.6388 17.7188 15.6875C17.7188 9.73625 22.5487 4.90625 28.5 4.90625ZM4.78125 60.25C4.78125 47.1601 15.4101 36.5312 28.5 36.5312C41.5899 36.5312 52.2188 47.1601 52.2188 60.25V62.4062H56.5312V60.25C56.5312 44.7796 43.9704 32.2188 28.5 32.2188C13.0296 32.2188 0.46875 44.7796 0.46875 60.25V62.4062H4.78125V60.25Z"
										fill="#A7A7A7"
									/>
								</svg>
							</div>
						</BaseColumn>
						<button class="info-modal__edit" @click="modalState = 'userInfoEdit'">
							<BaseIcon name="edit" />
						</button>
					</BaseCard>
				</BaseColumn>
				<BaseColumn>
					<BaseText variant="heading" uppercase>доверенности</BaseText>
					<BaseCard
						v-for="agreement in agreements"
						:padding="{ x: '16px', y: '12px' }"
						:tag="BaseColumn"
						gap="8px"
					>
						<BaseColumn v-if="!agreement.edit">
							<BaseRow wFill justify="space-between">
								<BaseText>{{ agreement.id }}</BaseText>
								<BaseText>{{ agreement.date }}</BaseText>
							</BaseRow>
							<BaseRow wFill gap="16px">
								<BaseIcon v-if="agreement.file" name="icon-document" />
								<BaseText v-if="agreement.file">
									{{ agreement?.file?.name }}
								</BaseText>
								<BaseIcon
									class="info-modal__trash"
									name="edit"
									@click="agreement.edit = !agreement.edit"
								/>
							</BaseRow>
						</BaseColumn>
						<BaseColumn v-else>
							<BaseColumn gap="12px">
								<BaseInput wFill placeholder="Компания" v-model="agreement.company" />
								<BaseInput wFill placeholder="Срок действия" v-model="agreement.date" />
								<BaseInput wFill placeholder="Номер доверености" v-model="agreement.id" />
							</BaseColumn>
							<BaseRow wFill v-if="agreement.file">
								<BaseIcon name="icon-document" />
								<BaseText>
									{{ agreement.file.name }}
								</BaseText>
								<BaseIcon class="info-modal__trash" name="trash" @click="agreement.file = null" />
							</BaseRow>
							<BaseRow v-else>
								<label>
									<BaseText variant="small-main" color="var(--Basic-Grey)" underline>
										Загрузить фаил
									</BaseText>
									<input hidden type="file" @input="agreement.file = $event.target.files[0]" />
								</label>
							</BaseRow>
							<BaseRow wFill justify="space-between">
								<BaseButton variant="outlined" @click="agreement.edit = !agreement.edit">
									Сохранить
								</BaseButton>
								<BaseButton color="grey" variant="outlined" @click="agreement.edit = false">
									Отменить
								</BaseButton>
							</BaseRow>
						</BaseColumn>
					</BaseCard>
					<BaseCard v-if="isCreateAgreementVisible" :tag="BaseColumn" gap="16px" isDashed>
						<BaseColumn gap="12px">
							<BaseInput wFill placeholder="Компания" v-model="newAgreement.company" />
							<BaseInput wFill placeholder="Срок действия" v-model="newAgreement.date" />
							<BaseInput wFill placeholder="Номер доверености" v-model="newAgreement.id" />
						</BaseColumn>
						<BaseRow wFill v-if="newAgreement.file">
							<BaseIcon name="icon-document" />
							<BaseText>
								{{ newAgreement.file.name }}
							</BaseText>
							<BaseIcon class="info-modal__trash" name="trash" @click="newAgreement.file = null" />
						</BaseRow>
						<BaseRow v-else>
							<label>
								<BaseText variant="small-main" color="var(--Basic-Grey)" underline>
									Загрузить фаил
								</BaseText>
								<input hidden type="file" @input="newAgreement.file = $event.target.files[0]" />
							</label>
						</BaseRow>
						<BaseRow wFill justify="space-between">
							<BaseButton variant="outlined" @click="createAgreement">Сохранить</BaseButton>
							<BaseButton color="grey" variant="outlined" @click="isCreateAgreementVisible = false">
								Отменить
							</BaseButton>
						</BaseRow>
					</BaseCard>
					<BaseCard
						:tag="BaseRow"
						:padding="{
							y: '12px',
							x: 0,
						}"
						align="center"
						justify="center"
						wFill
						@click="isCreateAgreementVisible = true"
						isCentered
						isDashed
						v-else
					>
						<BaseText variant="small-main" color="var(--Basic-Grey)">
							+ Добавить новою довереность
						</BaseText>
					</BaseCard>
				</BaseColumn>
			</BaseColumn>
			<BaseColumn v-else-if="modalState === 'userInfoEdit'">
				<BaseText variant="heading" uppercase>редактирование данных сотрудника</BaseText>
				<BaseCard :tag="BaseColumn">
					<BaseColumn class="info-modal__avatar-column" gap="8px">
						<div class="info-modal__avatar">
							<img :src="info.avatar" alt="" v-if="info.avatar" />
							<svg
								v-else
								width="57"
								height="63"
								viewBox="0 0 57 63"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M28.5 0.59375C20.1682 0.59375 13.4062 7.35575 13.4062 15.6875C13.4062 24.0193 20.1682 30.7812 28.5 30.7812C36.8317 30.7812 43.5938 24.0193 43.5938 15.6875C43.5938 7.35575 36.8317 0.59375 28.5 0.59375ZM28.5 4.90625C34.4512 4.90625 39.2812 9.73625 39.2812 15.6875C39.2812 21.6388 34.4512 26.4688 28.5 26.4688C22.5487 26.4688 17.7188 21.6388 17.7188 15.6875C17.7188 9.73625 22.5487 4.90625 28.5 4.90625ZM4.78125 60.25C4.78125 47.1601 15.4101 36.5312 28.5 36.5312C41.5899 36.5312 52.2188 47.1601 52.2188 60.25V62.4062H56.5312V60.25C56.5312 44.7796 43.9704 32.2188 28.5 32.2188C13.0296 32.2188 0.46875 44.7796 0.46875 60.25V62.4062H4.78125V60.25Z"
									fill="#A7A7A7"
								/>
							</svg>
						</div>
						<BaseText variant="small-main" color="var(--Basic-Grey)">Загрузить фото</BaseText>
					</BaseColumn>
					<BaseColumn gap="12px">
						<BaseInput wFill v-model="infoEdit.first_name" placeholder="Имя" />
						<BaseInput wFill v-model="infoEdit.last_name" placeholder="Фамилия" />
						<BaseInput wFill v-model="infoEdit.surnamge" placeholder="Отчество" />
						<BaseInput wFill v-model="infoEdit.departament" placeholder="Должность" />
						<BaseInput wFill v-model="infoEdit.phone" placeholder="Телефон" />
						<BaseInput wFill v-model="infoEdit.email" placeholder="E-mail" />
						<BaseButton
							@click="codeSended = true"
							v-if="infoEdit.email !== info.email && !codeSended"
							wFill
							variant="outlined"
						>
							Отправить код подтверждения на почту
						</BaseButton>
						<BaseColumn gap="6px" v-if="codeSended">
							<BaseText variant="small-main">Код подтверждения был отправлен вам на почту</BaseText>
							<BaseInput wFill v-model="code" placeholder="Код подтверждения" />
							<BaseText variant="small-main" color="var(--Basic-Grey)">
								Отправить код повторно через 2:43
							</BaseText>
						</BaseColumn>
					</BaseColumn>
					<BaseButton
						:disabled="infoEdit.email !== info.email && code !== '000000'"
						@click="modalState = 'info'"
					>
						Сохранить
					</BaseButton>
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
