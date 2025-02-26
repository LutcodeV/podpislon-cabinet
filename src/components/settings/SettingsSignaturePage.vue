<script setup>
import BaseColumn from '../global/BaseColumn.vue'
import BaseRow from '../global/BaseRow.vue'

const form = ref({
	phone: '',
	text: '',
	video: null,
	logo: null,
	logoLink: null,
})

const addLogo = (event) => {
	form.value.logo = event.target.files[0]
	form.value.logoLink = URL.createObjectURL(form.value.logo)
}
const deleteLogo = () => {
	form.value.logo = null
	form.value.logoLink = null
}
</script>

<template>
	<RightSlideModalContainer class="settings-signature" title="Страница подписания">
		<BaseRow gap="52px">
			<BaseCard :tag="BaseColumn" gap="32px" class="settings-signature__card">
				<BaseColumn tag="label" class="settings-signature-content__logo">
					<BaseColumn gap="6px">
						<BaseText>Логотип</BaseText>
						<BaseColumn gap="4px">
							<BaseText variant="small-main" color="var(--Basic-Grey)">
								Логотип должен быть в формате PNG.
							</BaseText>
							<BaseText variant="signatures" color="var(--Basic-Grey)">
								Размеры не больше 222px*100px, вес не более 50КБ
							</BaseText>
						</BaseColumn>
					</BaseColumn>
					<template v-if="!form.logo">
						<input
							type="file"
							@input="addLogo"
							accept="image/png"
							class="settings-signature-content__input"
						/>
						<BaseButton type="button">Загрузить лого</BaseButton>
					</template>
					<BaseCard v-else :tag="BaseRow" :padding="{ x: '16px', y: '12px' }" gap="12px" wFill>
						<BaseIcon name="icon-document" />
						<BaseText style="width: 100%" variant="small-main">{{ form.logo.name }}</BaseText>
						<BaseIcon @click="deleteLogo" name="icon-trash" />
					</BaseCard>
				</BaseColumn>
				<BaseColumn>
					<BaseColumn gap="12px">
						<BaseText>Телефон</BaseText>
						<BaseInput type="tel" v-model="form.phone" placeholder="+7 " wFill />
					</BaseColumn>
					<BaseColumn gap="12px">
						<BaseText>Текст над документом</BaseText>
						<BaseInput type="tel" placeholder="Текст" v-model="form.text" wFill />
					</BaseColumn>
					<BaseRow gap="12px" align="center">
						<BaseSwitch v-model="form.video" />
						<BaseText>Показывать инструкцию по подписанию документов</BaseText>
					</BaseRow>
				</BaseColumn>
			</BaseCard>
			<div class="settings-signature__preview">
				<img src="/assets/img/phone.png" alt="" />
				<div class="settings-signature-content">
					<div class="settings-signature-content__header">
						<img v-if="form.logo" :src="form.logoLink" alt="" />
						<div
							v-else
							class="settings-signature-content__skeleton settings-signature-content__skeleton--small"
						>
							Лого
						</div>
						<p class="settings-signature-content__phone" v-if="form.phone">{{ form.phone }}</p>
						<div
							v-else
							class="settings-signature-content__skeleton settings-signature-content__skeleton--small"
						>
							Телефон
						</div>
					</div>
					<div
						:class="`settings-signature-content__skeleton ${form.text ? 'settings-signature-content__skeleton--active' : ''}`"
					>
						{{ form.text ? form.text : 'Текст для клиента' }}
					</div>
					<div class="settings-signature-content__skeleton">
						<svg
							width="156"
							height="100"
							viewBox="0 0 156 100"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="47" height="2" rx="1" fill="#D6D6D6" />
							<rect y="10" width="63" height="2" rx="1" fill="#D6D6D6" />
							<rect y="30" width="156" height="2" rx="1" fill="#D6D6D6" />
							<rect y="40" width="128" height="2" rx="1" fill="#D6D6D6" />
							<rect y="50" width="138" height="2" rx="1" fill="#D6D6D6" />
							<rect x="134" width="22" height="2" rx="1" fill="#D6D6D6" />
							<rect x="146" y="10" width="10" height="2" rx="1" fill="#D6D6D6" />
							<rect y="70" width="156" height="30" rx="2" fill="#D6D6D6" />
						</svg>
					</div>
					<BaseColumn v-if="form.video" gap="8px" class="settings-signature-content__skeleton">
						<BaseText variant="signatures" color="var(--Basic-Dark)">
							Инструкция по подписанию
						</BaseText>
						<svg
							width="156"
							height="84"
							viewBox="0 0 156 84"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_434_15176)">
								<path
									d="M0 4C0 1.79086 1.79086 0 4 0H152C154.209 0 156 1.79086 156 4V80C156 82.2091 154.209 84 152 84H4C1.79086 84 0 82.2091 0 80V4Z"
									fill="#D6D6D6"
								/>
								<circle cx="78" cy="42" r="21" fill="#ECECEC" />
								<path d="M88 41.5L72.25 50.5933L72.25 32.4067L88 41.5Z" fill="#D6D6D6" />
							</g>
							<defs>
								<clipPath id="clip0_434_15176">
									<rect width="156" height="84" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</BaseColumn>
				</div>
			</div>
		</BaseRow>
	</RightSlideModalContainer>
</template>

<style scoped lang="scss">
.settings-signature-content {
	width: 212px;
	height: 430px;
	position: absolute;
	bottom: 54px;
	overflow: auto;
	left: 45px;
	border-radius: 0px 0px 26px 26px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 16px;
	svg {
		width: 100%;
	}
	&__logo {
		position: relative;
	}
	&__input {
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		position: absolute;
	}
	img {
		max-height: 24px;
		max-width: 68px;
	}
	&__phone {
		color: var(--Basic-Dark, #131414);
		font-family: 'Nunito Sans';
		font-size: 10px;
		font-style: normal;
		font-weight: 700;
		line-height: 106%; /* 10.6px */
	}
	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__skeleton {
		padding: 16px;
		min-height: 126px;
		border-radius: 18px;
		background: #ececec;
		color: var(--Basic-Grey, #a7a7a7);
		font-family: 'Nunito Sans';
		font-size: 8px;
		font-style: normal;
		font-weight: 400;
		line-height: 142%; /* 11.36px */
		&--active {
			color: var(--Basic-Dark);
		}
		&--small {
			padding: 8px;
			min-height: 24px;
			max-height: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			max-width: 82px;
			&:first-child {
				max-width: 68px;
			}
		}
	}
	&::-webkit-scrollbar {
		width: 0;
	}
}
.settings-signature {
	max-width: 811px;
	width: 100%;
	&__preview {
		max-width: 305px;
		position: relative;
		width: 100%;
		margin-top: -30px;
	}
	&__card {
		max-width: 350px;
	}
}
</style>
