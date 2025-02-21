<script setup>
import BaseRow from '../global/BaseRow.vue'

const providers = ref([
	{
		logo: '/assets/img/logo-integration-01.png',
	},
	{
		logo: '/assets/img/logo-integration-02.png',
	},
	{
		logo: '/assets/img/logo-integration-03.png',
	},
	{
		logo: '/assets/img/logo-integration-04.png',
	},
	{
		logo: '/assets/img/logo-integration-05.png',
	},
])

const token = ref('23423_рнв_832_823ьад')
const selectedHandlers = ref([
	'https://duddev.ru/b24apps/docs/endpoint.php y=2e4737a36c5ehttps://duddev.ru/b24apps/docs/endpoint.php y=2e4737a36c5e...',
])
const newHandler = ref('')
const addingHandler = ref(false)

const handleAddHandler = () => {
	if (addingHandler.value) {
		if (newHandler.value !== '') {
			selectedHandlers.value.push(newHandler.value)
		}
		newHandler.value = ''
		addingHandler.value = false
	} else {
		addingHandler.value = true
	}
}

const copyHandler = (token) => {
	navigator.clipboard.writeText(token)
}
</script>

<template>
	<RightSlideModalContainer class="settings-integration" title="интеграции">
		<BaseColumn gap="32px" class="settings-integration__content">
			<BaseText variant="small-main" class="settings-integration__text">
				Вы можете генерировать договоры в вашей CRM-системе с привязкой к сделкам и клиентам. С
				помощью наших приложений интеграции документы будут отправляться клиентам на подпись. Статус
				подписания и сам подписанный документ будут возвращаться в CRM.
			</BaseText>
			<BaseRow gap="12px">
				<BaseCard
					class="settings-integration-provider"
					:padding="{ x: 0, y: 0 }"
					v-for="provider in providers"
				>
					<img
						:src="provider.logo"
						:alt="provider.type"
						class="settings-integration-provider__logo"
					/>
				</BaseCard>
			</BaseRow>
			<hr class="b-modal-divider" />
			<BaseColumn wFill gap="24px">
				<BaseText variant="heading" uppercase>ДАнные для интеграции</BaseText>
				<BaseColumn wFill gap="12px">
					<BaseRow wFill justify="space-between" align="center">
						<BaseText color="var(--Basic-Grey)">API-Ключ</BaseText>
						<BaseText underline variant="small-main" color="var(--Basic-Grey)">
							Обновить API-Ключ
						</BaseText>
					</BaseRow>
					<BaseInput wFill placeholder="API-ключ" lockInput v-model="token">
						<template #postfix>
							<button class="settings-integration__copy" @click="copyHandler(token)">
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
				<BaseColumn wFill gap="12px">
					<BaseText color="var(--Basic-Grey)">Обработчики событий</BaseText>
					<BaseCard
						:padding="{
							x: 0,
							y: 0,
						}"
						v-for="token in selectedHandlers"
						:tag="BaseRow"
						class="selected-handler"
						align="center"
						gap="0"
					>
						<BaseText class="selected-handler__token">{{ token }}</BaseText>
						<button
							class="selected-handler__button"
							@click="selectedHandlers.splice(selectedHandlers.indexOf(token), 1)"
						>
							<BaseIcon name="icon-trash" />
						</button>
					</BaseCard>
					<BaseInput wFill centered v-model="newHandler" v-if="addingHandler" />
					<BaseButton @click="handleAddHandler">
						{{
							!addingHandler ? 'Добавить обработчик' : newHandler !== '' ? 'Сохранить' : 'Отмена'
						}}
					</BaseButton>
				</BaseColumn>
			</BaseColumn>
		</BaseColumn>
	</RightSlideModalContainer>
</template>

<style scoped lang="scss">
.selected-handler {
	max-width: 100%;
	width: 100% !important;
	&__token {
		padding: 0px 14px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		width: 100%;
		word-break: break-all;
		-webkit-line-clamp: 1;
	}

	&__button {
		width: 42px;
		height: 42px;
		margin-left: 14px;
		min-width: 42px;
		border-left: 1px solid var(--Basic-Background);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #a7a7a7;
	}
}
.settings-integration-provider {
	width: 80px;
	height: 31px;
	border-radius: 4px;
	border: 1px solid #fff;
	transition: 0.3s ease;
	display: block;

	&__logo {
		border-radius: 4px;
		width: 100%;
		height: 100%;
	}
}
.settings-integration {
	max-width: 600px;
	width: 100%;
	&__text {
		margin-top: 24px;
	}
	&__content {
		margin-top: 0;
	}
	&__copy {
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: all;
	}
}
</style>
