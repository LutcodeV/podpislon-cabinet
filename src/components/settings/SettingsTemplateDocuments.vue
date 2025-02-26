<script setup>
import BaseColumn from '../global/BaseColumn.vue'
import BaseRow from '../global/BaseRow.vue'
import QuestTooltip from '../global/QuestTooltip.vue'
import SettingsTemplatesDocumentList from './SettingsTemplatesDocumentList.vue'
const DOCUMENTS = [{}, {}]

const state = ref(0)

const TEMPLATES = {
	Общие: ['lorem', 'ipsum'],
	Юристы: ['ipsum'],
	Транспорт: ['lorem', 'ipsum'],
	Техника: ['lorem', 'ipsum'],
	Кухни: [],
	Туризм: ['lorem', 'ipsum'],
	Недвижимость: ['ipsum'],
	Образование: ['lorem', 'ipsum'],
	'На перспективу': ['lorem'],
}
const currentTab = ref('Общие')
const tags = [
	'Общие',
	'Юристы',
	'Транспорт',
	'Техника',
	'Кухни',
	'Туризм',
	'Недвижимость',
	'Образование',
	'На перспективу',
]
const NAME_TAGS = [
	{
		title: 'Номер по порядку',
		value: '{num}',
	},
	{
		title: 'Текущая дата',
		value: '{date}',
	},
	{
		title: 'День',
		value: '{day}',
	},
	{
		title: 'Месяц',
		value: '{month}',
	},
	{
		title: '2 цифры года 24',
		value: '{year}',
	},
	{
		title: '4 цифры года 2024',
		value: '{year4}',
	},
]
const variables = [
	{
		title: 'Дата',
		value: '${date}',
	},
	{
		title: 'Нумератор',
		value: '${num}',
	},
	{
		title: 'Фамилия',
		value: '${contact.lastname}',
	},
	{
		title: 'Имя',
		value: '${contact.firstname}',
	},
	{
		title: 'Отчество',
		value: '${contact.secondname}',
	},
	{
		title: 'Телефон',
		value: '${contact.phone}',
	},
	{
		title: 'Пользовательское поле',
		value: '${contact.phone}',
	},
]

const copy = (token) => {
	navigator.clipboard.writeText(token)
}
const form = ref({
	name: '',
	index: '',
	document_name: '',
	file: null,
})
</script>

