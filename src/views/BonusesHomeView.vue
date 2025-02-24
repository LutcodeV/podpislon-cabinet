<script setup>
import BonusesList from '@/components/bonuses/BonusesList.vue'
import BaseColumn from '@/components/global/BaseColumn.vue'
import BaseRow from '@/components/global/BaseRow.vue'
import StatusTag from '@/components/global/StatusTag.vue'

const isPending = ref(false)
const history = [
	{
		date: '16.08.2024   19:47',
		price: '+ 33 075.54 руб.',
		company: 'ООО "Ромашка"',
		operation: 'Поступление денег от компании Ромашка, ремонт холодильников',
		status: 30,
	},
]
const isModalUserVisible = ref(false)
</script>

<template>
	<BaseCard class="documents-header" wFill :tag="BaseRow" gap="32px">
		<BaseColumn gap="12px" class="documents-header__balance">
			<BaseText variant="small-main" color="var(--Basic-Grey)">У вас на балансе</BaseText>
			<BaseText variant="heading">0.00 руб.</BaseText>
		</BaseColumn>
		<BaseColumn gap="12px">
			<StatusTag :status="123" />
			<BaseText
				@click="isModalUserVisible = true"
				variant="signatures"
				underline
				color="var(--Basic-Branded)"
			>
				Подписать договор
			</BaseText>
		</BaseColumn>
		<BaseColumn gap="4px" class="documents-header__link">
			<BaseText variant="small-main" color="var(--Basic-Grey)">Партнерская сылка</BaseText>
			<BaseText>
				refculkapodpislon23_76.ru/ddqd20ej2e1k,
				<BaseIcon name="icon-copy" />
			</BaseText>
		</BaseColumn>
	</BaseCard>
	<BonusesList :items="history" :isPending="isPending" />
	<RightSlideModal
		:isVisible="isModalUserVisible"
		@close="
			() => {
				isModalUserVisible = false
				modalState = 'info'
			}
		"
	>
		<RightSlideModalContainer title="Партнерский договор" class="info-modal">
			<BaseColumn>
				<BaseCard :tag="BaseColumn" gap="12px">
					<BaseColumn gap="6px">
						<BaseText color="var(--Basic-Grey)" variant="small-main">Наименование</BaseText>
						<BaseText>ООО ромашка</BaseText>
					</BaseColumn>
					<BaseColumn gap="6px">
						<BaseText color="var(--Basic-Grey)" variant="small-main">ИНН</BaseText>
						<BaseText>787342723743</BaseText>
					</BaseColumn>
					<BaseColumn gap="6px">
						<BaseText color="var(--Basic-Grey)" variant="small-main">КПП</BaseText>
						<BaseText>3453453</BaseText>
					</BaseColumn>
					<BaseColumn gap="6px">
						<BaseText color="var(--Basic-Grey)" variant="small-main">ОГРН</BaseText>
						<BaseText>4534644643</BaseText>
					</BaseColumn>
					<BaseColumn gap="6px">
						<BaseText color="var(--Basic-Grey)" variant="small-main">Юредический адрес</BaseText>
						<BaseText>г. Екатеринбург, ул Народного 12 дом. 34</BaseText>
					</BaseColumn>
				</BaseCard>
				<BaseColumn>
					<BaseText variant="menu">Подписант договора</BaseText>
					<BaseCard :tag="BaseColumn">
						<BaseInput wFill placeholder="Фамилия" />
						<BaseInput wFill placeholder="Имя" />
						<BaseInput wFill placeholder="Отчество" />
						<BaseInput wFill placeholder="Должность" />
						<BaseInput wFill placeholder="Телефон" />
						<BaseInput wFill placeholder="E-mail" />
						<BaseInput wFill placeholder="Юридический адрес" />
					</BaseCard>
				</BaseColumn>
				<BaseColumn>
					<BaseText variant="menu">Банковские реквизиты</BaseText>
					<BaseCard :tag="BaseColumn">
						<BaseInput wFill placeholder="Наименование банка" />
						<BaseInput wFill placeholder="БИК" />
						<BaseInput wFill placeholder="Коресподенский счет" />
						<BaseInput wFill placeholder="Расчетный счет" />
					</BaseCard>
				</BaseColumn>
				<BaseButton>Отправить</BaseButton>
			</BaseColumn>
		</RightSlideModalContainer>
	</RightSlideModal>
</template>

<style scoped lang="scss">
.info-modal {
	max-width: 540px;
	width: 100%;
}
.documents-header {
	margin-top: 24px;
	&__balance {
		width: auto;
		p {
			white-space: nowrap;
		}
	}
	&__link {
		max-width: 301px;
		width: 100%;
		margin-left: auto;
	}
}
.documents-list {
	margin-top: 16px;
	flex: 1 1 0;
}
</style>
