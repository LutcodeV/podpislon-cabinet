<script setup>
const internalMethodSending = ref('internal')

const currentProviders = ref({})
const selectedProvider = ref('')
const providers = ref([
	{
		logo: '/assets/img/sms-provider-01.png',
		type: 'smsru',
	},
	{
		logo: '/assets/img/sms-provider-02.png',
		type: 'smsaero',
	},
	{
		logo: '/assets/img/sms-provider-03.png',
		type: 'megafon',
	},
])
const infoBlockTexts = {
	smsru: `Нет акаунта в SMS Aero? Зарегистрируйте его по <a href="#">ссылке</a>.`,
	smsaero: `Нет акаунта в SMSRU? Зарегистрируйте его по <a href="#">ссылке</a>.`,
	megafon: `Нет акаунта в Мегафон? Зарегистрируйте его по <a href="#">ссылке</a>.`,
}

const providerForms = ref({
	smsru: {
		name: 'SMSRU',
		logo: '/assets/img/sms-provider-01.png',
		token: '',
		sender: '',
	},
	smsaero: {
		name: 'SMS Aero',
		logo: '/assets/img/sms-provider-02.png',
		login: '',
		api: '',
		sender: '',
	},
	megafon: {
		name: 'Мегафон',
		logo: '/assets/img/sms-provider-03.png',
		login: '',
		password: '',
		sender: '',
	},
})

const addProvider = (provider) => {
	currentProviders.value[provider] = Object.assign({}, providerForms.value[provider])
	selectedProvider.value = ''
}
</script>

