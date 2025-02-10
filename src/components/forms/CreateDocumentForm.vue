<script setup>
const props = defineProps({
	currentStep: {
		type: Number,
		required: true,
	},
	selectedFileURL: {
		type: String,
		default: null,
	},
})
defineEmits(['update:currentStep', 'update:selectedFileURL'])

const selectedUsers = ref([])
const selectedServices = ref([])
const currentPrice = ref(0)
const selectedBank = ref('')
const selectedFiles = ref([])

const sberAuth = ref(false)

const isLaterDocuments = ref(false)
const bufferLaterForm = ref({
	date: new Date(),
	time: '',
})
const laterForm = ref({
	date: '',
	time: '',
})

const isOpenSelectDate = ref(false)
const closeSelectDate = () => {
	isOpenSelectDate.value = false
	bufferLaterForm.value.time = ''
	bufferLaterForm.value.date = new Date()
	if (laterForm.value.time === '' && laterForm.value.date === '') isLaterDocuments.value = false
}
const selectDate = () => {
	isOpenSelectDate.value = false
	laterForm.value.date = bufferLaterForm.value.date
	laterForm.value.time = bufferLaterForm.value.time
}
const formatDate = (rawDate) => {
	const date = new Date(rawDate)
	const day = date.getDate().toString().padStart(2, '0')
	const month = `${date.getMonth() + 1}`.padStart(2, '0')
	const year = date.getFullYear()
	return `${day}.${month}.${year}`
}

watch(selectedFiles, () => {
	console.log(selectedFiles.value)
})
watch(isLaterDocuments, () => {
	if (laterForm.value.time === '' && laterForm.value.date === '' && isLaterDocuments.value) {
		isOpenSelectDate.value = true
	}
})
</script>

<template>
	<div class="document-add" v-if="currentStep === 1">
		<SelectUsers v-model="selectedUsers" />
		<hr />
		<div class="document-add__group">
			<div :class="`document-add-switch ${sberAuth ? 'document-add-switch--active' : ''}`">
				<BaseIcon
					size="14"
					class="document-add-switch__icon"
					name="sber-color"
					save-color
				></BaseIcon>
				<BaseText class="document-add-switch__text" variant="small-main">
					Запросить авторизацию клиента/сотрудника через Сбер ID
				</BaseText>
				<BaseSwitch class="document-add-switch__switch" v-model="sberAuth"></BaseSwitch>
			</div>
			<div class="document-add__footer">
				<BaseButton
					class="document-add__next-button"
					@click="$emit('update:currentStep', currentStep + 1)"
				>
					Дальше <BaseIcon name="arrow-right" />
				</BaseButton>
			</div>
			<div class="document-add-ssl">
				<BaseIcon size="24" name="ssl"></BaseIcon>
				<BaseText class="document-add-ssl__text" variant="small-main">
					Защищено сертификатом SSL
				</BaseText>
			</div>
		</div>
	</div>
	<div class="document-add" v-else-if="currentStep === 2">
		<SelectServices
			v-model="selectedServices"
			v-model:selectedBank="selectedBank"
			v-model:currentPrice="currentPrice"
		/>
		<hr />
		<div class="document-add__group">
			<div class="document-add__footer">
				<BaseButton
					class="document-add__prev-button"
					@click="$emit('update:currentStep', currentStep - 1)"
				>
					<BaseIcon name="arrow-right" /> Назад
				</BaseButton>
				<BaseButton
					class="document-add__next-button"
					@click="$emit('update:currentStep', currentStep + 1)"
				>
					Дальше <BaseIcon name="arrow-right" />
				</BaseButton>
			</div>
			<div class="document-add-ssl">
				<BaseIcon size="24" name="ssl"></BaseIcon>
				<BaseText class="document-add-ssl__text" variant="small-main"
					>Защищено сертификатом SSL</BaseText
				>
			</div>
		</div>
	</div>
	<div class="document-add" v-else-if="currentStep === 3">
		<SelectFiles
			v-model:selectedFiles="selectedFiles"
			@selectedFileURL="$emit('update:selectedFileURL', $event)"
		/>
		<hr />
		<div class="document-add__group">
			<div class="document-add__footer">
				<BaseButton
					class="document-add__prev-button"
					@click="$emit('update:currentStep', currentStep - 1)"
				>
					<BaseIcon name="arrow-right" /> Назад
				</BaseButton>
				<BaseButton
					class="document-add__next-button"
					@click="$emit('update:currentStep', currentStep + 1)"
				>
					Дальше <BaseIcon name="arrow-right" />
				</BaseButton>
			</div>
			<div class="document-add-ssl">
				<BaseIcon size="24" name="ssl"></BaseIcon>
				<BaseText class="document-add-ssl__text" variant="small-main"
					>Защищено сертификатом SSL</BaseText
				>
			</div>
		</div>
	</div>
	<div class="document-add" v-else-if="currentStep === 4">
		<div class="document-add__small-group">
			<BaseText variant="small-main">Подписанты</BaseText>
			<SelectedUserDocument
				:info="{
					company_name:
						'ООО “Водоочистные системы непрерывного цикла водоочистки” системы непрерывного цикла водоочистки”',
				}"
				is-company
			/>
			<SelectedUserDocument v-for="user in selectedUsers" :key="user.id" :info="user" />
		</div>
		<hr />
		<div class="document-add__small-group">
			<BaseText variant="small-main">Документы</BaseText>
			<AttachedDocument
				v-for="file in selectedFiles"
				:key="file.id"
				:info="file.file"
			></AttachedDocument>
			<!-- <SelectedServiceDocument v-for="service in selectedServices" :key="user.id" :info="service" /> -->
		</div>
		<hr />
		<div class="document-add__group">
			<div class="document-add__small-group">
				<BaseText variant="small-main">Оплата</BaseText>
				<SelectedServiceDocument
					v-for="service in selectedServices"
					:key="service.id"
					:info="service"
				/>
			</div>
			<BaseText class="document-add__total">
				Итого через {{ selectedBank }}:
				<BaseText variant="heading">{{ currentPrice }} руб</BaseText>
			</BaseText>
		</div>
		<hr />

		<div class="document-add__group">
			<div class="document-add-later">
				<BaseText variant="small-main" class="document-add-later__text">
					<BaseSwitch v-model="isLaterDocuments" />Отправить позже
				</BaseText>
				<BaseText
					class="document-add-later__date"
					@click="isOpenSelectDate = true"
					v-if="isLaterDocuments"
				>
					{{ formatDate(laterForm.date) }} {{ laterForm.time }}
				</BaseText>
			</div>
			<BaseCheckbox>
				Подтверждаю, что получено согласие на обработку и передачу персональных данных клиента
			</BaseCheckbox>
		</div>
		<div class="document-add__group">
			<BaseInfoBlock>
				При отправке будет списано документов: 1 <br />
				Срок жизни ссылки для подписания документов - 14 дней
			</BaseInfoBlock>
			<div class="document-add__footer document-add__footer--last">
				<BaseButton
					:padding="{ x: '0' }"
					class="document-add__prev-button"
					@click="$emit('update:currentStep', currentStep - 1)"
				>
					<BaseIcon name="arrow-right" /> Назад
				</BaseButton>
				<BaseButton
					:padding="{ x: '0' }"
					variant="outlined"
					class="document-add__draft-button"
					@click="$emit('update:currentStep', currentStep + 1)"
				>
					Сохранить черновик
				</BaseButton>
				<BaseButton
					class="document-add__next-button"
					:padding="{ x: '0' }"
					@click="$emit('update:currentStep', currentStep + 1)"
				>
					Подписать и отправить <BaseIcon name="arrow-right" />
				</BaseButton>
			</div>
			<div class="document-add-ssl">
				<BaseIcon size="24" name="ssl"></BaseIcon>
				<BaseText class="document-add-ssl__text" variant="small-main"
					>Защищено сертификатом SSL</BaseText
				>
			</div>
		</div>
	</div>

	<div class="document-add-calendar" v-if="isOpenSelectDate">
		<div class="document-add-calendar__inner">
			<button class="document-add-calendar__close" @click="closeSelectDate">
				<BaseIcon name="close-modal" />
			</button>
			<BaseDatepicker
				v-model="bufferLaterForm.date"
				class="document-add-calendar__datepicker"
				single
			/>
			<BaseInput
				v-model="bufferLaterForm.time"
				class="document-add-calendar__time"
				placeholder="Время"
				mask="##:##"
			/>
			<BaseButton class="document-add-calendar__button" @click="selectDate"
				>Отправить позже</BaseButton
			>
		</div>
	</div>
