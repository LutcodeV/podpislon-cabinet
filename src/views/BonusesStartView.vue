<script setup>
import BaseCard from '@/components/global/BaseCard.vue'
import BaseColumn from '@/components/global/BaseColumn.vue'
</script>

<template>
	<BaseColumn wFill>
		<img src="/assets/img/partner-banner.png" alt="" class="partner-banner" />
		<BaseCard class="partner-card" wFill :tag="BaseColumn" gap="32px">
			<BaseColumn wFill>
				<BaseText variant="heading" class="partner-card__title">
					Как работает наша партнерская реферальная программа?
				</BaseText>
				<BaseRow class="partner-card__row" wFill gap="32px">
					<BaseText class="partner-card__item">
						Согласитесь с условиями партнерской программы
					</BaseText>
					<BaseText class="partner-card__item">Получите реферальную ссылку</BaseText>
					<BaseText class="partner-card__item">
						Разместите реферальную ссылку на своих ресурсах или передайте непосредственно
						потенциальным клиентам
					</BaseText>
					<BaseText class="partner-card__item">
						При регистрации по реферальной ссылке новый клиент привязывается к партнеру
					</BaseText>
					<BaseText class="partner-card__item">
						Вы получаете % от каждой оплаты привлеченного клиента
					</BaseText>
				</BaseRow>
			</BaseColumn>
			<BaseCheckbox class="partner-card__checkbox">
				Нажимая на кнопку “Присоединиться к программе” я соглашаюсь на условия партнерской программы
			</BaseCheckbox>
			<BaseButton @click="$router.push({ name: 'bonuses-home' })">
				Присоединиться к программе
			</BaseButton>
		</BaseCard>
	</BaseColumn>
</template>

<style scoped lang="scss">
.partner-card {
	counter-reset: item;
	&__checkbox {
		align-items: center;
	}
	&__item {
		display: flex;
		flex-direction: column;
		max-width: 206px;
		width: 100%;
		gap: 12px;
		position: relative;
		&::before {
			counter-increment: item;
			content: counter(item);
			font-weight: 800;
			font-size: 18px;
			line-height: 19.08px;
			letter-spacing: 0%;
			width: 32px;
			height: 32px;
			border-radius: 4px;
			background: var(--Basic-Branded);
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 1;
		}
		&:not(:last-child)::after {
			content: '';
			z-index: 0;
			position: absolute;
			width: calc(100% + 32px);
			top: 15px;
			left: 0;
			border-top: 1px dashed var(--Basic-Grey);
		}
	}
}
.partner-banner {
	max-width: 100%;
	width: 100%;
	overflow: hidden;
	height: 258px;
	object-fit: cover;
	border-radius: 4px;
}
</style>
