<script setup>
const MOCK_PARTNERS = [
	{
		id: 1,
		description:
			'Для интеграции с Битрикс24 необходимо установить приложение "Подпислон" из Битрикс24 Маркет. Интеграция доступна на всех коммерческих тарифах и не требует приобретение подписки.',
		duration: '14 дней',
		tariff: 'Максимального тарифа',
		price: 'Бесплатно',
		buttonText: 'Бесплатная регистрация',
		logo: 'partner-logo-01.png',
	},
	{
		id: 2,
		description: 'Расширенные возможности интеграции с Битрикс24, доступ к аналитике и API.',
		duration: '30 дней',
		tariff: 'Премиум тариф',
		price: 'Бесплатно',
		buttonText: 'Начать бесплатно',
		logo: 'partner-logo-01.png',
	},
	{
		id: 3,
		description: 'Полный комплект инструментов для автоматизации бизнеса и CRM.',
		duration: '7 дней',
		tariff: 'Бизнес тариф',
		price: '990 руб./мес',
		buttonText: 'Попробовать',
		logo: 'partner-logo-01.png',
	},
	{
		id: 4,
		description: 'Оптимальный вариант для небольших команд и стартапов.',
		duration: '14 дней',
		tariff: 'Стартовый тариф',
		price: '490 руб./мес',
		buttonText: 'Зарегистрироваться',
		logo: 'partner-logo-01.png',
	},
]
</script>

<template>
	<PageHeader title="Наши партнеры" />
	<BaseRow class="partners__row">
		<PartnerCard v-for="item in MOCK_PARTNERS" :key="item.id" :info="item" />
	</BaseRow>
</template>

<style scoped lang="scss">
.partners {
	&__row {
		margin-top: 24px;
		flex-wrap: wrap;
	}
}
</style>