<template>
	<RightSlideModalContainer :class="`settings-template settings-template--${state}`">
		<BaseColumn gap="18px" wFill class="settings-template__content" v-if="state === 0">
			<BaseRow wFill align="center">
				<BaseText class="settings-template__title" variant="heading" uppercase>
					Шаблоны документов
				</BaseText>
				<button class="settings-template__add" @click="state = 2">
					<svg
						width="13"
						height="14"
						viewBox="0 0 13 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect y="0.5" width="13" height="13" rx="2" fill="white" />
						<rect x="6" y="3.5" width="1" height="7" rx="0.5" fill="#F79900" />
						<rect
							x="10"
							y="6.5"
							width="1"
							height="7"
							rx="0.5"
							transform="rotate(90 10 6.5)"
							fill="#F79900"
						/>
					</svg>
					Добавить шаблон
				</button>
				<button class="settings-template__info" @click="state = 1">
					<svg
						width="22"
						height="22"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11 0C4.92061 0 0 4.91975 0 11C0 17.0794 4.91975 22 11 22C17.0794 22 22 17.0802 22 11C22 4.92061 17.0802 0 11 0ZM11 20.2812C5.87043 20.2812 1.71875 16.13 1.71875 11C1.71875 5.87043 5.86996 1.71875 11 1.71875C16.1296 1.71875 20.2812 5.86996 20.2812 11C20.2812 16.1296 16.13 20.2812 11 20.2812ZM13.5494 16.0703C13.5494 16.545 13.1647 16.9297 12.69 16.9297H9.30995C8.83528 16.9297 8.45058 16.545 8.45058 16.0703C8.45058 15.5956 8.83528 15.2109 9.30995 15.2109H10.1406V10.1693H9.30995C8.83528 10.1693 8.45058 9.78463 8.45058 9.30995C8.45058 8.83528 8.83528 8.45058 9.30995 8.45058H11C11.4747 8.45058 11.8594 8.83528 11.8594 9.30995V15.2109H12.69C13.1647 15.2109 13.5494 15.5956 13.5494 16.0703ZM9.92578 5.31386C9.92578 4.7205 10.4066 4.23964 11 4.23964C11.5934 4.23964 12.0742 4.7205 12.0742 5.31386C12.0742 5.90704 11.5934 6.38808 11 6.38808C10.4066 6.38808 9.92578 5.90704 9.92578 5.31386Z"
							fill="#A7A7A7"
						/>
					</svg>
				</button>
			</BaseRow>
			<SettingsTemplatesDocumentList class="settings-template__documents" :documents="DOCUMENTS" />
		</BaseColumn>
		<BaseColumn v-else-if="state === 1" gap="52px">
			<BaseColumn>
				<BaseText variant="heading" uppercase>переменные для шаблонов</BaseText>
				<table class="settings-template-info__table">
					<thead>
						<tr>
							<th>
								<BaseText color="var(--Basic-Grey)">Название</BaseText>
							</th>
							<th>
								<BaseText color="var(--Basic-Grey)">Символьный код</BaseText>
							</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="variable in variables">
							<td>
								<BaseText>{{ variable.title }}</BaseText>
							</td>
							<td>
								<BaseRow gap="12px" align="center">
									<BaseText>{{ variable.value }}</BaseText>
									<QuestTooltip></QuestTooltip>
								</BaseRow>
							</td>
							<td>
								<BaseIcon
									@click="copy(variable.value)"
									class="settings-template-info__copy"
									name="icon-copy"
								></BaseIcon>
							</td>
						</tr>
					</tbody>
				</table>
			</BaseColumn>
			<BaseColumn>
				<BaseColumn gap="12px" class="settings-template-info__templates">
					<BaseColumn gap="6px">
						<BaseText variant="heading" uppercase>Шаблоны документов</BaseText>
						<BaseText variant="small-main" color="var(--Basic-Grey)">
							Выберите шаблон под ваш бизнес
						</BaseText>
					</BaseColumn>
					<BaseRow gap="12px" wrap>
						<BaseText
							:class="`settings-template-info__tag ${currentTab === tag ? 'settings-template-info__tag--active' : ''}`"
							@click="currentTab = tag"
							v-for="tag in tags"
						>
							{{ tag }}
						</BaseText>
					</BaseRow>
				</BaseColumn>
				<BaseRow gap="24px 12px" wrap>
					<BaseRow
						v-for="template in TEMPLATES[currentTab]"
						gap="12px"
						class="settings-template-info__template"
						align="center"
					>
						<img
							src="/assets/img/word-icon.png"
							alt=""
							class="settings-template-info__template-icon"
						/>
						<BaseText variant="small-main" underline>{{ template }}</BaseText>
					</BaseRow>
				</BaseRow>
			</BaseColumn>
		</BaseColumn>
		<BaseColumn v-else-if="state === 2" gap="24px" wFill>
			<BaseText variant="heading" uppercase>Добавление шаблона</BaseText>
			<BaseCard wFill :tag="BaseColumn">
				<BaseColumn wFill gap="12px">
					<BaseCard
						v-if="form.file"
						:tag="BaseRow"
						:padding="{ x: '16px', y: '12px' }"
						gap="12px"
						wFill
					>
						<BaseIcon name="icon-document" />
						<BaseText style="width: 100%" variant="small-main">{{ form?.file?.name }}</BaseText>
						<BaseIcon @click="form.file = null" name="icon-trash" />
					</BaseCard>
					<label class="settings-template-form__label" v-else>
						<input
							type="file"
							@input="form.file = $event.target.files[0]"
							class="settings-template-form__input-file"
						/>
						<BaseCard
							:tag="BaseRow"
							:padding="{
								y: '12px',
								x: 0,
							}"
							align="center"
							justify="center"
							isCentered
							isDashed
							wFill
						>
							<BaseText variant="small-main" color="var(--Basic-Grey)">+ Добавить шаблон</BaseText>
						</BaseCard>
					</label>
					<BaseRow wFill justify="space-between" align="center">
						<BaseText underline variant="signatures" color="var(--Basic-Grey)">
							Скачать шаблон
						</BaseText>
						<BaseCheckbox class="settings-template-form__checkbox">Активен</BaseCheckbox>
					</BaseRow>
				</BaseColumn>
				<BaseInput wFill placeholder="Название шаблона" v-model="form.name" />
				<BaseInput wFill placeholder="Начинать порядковый номер с" v-model="form.index" />
				<BaseCard
					class="settings-template-form__card"
					:padding="{ x: '16px', y: '16px' }"
					wFill
					:tag="BaseColumn"
					gap="12px"
				>
					<BaseText>Формат номера документа</BaseText>
					<BaseText variant="small-main">
						Используйте переменные для формирования номера документа.
					</BaseText>
					<BaseColumn gap="10px">
						<BaseInput
							centered
							class="settings-template-form__input"
							wFill
							v-model="form.document_name"
						/>
						<BaseRow gap="12px" wrap>
							<BaseText
								:class="`settings-template-info__tag ${form.document_name.indexOf(tag.value) !== -1 ? 'settings-template-info__tag--active' : ''}`"
								@click="
									form.document_name =
										form.document_name.indexOf(tag.value) === -1
											? form.document_name + tag.value
											: form.document_name.replace(tag.value, '')
								"
								v-for="tag in NAME_TAGS"
							>
								{{ tag.title }}
							</BaseText>
						</BaseRow>
					</BaseColumn>
				</BaseCard>
				<BaseButton :disabled="form.name === ''">Сохранить</BaseButton>
			</BaseCard>
		</BaseColumn>
	</RightSlideModalContainer>
