<script setup>
import { ref } from 'vue'
import RightSlideModal from '../global/RightSlideModal.vue'
import BaseDatepicker from '../global/BaseDatepicker.vue'

const isModalVisible = ref(false)
const closeModal = () => {
	isModalVisible.value = false
}
const date = ref({
	start: null,
	end: null,
})
</script>

<template>
	<button :class="`button ${$attrs.class}`" @click="isModalVisible = true">
		<span class="button__plus" />
		Добавить клиента
	</button>

	<RightSlideModal :isVisible="isModalVisible" @close="closeModal">
		<RightSlideModalContainer class="info-modal" title="Добавление клиента">
			<BaseCard>
				<BaseColumn>
					<BaseInput placeholder="Фамилия" />
					<BaseInput placeholder="Имя" />
					<BaseInput placeholder="Отчество" />
					<BaseInput placeholder="Телефон" />
					<BaseInput placeholder="E-mail" />
					<BaseInput placeholder="Серия и номер паспорта" />
					<BaseInput placeholder="Дата выдачи" />
					<BaseInput placeholder="Органы выдачи" />
					<BaseInput placeholder="Адрес регистрации" />
				</BaseColumn>
				<BaseButton class="info-modal__button">Сохранить</BaseButton>
			</BaseCard>
		</RightSlideModalContainer>
	</RightSlideModal>
</template>

<style scoped lang="scss">
.info-modal {
	width: 100%;
	max-width: 540px;
	&__button {
		margin-top: 24px;
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
