<script setup>
import StatusTag from '../global/StatusTag.vue'
import CabinetDocumentDetails from './CabinetDocumentDetails.vue'

defineProps({
	info: {
		type: Object,
		required: true,
	},
})

const isModalVisible = ref(false)
const openModal = () => {
	isModalVisible.value = true
}
const closeModal = () => {
	isModalVisible.value = false
}
</script>

<template>
	<tr class="documents-item">
		<td>
			<div class="documents-item__actions">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</td>
		<td>
			<BaseRow gap="12px" align="center">
				<svg
					width="26"
					height="26"
					viewBox="0 0 26 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					v-if="info.isMain"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M14.5564 4.62984C13.8274 3.51401 12.172 3.51401 11.4429 4.62984L7.7596 10.2632L4.9451 8.66743C3.5346 7.86793 1.83919 9.12026 2.22052 10.6781L4.13369 18.4792C4.17662 18.651 4.27597 18.8034 4.41582 18.912C4.55568 19.0206 4.72794 19.0792 4.90502 19.0783H21.0944C21.2714 19.0792 21.4437 19.0206 21.5835 18.912C21.7234 18.8034 21.8228 18.651 21.8657 18.4792L23.7778 10.6792C24.1602 9.11918 22.4648 7.86793 21.0543 8.66743L18.2398 10.2621L14.5564 4.62984ZM13.2218 5.47701C13.1975 5.44036 13.1645 5.4103 13.1257 5.3895C13.087 5.36871 13.0437 5.35782 12.9997 5.35782C12.9557 5.35782 12.9124 5.36871 12.8737 5.3895C12.8349 5.4103 12.8019 5.44036 12.7776 5.47701L8.68585 11.7354C8.57375 11.9044 8.40178 12.0246 8.20458 12.0719C8.00738 12.1191 7.7996 12.0899 7.6231 11.99L4.15319 10.0248C3.95169 9.91109 3.70902 10.0898 3.76427 10.3119L5.5301 17.515H20.4693L22.2351 10.3119C22.2893 10.0898 22.0477 9.91109 21.8451 10.0248L18.3763 11.99C18.1999 12.0895 17.9924 12.1186 17.7954 12.0714C17.5985 12.0241 17.4267 11.9041 17.3146 11.7354L13.2218 5.47701Z"
						fill="#F79900"
					/>
					<path
						d="M5.589 20.6445C5.48544 20.6438 5.38274 20.6635 5.28678 20.7025C5.19082 20.7415 5.10348 20.799 5.02974 20.8717C4.956 20.9444 4.89731 21.031 4.85702 21.1264C4.81673 21.2218 4.79563 21.3242 4.79492 21.4278C4.79492 21.86 5.15134 22.21 5.589 22.21H20.409C20.618 22.2114 20.819 22.1298 20.9679 21.9832C21.1168 21.8365 21.2014 21.6368 21.2031 21.4278C21.2024 21.3242 21.1813 21.2218 21.141 21.1264C21.1007 21.031 21.042 20.9444 20.9683 20.8717C20.8945 20.799 20.8072 20.7415 20.7112 20.7025C20.6153 20.6635 20.5126 20.6438 20.409 20.6445H5.589Z"
						fill="#F79900"
					/>
				</svg>
				<BaseText>ООО Василий пупкин транс длиное название</BaseText>
			</BaseRow>
		</td>
		<td>
			<BaseText>0987654398</BaseText>
		</td>
		<td>
			<StatusTag :status="1001" />
		</td>
		<td>
			<BaseText weight="600">10 000 шт.</BaseText>
		</td>
		<td>
			<BaseText>Менеджер по продажам</BaseText>
		</td>
	</tr>
	<CabinetDocumentDetails :is-modal-visible="isModalVisible" @close="closeModal" :info="info" />
</template>

<style scoped lang="scss">
.documents-item {
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
