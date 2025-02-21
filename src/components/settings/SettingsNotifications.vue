<script setup>
import QuestTooltip from '../global/QuestTooltip.vue'

const SETTINGS = [
	'Документ подписан',
	'Оплата по документу',
	'Отказ от подписания',
	'Баланс пополнен',
	'Баланс заканчивается',
	'Баланс закончился',
]
</script>

<template>
	<RightSlideModalContainer class="settings-notifications" title="Настройки уведомлений">
		<BaseCard class="settings-notifications-table" :padding="{ x: 0, y: 0 }" tag="table">
			<thead>
				<tr>
					<th></th>
					<BaseText isCentered tag="th" variant="small-main">Внутренние уведомления</BaseText>
					<BaseText isCentered tag="th" variant="small-main">Электронная почта</BaseText>
					<BaseText isCentered tag="th" variant="small-main">
						Telegram Bot
						<QuestTooltip class="settings-notifications-table__quest" />
					</BaseText>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in SETTINGS" :key="item">
					<BaseText class="settings-notifications-table__title" tag="td">
						{{ item }}
					</BaseText>
					<td><BaseSwitch /></td>
					<td><BaseSwitch /></td>
					<td><BaseSwitch /></td>
				</tr>
			</tbody>
		</BaseCard>
	</RightSlideModalContainer>
</template>

<style scoped lang="scss">
.settings-notifications {
	max-width: 600px;
	width: 100%;
}
.settings-notifications-table {
	border-collapse: collapse;
	width: 100%;
	thead > tr > th {
		padding: 12px 28px 12px 0px;
		border-bottom: 1px solid var(--Basic-Background);
		&:last-child {
			padding-right: 24px;
		}
		&:first-child {
			padding-left: 24px;
		}
	}
	tbody > tr > td {
		padding: 12px 28px 12px 0px;
		border-bottom: 1px solid var(--Basic-Background);
		&:first-child {
			padding-left: 24px;
			padding-right: 0;
		}
		&:last-child {
			padding-right: 24px;
		}
	}
	th {
		position: relative;
	}
	&__title {
		white-space: nowrap;
		text-align: left !important;
	}
	td {
		text-align: center;
		vertical-align: middle;
	}
	&__quest {
		position: absolute;
		right: 12px;
		top: 10px;
	}
}
</style>
