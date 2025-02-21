<script setup>
import { ref } from 'vue'
import RightSlideModal from '../global/RightSlideModal.vue'
import BaseDatepicker from '../global/BaseDatepicker.vue'
import BaseButton from '../global/BaseButton.vue'

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
	<button :class="`button-data ${$attrs.class}`" @click="isModalVisible = true">
		Запросить персданные
	</button>

	<RightSlideModal :isVisible="isModalVisible" @close="closeModal">
		<RightSlideModalContainer class="info-modal" title="Запрос данных клиента">
			<BaseColumn>
				<BaseText variant="small-main">
					Отправьте ссылку клиенту, чтобы запросить у него персональные данные для составления
					документов. После заполнения клиентом формы, данные будут добавлены в систему.
				</BaseText>
				<BaseCard>
					<BaseColumn>
						<BaseInput placeholder="Ссылка" value="http://podoislon.ru/pd/fdsertkdcve23_32" />
					</BaseColumn>
					<BaseButton class="info-modal__button">Скопировать</BaseButton>
				</BaseCard>
			</BaseColumn>
		</RightSlideModalContainer>
	</RightSlideModal>
</template>

<style scoped lang="scss">
.info-modal {
	width: 100%;
	max-width: 440px;
	&__button {
		margin-top: 24px;
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
