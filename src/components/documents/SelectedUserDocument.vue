<script setup>
const props = defineProps({
	info: {
		type: Object,
		required: true,
	},
	editable: {
		type: Boolean,
		default: false,
	},
	isCompany: {
		type: Boolean,
		default: false,
	},
})
const emit = defineEmits(['delete'])

const isEdit = ref(false)
</script>

<template>
	<BaseCard type="small" class="selected-service">
		<div class="selected-service__header">
			<BaseIcon size="16" name="case" class="selected-service__icon" v-if="isCompany" />
			<BaseIcon
				size="16"
				name="profile"
				class="selected-service__icon selected-service__icon--profile"
				v-else
			/>
			<div class="selected-service__column">
				<BaseText weight="400" v-if="isCompany">
					{{ info.company_name }}
				</BaseText>
				<template v-else>
					<BaseText weight="400">
						{{ info.first_name }} {{ info.surname }} {{ info.last_name }}
					</BaseText>
					<BaseText>{{ info.phone }}</BaseText>
				</template>
			</div>
			<button class="selected-service__button" @click="isEdit = !isEdit" v-if="editable">
				<BaseIcon size="16" name="edit" />
			</button>
			<button class="selected-service__button" @click="$emit('delete')" v-if="editable">
				<BaseIcon size="16" name="trash" />
			</button>
		</div>
		<div
			:class="`selected-service__edit selected-service__edit--${isEdit ? 'active' : ''}`"
			v-if="editable"
		>
			<div class="selected-service__edit-content">
				<EditUserForm @close="isEdit = false" :info="info" />
			</div>
		</div>
	</BaseCard>
</template>

<style scoped lang="scss">
.selected-service {
	display: flex;
	flex-direction: column;
	padding: 0 !important;
	&__icon {
		margin-right: 16px;
		&--profile {
			color: var(--Basic-Branded);
		}
	}
	&__column {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 8px 0;
	}
	&__button {
		cursor: pointer;
		margin-top: -12px;
		margin-bottom: -12px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px 14px;
		margin-top: -12px;
		margin-bottom: -12px;
		color: var(--Basic-Grey);
		border-left: 1px solid var(--Basic-Background);
		&:not(:last-child) {
			margin-left: auto;
		}
		&:hover {
			color: var(--Basic-Dark);
		}
	}
	&__header {
		display: flex;
		align-items: center;
		padding: 0px 0px 0px 16px;
	}
	&__edit {
		padding: 0px 24px;
		display: grid;
		grid-template-rows: 0fr;
		flex-direction: column;
		border-top: 1px solid var(--Basic-Background);
		transition: 0.3s ease;
		&--active {
			padding: 24px;
			grid-template-rows: 1fr;
		}
		&-content {
			display: flex;
			flex-direction: column;
			overflow: hidden;
			transition: 0.3s ease;
			height: 100%;
		}
	}
}
</style>
