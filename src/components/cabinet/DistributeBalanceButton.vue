<script setup>
import { ref } from 'vue'
import RightSlideModal from '../global/RightSlideModal.vue'
import BaseButton from '../global/BaseButton.vue'
import BaseColumn from '../global/BaseColumn.vue'
import BaseSelect from '../global/BaseSelect.vue'

const isModalVisible = ref(false)
const closeModal = () => {
	isModalVisible.value = false
}
const FROM_LIST = ['Клиент', 'Сотрудник', 'Компания']
const TO_LIST = ['Клиент', 'Сотрудник', 'Компания']
const form = ref({
	from: '',
	to: '',
})
</script>

<template>
	<button :class="`button-data ${$attrs.class}`" @click="isModalVisible = true">
		Запросить персданные
	</button>

	<RightSlideModal :isVisible="isModalVisible" @close="closeModal">
		<RightSlideModalContainer class="info-modal" title="Распределение Баланса">
			<BaseCard :tag="BaseColumn" wFill>
				<BaseRow wFill>
					<BaseSelect
						class="info-modal__select"
						:list="FROM_LIST"
						placeholder="Откуда"
						v-model="form.from"
						wFill
					></BaseSelect>
					<BaseInput placeholder="Кол-во" class="info-modal__input" />
				</BaseRow>
				<BaseRow wFill>
					<BaseSelect
						class="info-modal__select"
						:list="TO_LIST"
						placeholder="Куда"
						v-model="form.to"
						wFill
					></BaseSelect>
					<BaseInput placeholder="Кол-во" class="info-modal__input" />
				</BaseRow>
				<BaseButton class="info-modal__button">Перевести</BaseButton>
			</BaseCard>
		</RightSlideModalContainer>
	</RightSlideModal>
</template>

<style scoped lang="scss">
.info-modal {
	width: 100%;
	max-width: 540px;
	&__input {
		width: 104px;
		max-width: 104px;
		min-width: 104px;
	}
	&__button {
		width: 148px;
		height: 44px;
	}
}
.button-data {
	@extend .f-main-text;
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 5px 12px;
	background: transparent;
	border: 1px solid var(--Basic-Branded);
	border-radius: 4px;
	color: var(--Basic-Branded);
	transition: 0.3s ease;
	&:hover {
		background: #f9ac2e;
		border-color: #f9ac2e;
		color: #fff;
	}
	&:active {
		background: #ea950c;
		border-color: #ea950c;
	}
}
</style>
