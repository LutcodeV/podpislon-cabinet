<script setup>
import BaseCheckbox from '@/components/global/BaseCheckbox.vue'
import BaseIcon from '@/components/global/BaseIcon.vue'
import BaseInput from '@/components/global/BaseInput.vue'
import BaseRadio from '@/components/global/BaseRadio.vue'
import BaseSelect from '@/components/global/BaseSelect.vue'
import BaseSwitch from '@/components/global/BaseSwitch.vue'
import PageHeader from '@/components/global/PageHeader.vue'

const form = ref({
	subscribe: '',
	count: '0',
	promocode: '',
	referral: false,
})

const subscribeList = ref([
	'Подпислон плюс 1 мес. 1000 р.',
	'Подпислон плюс 1 мес. 2000 р.',
	'Подпислон плюс 1 мес. 3000 р.',
])

const packagesDocuments = ref(false)
const subscribe = ref(false)
const hasPromocode = ref(false)
watch(
	form,
	() => {
		if (form.value.count === '') form.value.count = '0'
	},
	{ deep: true },
)
</script>

<template>
	<PageHeader title="БАЛАНС И ОПЛАТА"></PageHeader>
	<div class="balance">
		<div class="balance__column">
			<div class="balance__row">
				<div class="balance-item">
					<div class="balance-item__header">
						<BaseIcon name="icon-document" class="balance-item__icon" />
						<p class="balance-item__title">Баланс документов</p>
						<p class="balance-item__count"><b>22 534 док</b></p>
					</div>
					<BaseCheckbox class="balance-item__checkbox">
						Уведомлять при уменьшение баланса
					</BaseCheckbox>
				</div>
				<div class="balance-item">
					<div class="balance-item__header">
						<BaseIcon name="tariff" class="balance-item__icon" />
						<p class="balance-item__title">Подписка</p>
						<p class="balance-item__count">
							активна до
							<b>12.12.2024</b>
						</p>
					</div>
					<p class="balance-item__describe">Отключить</p>
				</div>
			</div>
			<div class="balance-group">
				<div class="balance-group__header">
					<p class="balance-group__title">Пакеты документов</p>
					<BaseSwitch v-model="packagesDocuments" />
					<QuestTooltip />
				</div>
				<div class="balance-group__content">
					<div class="balance-group__row" v-if="packagesDocuments">
						<BaseInput
							class="balance-group__input"
							placeholder="Количество документов"
							v-model="form.count"
							type="number"
							min="0"
						/>
						<BaseInput class="balance-group__input" placeholder="За 1 документ" disabled />
						<BaseInput class="balance-group__input" placeholder="Общая стоимость" disabled />
					</div>
					<BaseRange
						:disabled="!packagesDocuments"
						v-model="form.count"
						:max="100000"
						:min="0"
						class="balance-group__range"
					/>
					<div class="balance-group__footer" v-if="packagesDocuments">
						<BaseRadio name="sms">
							<span class="balance-group__checkbox">
								Тариф с СМС
								<QuestTooltip />
							</span>
						</BaseRadio>
						<BaseRadio name="sms">
							<span class="balance-group__checkbox">
								Тариф без СМС
								<QuestTooltip />
							</span>
						</BaseRadio>
					</div>
				</div>
			</div>
			<div class="balance-group">
				<div class="balance-group__header">
					<p class="balance-group__title">Подписка</p>
					<BaseSwitch v-model="subscribe" />
					<QuestTooltip />
				</div>
				<div class="balance-group__content">
					<BaseSelect
						placeholder="Тариф"
						class="balance-group__select"
						:list="subscribeList"
						v-model="form.subscribe"
						:disabled="!subscribe"
					></BaseSelect>
				</div>
			</div>
		</div>
		<div class="balance-result">
			<p class="balance-result__title">Детали заказа</p>
			<div class="balance-result__group">
				<BaseValueRow title="Пакет документов 100 000 шт." value="2 300 000 руб." />
				<BaseValueRow title="Подписка 1 мес." value="1 000 руб." />
			</div>
			<div class="balance-result__group">
				<BaseText underline clickable @click="hasPromocode = !hasPromocode">
					{{ hasPromocode ? 'Закрыть промокод' : 'У меня есть промокод' }}
				</BaseText>
				<BaseInput placeholder="Промокод" v-model="form.promocode" v-if="hasPromocode">
					<template #postfix>
						<BaseIcon name="trash" @click="form.promocode = ''" />
					</template>
				</BaseInput>
				<BaseText color="var(--Basic-Grey)" variant="signatures" v-if="hasPromocode">
					Применен промокод: Пакет документов 10 шт.
				</BaseText>
			</div>
			<BaseInfoBlock>
				Для применения промокода сформируйте и оплатите счет или перейдите к оплате через СБП.
			</BaseInfoBlock>
			<div class="balance-result__referral">
				<BaseColumn gap="2px">
					<BaseText>Реферальный баланс</BaseText>
					<BaseText variant="small-main">
						На вашем счету
						<BaseText tag="span" variant="small-main" weight="800" color="var(--Basic-Branded)">
							2 234
						</BaseText>
						руб.
					</BaseText>
				</BaseColumn>
				<BaseSwitch v-model="form.referral"></BaseSwitch>
			</div>
			<BaseValueRow
				title="ИТОГО"
				value="2 301 000 руб."
				:subvalue="form.referral ? '-2 234 бонусов' : ''"
			/>
			<BaseCheckbox class="balance-result__checkbox">
				Я выражаю согласие с условиями
				<a href="#">Оферты</a>
			</BaseCheckbox>
			<BaseRow>
				<BaseButton>Оплатить по счету</BaseButton>
				<BaseButton variant="gradient-border">
					<BaseIcon name="sbp" save-color />
					Оплатить по СБП
				</BaseButton>
			</BaseRow>
		</div>
	</div>
</template>

<style scoped lang="scss">
.balance-result {
	@extend .b-card;
	max-width: 448px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 24px;
	&__referral {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 4px;
		background: var(--Basic-Background, #f6f6f6);
		padding: 9px 12px;
	}
	&__group {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	&__checkbox {
		display: flex;
		align-items: center;
		a {
			text-decoration: none;
			color: var(--Basic-Dark);
		}
	}
}
.balance-group {
	display: flex;
	flex-direction: column;
	gap: 12px;
	&__footer {
		display: flex;
		align-items: center;
		gap: 24px;
		margin-top: 24px;
	}
	&__checkbox {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	:deep(.balance-group__select) {
		max-width: 302px;
	}
	&__row {
		display: flex;
		gap: 24px;
		margin-bottom: 24px;
	}
	&__content {
		@extend .b-card;
	}
	&__header {
		display: flex;
		align-items: center;
		gap: 24px;
	}
	&__title {
		@extend .f-main-text;
	}
}
.balance-item {
	@extend .b-card;
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 14px 24px;
	&__header {
		display: flex;
		align-items: center;
	}
	&__title {
		@extend .f-main-text;
		margin-right: 24px;
	}
	&__icon {
		width: 16px;
		height: 16px;
		margin-right: 12px;
	}
	&__checkbox {
		align-items: center;
	}
	&__count {
		@extend .f-small-main;
		color: var(--Basic-Branded);
	}
	&__count b {
		@extend .f-medium;
	}
	&__describe {
		@extend .f-signatures;
		color: var(--Basic-Grey);
		text-decoration: underline;
		margin-top: auto;
	}
}
.balance {
	display: flex;
	gap: 24px;
	margin-top: 24px;
	&__column {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	&__row {
		display: flex;
		gap: 24px;
	}
}
</style>
