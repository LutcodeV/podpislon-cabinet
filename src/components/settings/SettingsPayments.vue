<script setup>
import BaseSwitch from '../global/BaseSwitch.vue'
import QuestTooltip from '../global/QuestTooltip.vue'

const currentPaymentSystems = ref([])

const currentState = ref('list')
const bankList = ref(['Т-банк', 'Robokassa', 'Ю-kassa', 'Сбербанк'])
const form = ref({
	bank: '',
	name: '',
	secret: '',
	url: '',
	terminal: '',
	password: '',
	password_2: '',
	system: '',
	nds: '',
	method: '',
	sign: '',
})

const NALOG_SYSTEMS = ['Без НДС', 'НДС 10%', 'НДС 18%', 'НДС 20%']
const LIST_NDS = ['Без НДС', 'НДС 10%', 'НДС 18%', 'НДС 20%']
const METHODS_CALCULATION = ['Сумма', 'Доля', 'Процент']
const SIGN_CALCULATION = ['Сумма', 'Доля', 'Процент']
const trestingFields = ref(false)
const TOKEN = ref('23423_рнв_832_823ьад')
const copyHandler = (token) => {
	navigator.clipboard.writeText(token)
}

const addPaymentSystem = () => {
	currentPaymentSystems.value.push(form.value)
	form.value = {
		bank: '',
		name: '',
		secret: '',
		url: '',
		terminal: '',
		password: '',
		password_2: '',
		system: '',
		nds: '',
		method: '',
		sign: '',
	}
	currentState.value = 'list'
}
const deletePaymentSystem = (index) => {
	currentPaymentSystems.value.splice(index, 1)
}
</script>

