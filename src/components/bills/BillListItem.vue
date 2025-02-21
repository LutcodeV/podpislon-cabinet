<script setup>
defineProps({
	info: {
		type: Object,
		required: true,
	},
})
const isModalBillVisible = ref(false)
const isModalActVisible = ref(false)
</script>

<template>
	<tr class="bill-item">
		<td>
			<div class="bill-item__actions">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</td>
		<td>
			<p class="bill-item__date">16.08.2024 19:47</p>
		</td>
		<td>
			<button class="bill-item__title">
				Право использования программы для ЭВМ 'Подпислон тарифный план '10 документов'
			</button>
		</td>
		<td>
			<p class="bill-item__status">
				<StatusTag :status="30" />
				21.01.2024 16:23
			</p>
		</td>
		<td>
			<BaseText variant="small-main">По СБП</BaseText>
		</td>
		<td>
			<BaseRow gap="8px" @click="isModalBillVisible = true">
				<BaseIcon name="icon-pdf" />
				<BaseText variant="small-main">Счет-оферта №3456</BaseText>
			</BaseRow>
		</td>
		<td>
			<BaseRow gap="8px" @click="isModalActVisible = true">
				<BaseIcon name="icon-pdf" />
				<BaseText variant="small-main">Акт №3456</BaseText>
			</BaseRow>
		</td>
	</tr>

	<RightSlideModal :isVisible="isModalActVisible" @close="isModalActVisible = false">
		<RightSlideModalContainer class="info-modal" title="акт Сверки">
			<template #header-additional>
				<BaseButton class="info-modal__button">
					<BaseIcon name="download" />
					Скачать
				</BaseButton>
			</template>
			<img src="/assets/img/act.jpg" alt="" class="info-modal__img" />
		</RightSlideModalContainer>
	</RightSlideModal>
	<RightSlideModal :isVisible="isModalBillVisible" @close="isModalBillVisible = false">
		<RightSlideModalContainer class="info-modal" title="Счет-оферта № 5279">
			<template #header-additional>
				<BaseButton class="info-modal__button">
					<BaseIcon name="download" />
					Скачать
				</BaseButton>
			</template>
			<BaseColumn gap="32px">
				<BaseInfoBlock>
					ВНИМАНИЕ! Первый счет должен быть обязательно оплачен от той компании, на которую
					зарегистрирован личный кабинет в сервисе. Если оплата придет от другого юр. лица или ИП,
					деньги будут возвращены как ошибочный платеж. Назначение платежа брать из "назначения
					платежа".
				</BaseInfoBlock>
				<img src="/assets/img/bill.jpg" alt="" class="info-modal__img" />
			</BaseColumn>
		</RightSlideModalContainer>
	</RightSlideModal>
</template>

<style scoped lang="scss">
.info-modal {
	max-width: 570px;
	width: 100%;
	&__img {
		box-shadow: var(--Shadow-01);
	}
	&__button {
		margin-left: auto;
		width: 150px;
		height: 36px;
	}
}

.bill-item {
	& > * {
		@extend .f-small-main;
		padding: 12px 0;
		border-top: 1px solid var(--Basic-Background);
		box-sizing: content-box;
		padding-right: 16px;
		transition: 0.3s ease;
		&:first-child {
			padding-left: 24px;
			max-width: 14px;
			width: 14px;
		}
		&:last-child {
			padding-right: 32px;
		}
	}
	&:hover > * {
		background: var(--Basic-Background);
	}
	&__actions {
		display: flex;
		flex-direction: column;
		gap: 4px;
		cursor: pointer;
		max-width: 16px;
		span {
			width: 14px;
			height: 2px;
			border-radius: 4px;
			background: var(--Basic-Grey);
		}
	}
	&__title {
		cursor: pointer;
		transition: 0.3s ease;
		@include hover {
			color: var(--Basic-Branded);
		}
	}
	&__status {
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: flex-start;
	}
}
</style>