</template>

<style scoped lang="scss">
.document-add-calendar {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.2);

	&__close {
		z-index: 1;
		position: absolute;
		right: 100%;
		top: 24px;
		background: var(--Basic-Grey);
		border-radius: 4px 0px 0px 4px;
		padding: 8px;
		display: flex;
		align-items: center;
		transition: 0.3s ease;
		justify-content: center;
		svg {
			width: 16px;
			height: 16px;
			color: var(--Basic-Background);
		}
	}
	&__inner {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 4px;
		background: #fff;
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	&__time {
		margin-top: 4px;
	}
}
.document-add-later {
	display: flex;
	gap: 12px;
	flex-direction: column;
	&__date {
		cursor: pointer;
		text-decoration: underline;
	}
	&__text {
		display: flex;
		align-items: center;
		gap: 12px;
		color: var(--Basic-Grey);
	}
}
.document-add-ssl {
	display: flex;
	align-items: center;
	gap: 12px;
	color: var(--Basic-Grey);
}
.document-add-switch {
	border: 1px solid var(--Basic-Grey);
	display: flex;
	padding: 8px 24px 8px 16px;
	align-items: center;
	gap: 12px;
	border-radius: 4px;
	&__text {
		color: var(--Basic-Grey);
		transition: 0.3s ease;
	}
	&__switch {
		margin-left: auto;
	}
	&:not(.document-add-switch--active) {
		.document-add-switch {
			&__icon {
				:deep(path) {
					fill: var(--Basic-Grey) !important;
				}
			}
		}
	}
	&--active {
		.document-add-switch {
			&__text {
				color: var(--Basic-Dark);
			}
		}
	}
}
.document-add {
	display: flex;
	flex-direction: column;
	max-width: 484px;
	width: 100%;
	gap: 32px;
	width: 484px;
	&__total {
		display: flex;
		align-items: center;
		gap: 24px;
	}
	&__small-group {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	&__footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		&--last {
			.document-add {
				&__prev-button {
					white-space: nowrap;
					width: 100%;
					max-width: 96px;
				}
				&__draft-button {
					white-space: nowrap;
					width: 100%;
					max-width: 165px;
				}
				&__next-button {
					white-space: nowrap;
					width: 100%;
					max-width: 199px;
				}
			}
		}
	}
	&__prev-button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		.icon {
			transform: scaleX(-1);
		}
	}
	&__next-button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}
	&__group {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	&__row {
		display: flex;
		gap: 24px;
	}
	hr {
		margin-left: -52px;
		max-width: calc(100% + 104px);
		width: calc(100% + 104px);
		border: 0;
		height: 1px;
		background: #fff;
	}
}
</style>