<template>
	<RightSlideModalContainer
		class="settings-payment-system"
		:title="currentState === 'list' ? 'Платежные системы' : 'Добавление платежной системы'"
	>
		<template #header-additional>
			<button
				v-if="currentState === 'list'"
				:class="`button-add ${$attrs.class}`"
				@click="currentState = 'create'"
			>
				<span class="button-add__plus" />
				Подключить
			</button>
		</template>
		<BaseColumn hFill wFill v-if="currentState === 'list'">
			<hr class="b-modal-divider" />
			<BaseColumn
				v-if="currentPaymentSystems.length === 0"
				gap="12px"
				hFill
				wFill
				align="center"
				justify="center"
				class="settings-payment-systems__empty"
			>
				<svg
					width="63"
					height="63"
					viewBox="0 0 63 63"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M53.9266 47.5522C53.7582 47.3583 53.5198 47.2392 53.2637 47.2211C53.0075 47.2029 52.7547 47.2872 52.5606 47.4553L51.0978 48.7244L50.1291 47.5813C53.4837 44.3117 55.4655 39.8862 55.6707 35.2063C55.8759 30.5264 54.289 25.9444 51.2335 22.3938C49.5354 20.415 47.4306 18.8256 45.0625 17.7341V3.40627C45.0625 3.14934 44.9604 2.90293 44.7788 2.72126C44.5971 2.53958 44.3507 2.43752 44.0938 2.43752H11.1563C11.0288 2.43678 10.9024 2.46122 10.7844 2.50943C10.6663 2.55763 10.559 2.62867 10.4685 2.71845L2.71845 10.4685C2.62867 10.559 2.55763 10.6663 2.50943 10.7844C2.46122 10.9024 2.43678 11.0288 2.43752 11.1563V59.5938C2.43752 59.8507 2.53958 60.0971 2.72126 60.2788C2.90293 60.4604 3.14934 60.5625 3.40627 60.5625H44.0938C44.3507 60.5625 44.5971 60.4604 44.7788 60.2788C44.9604 60.0971 45.0625 59.8507 45.0625 59.5938V51.0978C46.3485 50.4924 47.5609 49.7416 48.676 48.86L49.6447 49.9935L48.1819 51.2528C47.988 51.4212 47.8689 51.6596 47.8507 51.9157C47.8326 52.1719 47.9168 52.4247 48.085 52.6188L53.7813 59.216C54.0919 59.6629 54.4932 60.0394 54.9591 60.3209C55.425 60.6024 55.9449 60.7826 56.485 60.8497C57.0252 60.9169 57.5734 60.8695 58.094 60.7106C58.6146 60.5518 59.0959 60.2851 59.5066 59.9278C59.9172 59.5705 60.248 59.1308 60.4773 58.6372C60.7067 58.1435 60.8295 57.6071 60.8377 57.0629C60.8459 56.5187 60.7394 55.9788 60.5251 55.4785C60.3107 54.9781 59.9934 54.5286 59.5938 54.1591L53.9266 47.5522ZM49.7513 23.6435C52.2083 26.4891 53.6176 30.0897 53.7453 33.8471C53.8729 37.6045 52.7111 41.2925 50.4529 44.2983C48.1947 47.3041 44.976 49.4468 41.3317 50.3703C37.6873 51.2939 33.8366 50.9427 30.4194 49.3752C27.0022 47.8077 24.2242 45.1181 22.547 41.7534C20.8698 38.3887 20.3942 34.5514 21.1994 30.8791C22.0046 27.2067 24.0421 23.9204 26.9733 21.5662C29.9045 19.2119 33.5529 17.9315 37.3125 17.9375C39.6737 17.9413 42.0065 18.4528 44.1526 19.4373C46.2988 20.4218 48.2082 21.8563 49.7513 23.6435ZM10.1875 5.74095V10.1875H5.74095L10.1875 5.74095ZM43.125 58.625H4.37502V12.125H11.1563C11.4132 12.125 11.6596 12.023 11.8413 11.8413C12.023 11.6596 12.125 11.4132 12.125 11.1563V4.37502H43.125V16.9688C40.5295 16.1053 37.7742 15.8312 35.0595 16.1663C32.3447 16.5015 29.7388 17.4375 27.4313 18.9063H10.1875V20.8438H24.8835C24.2263 21.4437 23.6144 22.0913 23.0525 22.7813H10.1875V24.7188H21.6478C21.2892 25.3461 20.9658 25.9929 20.6791 26.6563H10.1875V28.5938H19.875C19.6623 29.2286 19.4876 29.8756 19.3519 30.5313H10.1875V32.4688H19.0225C18.9497 33.1121 18.9109 33.7588 18.9063 34.4063H10.1875V36.3438H19.0031C19.0693 36.9944 19.1696 37.6411 19.3035 38.2813H10.1875V40.2188H19.875C20.1006 40.8772 20.3593 41.5239 20.65 42.1563H10.1875V44.0938H21.6769C22.0946 44.7677 22.554 45.4148 23.0525 46.0313H10.1875V47.9688H24.8641C25.6543 48.6888 26.5069 49.3372 27.4119 49.9063H10.1875V51.8438H31.4419C33.3342 52.4793 35.3164 52.8064 37.3125 52.8125C39.2896 52.805 41.2524 52.4779 43.125 51.8438V58.625ZM57.976 58.1503C57.5861 58.4831 57.0831 58.6531 56.5713 58.625C56.3169 58.6064 56.0688 58.5378 55.841 58.4231C55.6133 58.3084 55.4104 58.1499 55.2441 57.9566L50.1775 52.086L53.0838 49.5575L58.1503 55.37C58.3244 55.5633 58.4577 55.7896 58.5424 56.0355C58.6272 56.2814 58.6615 56.5418 58.6434 56.8013C58.6253 57.0607 58.5552 57.3139 58.4372 57.5457C58.3192 57.7774 58.1557 57.9831 57.9566 58.1503H57.976Z"
						fill="#A7A7A7"
					/>
					<path
						d="M36.4792 22.2869L24.8542 41.6619C24.767 41.809 24.7203 41.9765 24.7188 42.1475C24.7173 42.3185 24.7611 42.4868 24.8457 42.6354C24.9303 42.784 25.0528 42.9075 25.2006 42.9935C25.3484 43.0794 25.5163 43.1247 25.6873 43.1247H39.2498V41.1872H27.402L37.3123 24.6603L47.2226 41.1872H45.0623V43.1247H48.9373C49.1083 43.1247 49.2763 43.0794 49.4241 42.9935C49.5719 42.9075 49.6943 42.784 49.779 42.6354C49.8636 42.4868 49.9074 42.3185 49.9059 42.1475C49.9044 41.9765 49.8577 41.809 49.7705 41.6619L38.1455 22.2869C38.0597 22.1423 37.9378 22.0226 37.7917 21.9394C37.6456 21.8562 37.4804 21.8125 37.3123 21.8125C37.1442 21.8125 36.979 21.8562 36.833 21.9394C36.6869 22.0226 36.565 22.1423 36.4792 22.2869Z"
						fill="#A7A7A7"
					/>
					<path
						d="M36.3438 27.625H38.2813V35.375H36.3438V27.625ZM36.3438 37.3125H38.2813V39.25H36.3438V37.3125ZM41.1876 41.1875H43.1251V43.125H41.1876V41.1875ZM6.32227 18.9062H8.25977V20.8438H6.32227V18.9062ZM6.32227 22.7812H8.25977V24.7188H6.32227V22.7812ZM6.32227 26.6562H8.25977V28.5938H6.32227V26.6562ZM6.32227 30.5312H8.25977V32.4688H6.32227V30.5312ZM6.32227 34.4062H8.25977V36.3438H6.32227V34.4062ZM6.32227 38.2812H8.25977V40.2188H6.32227V38.2812ZM6.32227 42.1562H8.25977V44.0938H6.32227V42.1562ZM6.32227 46.0312H8.25977V47.9688H6.32227V46.0312ZM6.32227 49.9062H8.25977V51.8438H6.32227V49.9062Z"
						fill="#A7A7A7"
					/>
				</svg>
				<BaseText isCentered variant="menu" color="var(--Basic-Grey)">
					Не подключена ни одна
					<br />
					платежная система
				</BaseText>
			</BaseColumn>
			<BaseColumn v-else>
				<SelectedPaymentSystem
					v-for="item in currentPaymentSystems"
					editable
					:info="item"
					:key="item.id"
					@delete="deletePaymentSystem(item)"
				>
					<template #edit="{ close }">
						<BaseColumn gap="24px" v-if="item.bank !== ''" wFill>
							<BaseInput placeholder="Название" wFill v-model="item.name" />
							<BaseColumn wFill gap="12px" v-if="item.bank === 'Т-банк'">
								<BaseInput placeholder="Терминал" wFill v-model="item.terminal" />
								<BaseInput placeholder="Пароль" wFill v-model="item.password" />
							</BaseColumn>
							<BaseColumn wFill gap="12px" v-if="item.bank === 'Robokassa'">
								<BaseInput placeholder="Идентификатор магазина" wFill v-model="item.terminal" />
								<BaseInput placeholder="Пароль" wFill v-model="item.password" />
								<BaseInput placeholder="Пароль 2" wFill v-model="item.password_2" />
							</BaseColumn>
							<BaseColumn wFill gap="12px" v-if="item.bank === 'Ю-kassa'">
								<BaseInput placeholder="Идентификатор магазина" wFill v-model="item.terminal" />
								<BaseInput placeholder="Секретный ключ" wFill v-model="item.secret" />
								<BaseInput placeholder="URL для уведомлений" wFill v-model="item.url" />
							</BaseColumn>
							<BaseColumn wFill gap="12px" v-if="item.bank === 'Сбербанк'">
								<BaseInput placeholder="Токен" wFill v-model="item.token" />
							</BaseColumn>
							<BaseRow
								tag="label"
								gap="16px"
								v-if="item.bank === 'Robokassa' || item.bank === 'Сбербанк'"
							>
								<BaseSwitch v-model="trestingFields" />
								<BaseText>Тестовый режим</BaseText>
								<QuestTooltip />
							</BaseRow>
							<BaseColumn v-if="trestingFields && item.bank === 'Robokassa'" wFill gap="12px">
								<BaseInput wFill placeholder="Result URL" lockInput v-model="TOKEN">
									<template #postfix>
										<button class="settings-integration__copy" @click="copyHandler(TOKEN)">
											<svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M13.2861 1.08008H4.84908C4.4165 1.08114 4.00202 1.25379 3.69661 1.56014C3.39119 1.86649 3.21981 2.2815 3.22008 2.71408V3.21958H2.70908C2.27628 3.22077 1.86165 3.39367 1.55622 3.70031C1.2508 4.00696 1.07955 4.42228 1.08008 4.85508V13.2866C1.07981 13.7192 1.25119 14.1342 1.55661 14.4405C1.86202 14.7469 2.2765 14.9195 2.70908 14.9206H11.1461C11.5793 14.9202 11.9947 14.7479 12.3011 14.4416C12.6074 14.1352 12.7797 13.7198 12.7801 13.2866V12.7811H13.2861C13.7194 12.7805 14.1347 12.6082 14.4411 12.3017C14.7474 11.9953 14.9197 11.5799 14.9201 11.1466V2.71408C14.9195 2.28088 14.7472 1.86557 14.4409 1.55925C14.1346 1.25293 13.7193 1.08061 13.2861 1.08008ZM11.7801 13.2861C11.7801 13.6361 11.4956 13.9201 11.1461 13.9201H2.70858C2.54122 13.9192 2.38107 13.8519 2.26324 13.733C2.14542 13.6142 2.07955 13.4534 2.08008 13.2861V4.85408C2.08008 4.50408 2.36208 4.21958 2.70858 4.21958H11.1461C11.4961 4.21958 11.7801 4.50458 11.7801 4.85408V12.2801V13.2861ZM13.9201 11.1461C13.9201 11.4961 13.6356 11.7806 13.2861 11.7806H12.7801V4.85408C12.7797 4.42079 12.6074 4.00535 12.3011 3.69893C11.9947 3.3925 11.5794 3.22011 11.1461 3.21958H4.22008V2.71408C4.22008 2.36408 4.50208 2.08008 4.84908 2.08008H13.2861C13.6361 2.08008 13.9201 2.36408 13.9201 2.71408V11.1461Z"
													fill="#A7A7A7"
												/>
											</svg>
										</button>
									</template>
								</BaseInput>
								<BaseInput wFill placeholder="Success URL" lockInput v-model="TOKEN">
									<template #postfix>
										<button class="settings-integration__copy" @click="copyHandler(TOKEN)">
											<svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M13.2861 1.08008H4.84908C4.4165 1.08114 4.00202 1.25379 3.69661 1.56014C3.39119 1.86649 3.21981 2.2815 3.22008 2.71408V3.21958H2.70908C2.27628 3.22077 1.86165 3.39367 1.55622 3.70031C1.2508 4.00696 1.07955 4.42228 1.08008 4.85508V13.2866C1.07981 13.7192 1.25119 14.1342 1.55661 14.4405C1.86202 14.7469 2.2765 14.9195 2.70908 14.9206H11.1461C11.5793 14.9202 11.9947 14.7479 12.3011 14.4416C12.6074 14.1352 12.7797 13.7198 12.7801 13.2866V12.7811H13.2861C13.7194 12.7805 14.1347 12.6082 14.4411 12.3017C14.7474 11.9953 14.9197 11.5799 14.9201 11.1466V2.71408C14.9195 2.28088 14.7472 1.86557 14.4409 1.55925C14.1346 1.25293 13.7193 1.08061 13.2861 1.08008ZM11.7801 13.2861C11.7801 13.6361 11.4956 13.9201 11.1461 13.9201H2.70858C2.54122 13.9192 2.38107 13.8519 2.26324 13.733C2.14542 13.6142 2.07955 13.4534 2.08008 13.2861V4.85408C2.08008 4.50408 2.36208 4.21958 2.70858 4.21958H11.1461C11.4961 4.21958 11.7801 4.50458 11.7801 4.85408V12.2801V13.2861ZM13.9201 11.1461C13.9201 11.4961 13.6356 11.7806 13.2861 11.7806H12.7801V4.85408C12.7797 4.42079 12.6074 4.00535 12.3011 3.69893C11.9947 3.3925 11.5794 3.22011 11.1461 3.21958H4.22008V2.71408C4.22008 2.36408 4.50208 2.08008 4.84908 2.08008H13.2861C13.6361 2.08008 13.9201 2.36408 13.9201 2.71408V11.1461Z"
													fill="#A7A7A7"
												/>
											</svg>
										</button>
									</template>
								</BaseInput>
								<BaseInput wFill placeholder="Fail URL" lockInput v-model="TOKEN">
									<template #postfix>
										<button class="settings-integration__copy" @click="copyHandler(TOKEN)">
											<svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M13.2861 1.08008H4.84908C4.4165 1.08114 4.00202 1.25379 3.69661 1.56014C3.39119 1.86649 3.21981 2.2815 3.22008 2.71408V3.21958H2.70908C2.27628 3.22077 1.86165 3.39367 1.55622 3.70031C1.2508 4.00696 1.07955 4.42228 1.08008 4.85508V13.2866C1.07981 13.7192 1.25119 14.1342 1.55661 14.4405C1.86202 14.7469 2.2765 14.9195 2.70908 14.9206H11.1461C11.5793 14.9202 11.9947 14.7479 12.3011 14.4416C12.6074 14.1352 12.7797 13.7198 12.7801 13.2866V12.7811H13.2861C13.7194 12.7805 14.1347 12.6082 14.4411 12.3017C14.7474 11.9953 14.9197 11.5799 14.9201 11.1466V2.71408C14.9195 2.28088 14.7472 1.86557 14.4409 1.55925C14.1346 1.25293 13.7193 1.08061 13.2861 1.08008ZM11.7801 13.2861C11.7801 13.6361 11.4956 13.9201 11.1461 13.9201H2.70858C2.54122 13.9192 2.38107 13.8519 2.26324 13.733C2.14542 13.6142 2.07955 13.4534 2.08008 13.2861V4.85408C2.08008 4.50408 2.36208 4.21958 2.70858 4.21958H11.1461C11.4961 4.21958 11.7801 4.50458 11.7801 4.85408V12.2801V13.2861ZM13.9201 11.1461C13.9201 11.4961 13.6356 11.7806 13.2861 11.7806H12.7801V4.85408C12.7797 4.42079 12.6074 4.00535 12.3011 3.69893C11.9947 3.3925 11.5794 3.22011 11.1461 3.21958H4.22008V2.71408C4.22008 2.36408 4.50208 2.08008 4.84908 2.08008H13.2861C13.6361 2.08008 13.9201 2.36408 13.9201 2.71408V11.1461Z"
													fill="#A7A7A7"
												/>
											</svg>
										</button>
									</template>
								</BaseInput>
							</BaseColumn>
							<BaseColumn v-if="trestingFields && item.bank === 'Сбербанк'" wFill gap="12px">
								<BaseInput
									wFill
									placeholder="Callback-уведомления"
									lockInput
									v-model="TOKEN"
								></BaseInput>
							</BaseColumn>
							<BaseColumn wFill gap="12px">
								<BaseSelect
									placeholder="Система налогооблажения"
									wFill
									v-model="item.system"
									:list="NALOG_SYSTEMS"
								/>
								<BaseSelect placeholder="НДС" wFill v-model="item.nds" :list="LIST_NDS" />
								<BaseSelect
									placeholder="Способ расчета"
									wFill
									v-model="item.method"
									:list="METHODS_CALCULATION"
								/>
								<BaseSelect
									placeholder="Признак расчета"
									wFill
									v-model="item.sign"
									:list="SIGN_CALCULATION"
								/>
							</BaseColumn>
							<BaseButton class="button-save" @click="close()">Сохранить</BaseButton>
						</BaseColumn>
					</template>
				</SelectedPaymentSystem>
			</BaseColumn>
		</BaseColumn>
		<BaseColumn wFill v-else>
			<BaseSelect
				placeholder="Выбор платежной системы"
				class="balance-group__select"
				wFill
				:list="bankList"
				v-model="form.bank"
			></BaseSelect>
			<BaseColumn gap="24px" v-if="form.bank !== ''" wFill>
				<BaseInput placeholder="Название" wFill v-model="form.name" />
				<BaseInfoBlock>
					Если у вас не подключен эквайринг {{ form.bank }}, вы можете подать 
					<a href="#">заявку на подключение</a>
					.
				</BaseInfoBlock>
				<BaseColumn wFill gap="12px" v-if="form.bank === 'Т-банк'">
					<BaseInput placeholder="Терминал" wFill v-model="form.terminal" />
					<BaseInput placeholder="Пароль" wFill v-model="form.password" />
				</BaseColumn>
				<BaseColumn wFill gap="12px" v-if="form.bank === 'Robokassa'">
					<BaseInput placeholder="Идентификатор магазина" wFill v-model="form.terminal" />
					<BaseInput placeholder="Пароль" wFill v-model="form.password" />
					<BaseInput placeholder="Пароль 2" wFill v-model="form.password_2" />
				</BaseColumn>
				<BaseColumn wFill gap="12px" v-if="form.bank === 'Ю-kassa'">
					<BaseInput placeholder="Идентификатор магазина" wFill v-model="form.terminal" />
					<BaseInput placeholder="Секретный ключ" wFill v-model="form.secret" />
					<BaseInput placeholder="URL для уведомлений" wFill v-model="form.url" />
				</BaseColumn>
				<BaseColumn wFill gap="12px" v-if="form.bank === 'Сбербанк'">
					<BaseInput placeholder="Токен" wFill v-model="form.token" />
				</BaseColumn>
				<BaseRow
					tag="label"
					gap="16px"
					v-if="form.bank === 'Robokassa' || form.bank === 'Сбербанк'"
				>
					<BaseSwitch v-model="trestingFields" />
					<BaseText>Тестовый режим</BaseText>
					<QuestTooltip />
				</BaseRow>
				<BaseColumn v-if="trestingFields && form.bank === 'Robokassa'" wFill gap="12px">
					<BaseInput wFill placeholder="Result URL" lockInput v-model="TOKEN">
						<template #postfix>
							<button class="settings-integration__copy" @click="copyHandler(TOKEN)">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13.2861 1.08008H4.84908C4.4165 1.08114 4.00202 1.25379 3.69661 1.56014C3.39119 1.86649 3.21981 2.2815 3.22008 2.71408V3.21958H2.70908C2.27628 3.22077 1.86165 3.39367 1.55622 3.70031C1.2508 4.00696 1.07955 4.42228 1.08008 4.85508V13.2866C1.07981 13.7192 1.25119 14.1342 1.55661 14.4405C1.86202 14.7469 2.2765 14.9195 2.70908 14.9206H11.1461C11.5793 14.9202 11.9947 14.7479 12.3011 14.4416C12.6074 14.1352 12.7797 13.7198 12.7801 13.2866V12.7811H13.2861C13.7194 12.7805 14.1347 12.6082 14.4411 12.3017C14.7474 11.9953 14.9197 11.5799 14.9201 11.1466V2.71408C14.9195 2.28088 14.7472 1.86557 14.4409 1.55925C14.1346 1.25293 13.7193 1.08061 13.2861 1.08008ZM11.7801 13.2861C11.7801 13.6361 11.4956 13.9201 11.1461 13.9201H2.70858C2.54122 13.9192 2.38107 13.8519 2.26324 13.733C2.14542 13.6142 2.07955 13.4534 2.08008 13.2861V4.85408C2.08008 4.50408 2.36208 4.21958 2.70858 4.21958H11.1461C11.4961 4.21958 11.7801 4.50458 11.7801 4.85408V12.2801V13.2861ZM13.9201 11.1461C13.9201 11.4961 13.6356 11.7806 13.2861 11.7806H12.7801V4.85408C12.7797 4.42079 12.6074 4.00535 12.3011 3.69893C11.9947 3.3925 11.5794 3.22011 11.1461 3.21958H4.22008V2.71408C4.22008 2.36408 4.50208 2.08008 4.84908 2.08008H13.2861C13.6361 2.08008 13.9201 2.36408 13.9201 2.71408V11.1461Z"
										fill="#A7A7A7"
									/>
								</svg>
							</button>
						</template>
					</BaseInput>
					<BaseInput wFill placeholder="Success URL" lockInput v-model="TOKEN">
						<template #postfix>
							<button class="settings-integration__copy" @click="copyHandler(TOKEN)">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13.2861 1.08008H4.84908C4.4165 1.08114 4.00202 1.25379 3.69661 1.56014C3.39119 1.86649 3.21981 2.2815 3.22008 2.71408V3.21958H2.70908C2.27628 3.22077 1.86165 3.39367 1.55622 3.70031C1.2508 4.00696 1.07955 4.42228 1.08008 4.85508V13.2866C1.07981 13.7192 1.25119 14.1342 1.55661 14.4405C1.86202 14.7469 2.2765 14.9195 2.70908 14.9206H11.1461C11.5793 14.9202 11.9947 14.7479 12.3011 14.4416C12.6074 14.1352 12.7797 13.7198 12.7801 13.2866V12.7811H13.2861C13.7194 12.7805 14.1347 12.6082 14.4411 12.3017C14.7474 11.9953 14.9197 11.5799 14.9201 11.1466V2.71408C14.9195 2.28088 14.7472 1.86557 14.4409 1.55925C14.1346 1.25293 13.7193 1.08061 13.2861 1.08008ZM11.7801 13.2861C11.7801 13.6361 11.4956 13.9201 11.1461 13.9201H2.70858C2.54122 13.9192 2.38107 13.8519 2.26324 13.733C2.14542 13.6142 2.07955 13.4534 2.08008 13.2861V4.85408C2.08008 4.50408 2.36208 4.21958 2.70858 4.21958H11.1461C11.4961 4.21958 11.7801 4.50458 11.7801 4.85408V12.2801V13.2861ZM13.9201 11.1461C13.9201 11.4961 13.6356 11.7806 13.2861 11.7806H12.7801V4.85408C12.7797 4.42079 12.6074 4.00535 12.3011 3.69893C11.9947 3.3925 11.5794 3.22011 11.1461 3.21958H4.22008V2.71408C4.22008 2.36408 4.50208 2.08008 4.84908 2.08008H13.2861C13.6361 2.08008 13.9201 2.36408 13.9201 2.71408V11.1461Z"
										fill="#A7A7A7"
									/>
								</svg>
							</button>
						</template>
					</BaseInput>
					<BaseInput wFill placeholder="Fail URL" lockInput v-model="TOKEN">
						<template #postfix>
							<button class="settings-integration__copy" @click="copyHandler(TOKEN)">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13.2861 1.08008H4.84908C4.4165 1.08114 4.00202 1.25379 3.69661 1.56014C3.39119 1.86649 3.21981 2.2815 3.22008 2.71408V3.21958H2.70908C2.27628 3.22077 1.86165 3.39367 1.55622 3.70031C1.2508 4.00696 1.07955 4.42228 1.08008 4.85508V13.2866C1.07981 13.7192 1.25119 14.1342 1.55661 14.4405C1.86202 14.7469 2.2765 14.9195 2.70908 14.9206H11.1461C11.5793 14.9202 11.9947 14.7479 12.3011 14.4416C12.6074 14.1352 12.7797 13.7198 12.7801 13.2866V12.7811H13.2861C13.7194 12.7805 14.1347 12.6082 14.4411 12.3017C14.7474 11.9953 14.9197 11.5799 14.9201 11.1466V2.71408C14.9195 2.28088 14.7472 1.86557 14.4409 1.55925C14.1346 1.25293 13.7193 1.08061 13.2861 1.08008ZM11.7801 13.2861C11.7801 13.6361 11.4956 13.9201 11.1461 13.9201H2.70858C2.54122 13.9192 2.38107 13.8519 2.26324 13.733C2.14542 13.6142 2.07955 13.4534 2.08008 13.2861V4.85408C2.08008 4.50408 2.36208 4.21958 2.70858 4.21958H11.1461C11.4961 4.21958 11.7801 4.50458 11.7801 4.85408V12.2801V13.2861ZM13.9201 11.1461C13.9201 11.4961 13.6356 11.7806 13.2861 11.7806H12.7801V4.85408C12.7797 4.42079 12.6074 4.00535 12.3011 3.69893C11.9947 3.3925 11.5794 3.22011 11.1461 3.21958H4.22008V2.71408C4.22008 2.36408 4.50208 2.08008 4.84908 2.08008H13.2861C13.6361 2.08008 13.9201 2.36408 13.9201 2.71408V11.1461Z"
										fill="#A7A7A7"
									/>
								</svg>
							</button>
						</template>
					</BaseInput>
				</BaseColumn>
				<BaseColumn v-if="trestingFields && form.bank === 'Сбербанк'" wFill gap="12px">
					<BaseInput wFill placeholder="Callback-уведомления" lockInput v-model="TOKEN"></BaseInput>
				</BaseColumn>
				<BaseColumn wFill gap="12px">
					<BaseSelect
						placeholder="Система налогооблажения"
						wFill
						v-model="form.system"
						:list="NALOG_SYSTEMS"
					/>
					<BaseSelect placeholder="НДС" wFill v-model="form.nds" :list="LIST_NDS" />
					<BaseSelect
						placeholder="Способ расчета"
						wFill
						v-model="form.method"
						:list="METHODS_CALCULATION"
					/>
					<BaseSelect
						placeholder="Признак расчета"
						wFill
						v-model="form.sign"
						:list="SIGN_CALCULATION"
					/>
				</BaseColumn>
				<BaseButton class="button-save" @click="addPaymentSystem">Сохранить</BaseButton>
			</BaseColumn>
		</BaseColumn>
	</RightSlideModalContainer>
</template>

<style scoped lang="scss">
.button-add {
	@extend .f-main-text;
	display: flex;
	align-items: center;
	gap: 12px;
	margin-left: auto;
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
.button-save {
	margin-left: 0 !important;
}
.settings-payment-system {
	max-width: 600px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	&__empty {
		margin: auto;
	}
}
</style>