<template>
	<RightSlideModalContainer class="settings-sms" title="Отправить СМС">
		<BaseColumn gap="32px" class="settings-sms__content">
			<BaseText variant="small-main" class="settings-sms__text">
				Вы можете воспользоваться для отправки нашим сервисом отправки СМС. При этом все СМС
				клиентами будут приходить от имени сервиса “Поспислон”. Вы твкже можете настроить и
				подключить свои СМС-шлюз, чтобы СМС отправлялись клиентам от вашего имени
			</BaseText>
			<BaseColumn>
				<BaseRadio
					class="settings-sms__radio"
					value="internal"
					v-model="internalMethodSending"
					name="method"
				>
					Отправлять через внутренний СМС-шлюз
				</BaseRadio>
				<BaseRadio
					class="settings-sms__radio"
					value="external"
					v-model="internalMethodSending"
					name="method"
				>
					Отправлять через сторониий СМС-шлюз
				</BaseRadio>
			</BaseColumn>
			<hr class="b-modal-divider" />
			<BaseColumn
				class="settings-sms__providers"
				v-if="[...Object.values(currentProviders)].length > 0"
			>
				<SelectedProviderSMS
					:info="provider"
					v-for="([type, provider], i) in Object.entries(currentProviders)"
					:key="i"
					editable
					@delete="() => delete currentProviders[type]"
				>
					<template #edit="{ close }" v-if="type === 'smsru'">
						<BaseInput v-model="providerForms.smsru.token" placeholder="Токен" />
						<BaseInput v-model="providerForms.smsru.sender" placeholder="Отправитель" />
						<BaseButton @click="close" variant="outline">Сохранить</BaseButton>
					</template>
					<template #edit="{ close }" v-else-if="type === 'smsaero'">
						<BaseInput v-model="providerForms.smsaero.login" placeholder="Логин" />
						<BaseInput v-model="providerForms.smsaero.api" placeholder="API" />
						<BaseInput v-model="providerForms.smsaero.sender" placeholder="Отправитель" />
						<BaseButton @click="close" variant="outline">Сохранить</BaseButton>
					</template>
					<template #edit="{ close }" v-else-if="type === 'megafon'">
						<BaseInput v-model="providerForms.megafon.login" placeholder="Логин" />
						<BaseInput
							v-model="providerForms.megafon.password"
							placeholder="Пароль"
							type="password"
						/>
						<BaseInput v-model="providerForms.megafon.sender" placeholder="Отправитель" />
						<BaseButton @click="close" variant="outline">Сохранить</BaseButton>
					</template>
				</SelectedProviderSMS>
			</BaseColumn>
			<hr class="b-modal-divider" v-if="Object.values(currentProviders).length > 0" />
			<BaseRow gap="12px">
				<BaseCard
					:class="`settings-sms-provider ${selectedProvider === provider.type ? 'settings-sms-provider--active' : ''} ${Object.keys(currentProviders).indexOf(provider.type) > -1 ? 'settings-sms-provider--disabled' : ''}`"
					:padding="{ x: 0, y: 0 }"
					tag="button"
					@click="selectedProvider = selectedProvider === provider.type ? '' : provider.type"
					v-for="provider in providers"
				>
					<img :src="provider.logo" :alt="provider.type" class="settings-sms-provider__logo" />
				</BaseCard>
			</BaseRow>
			<template v-for="[key, value] in Object.entries(infoBlockTexts)">
				<BaseInfoBlock class="settings-sms__info" v-if="selectedProvider === key" v-html="value" />
			</template>
			<BaseColumn
				tag="form"
				class="settings-sms__form"
				gap="12px"
				v-if="selectedProvider === 'smsru'"
				@submit.prevent="() => addProvider('smsru')"
			>
				<BaseText class="settings-sms__form-title">SMSRU</BaseText>
				<BaseInput v-model="providerForms.smsru.token" placeholder="Токен" />
				<BaseInput v-model="providerForms.smsru.sender" placeholder="Отправитель" />
				<BaseButton type="submit">Сохранить</BaseButton>
			</BaseColumn>
			<BaseColumn
				@submit.prevent="() => addProvider('smsaero')"
				tag="form"
				class="settings-sms__form"
				gap="12px"
				v-else-if="selectedProvider === 'smsaero'"
			>
				<BaseText class="settings-sms__form-title">SMS Aero</BaseText>
				<BaseInput v-model="providerForms.smsaero.login" placeholder="Логин" />
				<BaseInput v-model="providerForms.smsaero.api" placeholder="Api-ключ" />
				<BaseInput v-model="providerForms.smsaero.sender" placeholder="Отправитель" />
				<BaseButton type="submit">Сохранить</BaseButton>
			</BaseColumn>
			<BaseColumn
				tag="form"
				class="settings-sms__form"
				@submit.prevent="() => addProvider('megafon')"
				gap="12px"
				v-else-if="selectedProvider === 'megafon'"
			>
				<BaseText class="settings-sms__form-title">Мегафон</BaseText>
				<BaseInput v-model="providerForms.megafon.login" placeholder="Логин" />
				<BaseInput v-model="providerForms.megafon.password" placeholder="Пароль" type="password" />
				<BaseInput v-model="providerForms.megafon.sender" placeholder="Отправитель" />
				<BaseButton type="submit">Сохранить</BaseButton>
			</BaseColumn>
		</BaseColumn>
	</RightSlideModalContainer>
</template>

<style scoped lang="scss">
.settings-sms-provider {
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
	&--active {
		border-color: var(--Basic-Branded);
	}
	&--active ~ &,
	&:has(~ .settings-sms-provider--active) {
		opacity: 0.5;
	}
	&--disabled {
		pointer-events: none;
		opacity: 0.5;
	}
}
.settings-sms {
	max-width: 600px;
	width: 100%;
	&__form {
		width: 100%;
		& > *:not(button) {
			width: 100%;
		}
	}
	&__providers {
		width: 100%;
	}
	&__form-title {
		opacity: 0.5;
	}
	&__info {
		width: 100%;
	}
	&__text {
		margin-top: 24px;
	}
	&__content {
		margin-top: 0;
	}
	&__radio {
		align-items: center;
	}
}
</style>
