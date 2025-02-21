<script setup>
import SettingsNavButton from './SettingsNavButton.vue'
import SettingsNotifications from './SettingsNotifications.vue'
import SettingsSignaturePage from './SettingsSignaturePage.vue'
import SettingsTemplateDocuments from './SettingsTemplateDocuments.vue'

defineProps({
	isVisible: {
		type: Boolean,
		required: true,
	},
})
const emit = defineEmits(['close'])

const closeModal = () => {
	emit('close')
}
const activeSettings = ref(null)

const BUTTONS = [
	{
		name: 'integration',
		icon: 'integration',
		title: 'Интеграции',
		action: () => (activeSettings.value = 'integration'),
	},
	{
		name: 'sms',
		icon: 'sms',
		title: 'СМС провайдеры',
		action: () => (activeSettings.value = 'sms'),
	},
	{
		name: 'template',
		icon: 'template',
		title: 'Шаблоны документов',
		action: () => (activeSettings.value = 'template'),
	},
	{
		name: 'payments',
		icon: 'payments',
		title: 'Платежные системы',
		action: () => (activeSettings.value = 'payments'),
	},
	{
		name: 'signature-page',
		icon: 'signature-page',
		title: 'Страница подписания',
		action: () => (activeSettings.value = 'signature-page'),
	},
	{
		name: 'notification',
		icon: 'notification',
		title: 'Настройки уведомлений',
		action: () => (activeSettings.value = 'notification'),
	},
]
</script>

<template>
	<RightSlideModal :isVisible="isVisible" @close="closeModal">
		<SettingsNotifications v-if="activeSettings === 'notification'" />
		<SettingsSMS v-else-if="activeSettings === 'sms'" />
		<SettingsIntegration v-else-if="activeSettings === 'integration'" />
		<SettingsSignaturePage v-else-if="activeSettings === 'signature-page'" />
		<SettingsTemplateDocuments v-else-if="activeSettings === 'template'" />
		<SettingsPayments v-else-if="activeSettings === 'payments'" />
		<RightSlideModalContainer class="settings-modal" title="Настройки">
			<BaseText class="settings-modal__company-name">
				ООО “Водоочистные системы непрерывного цикла одоочистки” системы непрерывного цикла
				водоочистки”
			</BaseText>
			<hr class="b-modal-divider settings-modal__divider" />
			<BaseRow class="settings-modal__buttons">
				<SettingsNavButton
					v-for="button in BUTTONS"
					:key="button.title"
					:info="button"
					@click="button.action"
					:isActive="activeSettings === button.name"
				/>
			</BaseRow>
		</RightSlideModalContainer>
	</RightSlideModal>
</template>

<style scoped lang="scss">
.settings-modal {
	max-width: 335px;
	width: 100%;
	&__company-name {
		margin-top: 24px;
	}
	&__divider {
		margin-top: 32px;
	}
	&__buttons {
		margin-top: 32px;
		flex-wrap: wrap;
	}
}
</style>
