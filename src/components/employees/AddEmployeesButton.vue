<script setup>
import { ref } from 'vue'
import RightSlideModal from '../global/RightSlideModal.vue'
import BaseColumn from '../global/BaseColumn.vue'

const isModalVisible = ref(false)
const closeModal = () => {
	isModalVisible.value = false
}
const LIST_DEPARTAMENTS = ['Все', 'Подписан', 'Просмотрен', 'Аннулирован']

const FormData = ref({ email: '', departament: '' })
</script>

<template>
	<button :class="`button ${$attrs.class}`" @click="isModalVisible = true">
		<span class="button__plus" />
		Добавить сотрудника
	</button>

	<RightSlideModal :isVisible="isModalVisible" @close="closeModal">
		<RightSlideModalContainer class="info-modal" title="Приглашение сотрудников">
			<BaseCard :tag="BaseColumn" gap="12px" wFill>
				<BaseText color="var(--Basic-Grey)" variant="small-main">
					Введите  E-mail  адреса сотрудников через запятую или каждый с новой строки.
				</BaseText>
				<BaseInput v-model="FormData.email" placeholder="E-mail" wFill />
				<base-select
					v-model="FormData.departament"
					placeholder="Отдел"
					wFill
					:list="LIST_DEPARTAMENTS"
				/>
				<BaseButton class="info-modal__button">Пригласить</BaseButton>
			</BaseCard>
		</RightSlideModalContainer>
	</RightSlideModal>
</template>

<style scoped lang="scss">
.info-modal {
	width: 100%;
	max-width: 540px;
	&__button {
		width: 148px;
		height: 44px;
	}
}
.button {
	@extend .f-main-text;
	display: flex;
	align-items: center;
	gap: 12px;
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
</style>