</template>

<style scoped lang="scss">
.settings-template-form {
	&__checkbox {
		align-items: center !important;
	}
	&__card {
		background: #f6f6f6;
	}
	&__input {
		border: 0;
		background: white;
	}
	&__label {
		position: relative;
		width: 100%;
	}
	&__input-file {
		left: 0;
		z-index: 1;
		cursor: pointer;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		position: absolute;
	}
}
.settings-template-info {
	&__table {
		border-radius: 4px;
		background: #fff;
		box-shadow: -4px 4px 9.9px 0px rgba(0, 0, 0, 0.06);
		tr {
			td,
			th {
				padding: 12px 0;
				text-align: left;
				padding-left: 24px;
				&:first-child {
					max-width: 151px;
				}
				&:last-child {
					padding-right: 24px;
				}
			}
			&:not(:last-child) {
				td,
				th {
					border-bottom: 1px solid #f6f6f6;
				}
			}
		}
	}
	&__copy {
		color: var(--Basic-Grey);
		cursor: pointer;
	}
	&__templates {
		max-width: 414px;
	}
	&__tag {
		cursor: pointer;
		padding: 5px 9px;
		border-radius: 4px;
		background: #ffcd77;
		transition: 0.3s ease;
		color: #fff;
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: 106%; /* 12.72px */
		&--active {
			background: #f79900;
		}
	}
}
.settings-template {
	max-width: 867px;
	width: 100%;
	display: flex;
	flex-direction: column;
	&__documents {
		flex: 1 1 0;
		width: 100%;
	}
	&__add {
		padding: 6px 20px;
		background: var(--Basic-Branded);
		color: #fff;
		font-size: 14px;
		font-weight: 600;
		margin-left: auto;
		display: flex;
		align-items: center;
		gap: 12px;
		border-radius: 4px;
	}
	&__info {
		border-radius: 4px;
		background: #fff;
		padding: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: -4px 4px 9.9px 0px rgba(0, 0, 0, 0.06);
	}
	&__content {
		flex: 1 1 0;
		height: 100%;
	}
	&--1,
	&--2 {
		max-width: 540px;
	}
}
</style>
