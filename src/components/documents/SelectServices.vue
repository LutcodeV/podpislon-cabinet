<script setup>
const props = defineProps({
	modelValue: {
		type: Array,
		required: true,
	},
	currentPrice: {
		type: Number,
		default: 0,
	},
	selectedBank: {
		type: String,
		default: '',
	},
})

const emit = defineEmits(['update:modelValue', 'update:selectedBank', 'update:currentPrice'])

const SERVICES_MOCK = [
	{
		id: 1,
		service: 'Услуга по подписи документа с каким то важным дядей',
		price: '120 000 руб.',
	},
	{
		id: 2,
		service: 'Услуга по подписи документа с каким то важным дядей',
		price: '220 000 руб.',
	},
	{
		id: 3,
		service: 'Услуга по подписи документа с каким то важным дядей',
		price: '320 000 руб.',
	},
]
const searchValue = ref('')
const selectedServices = ref(props.modelValue)

const isCreateUser = ref(false)
const createdService = ref({
	price: '',
	service: '',
})
const bank = ref(props.selectedBank)
const bankList = ref(['Т-банк', 'Сбер', 'Альфа'])
const price = computed(() => {
	return selectedServices?.value?.reduce((total, current) => {
		return total + Number(current?.price?.replace(/\D/g, ''))
	}, 0)
})
watch(price, () => emit('update:currentPrice', price.value))
watch(bank, () => emit('update:selectedBank', bank.value))
watch(selectedServices.value, () => emit('update:modelValue', selectedServices.value))
</script>

<template>
	<div class="services-select-group">
		<BaseSearch
			@selectOption="selectedServices.push($event)"
			v-model="searchValue"
			:list="
				SERVICES_MOCK.filter((service) => {
					return (
						service.service.toLowerCase().includes(searchValue.toLowerCase()) &&
						!selectedServices.includes(service)
					)
				})
			"
			placeholder="Поиск товаров и услуг"
		>
			<template #option="{ item }">
				{{ item.service }}
			</template>
		</BaseSearch>
		<BaseCard
			:padding="{ y: '14px' }"
			isDashed
			isCentered
			class="services-select-group__add"
			@click="isCreateUser = true"
		>
			<BaseText variant="small-main" v-if="!isCreateUser">
				+ Добавить товар или услугу вручную
			</BaseText>
			<EditServiceForm
				v-else
				:info="createdService"
				@close="isCreateUser = false"
				@save="selectedServices.push($event)"
				@click.stop
			/>
		</BaseCard>
		<SelectedServiceDocument
			@delete="selectedServices.splice(selectedServices.indexOf($event), 1)"
			v-for="service in selectedServices"
			:key="service.id"
			:info="service"
			editable
		/>
		<BaseText weight="400" class="services-select-group__total">
			Итого
			<BaseText variant="heading">{{ price }} руб.</BaseText>
		</BaseText>
	</div>
	<hr />
	<BaseSelect
		placeholder="Выбор платежной системы"
		class="balance-group__select"
		:list="bankList"
		v-model="bank"
	></BaseSelect>
	<hr />
</template>

<style scoped lang="scss">
.services-select-group {
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 24px;
	&__total {
		display: flex;
		align-items: center;
		gap: 24px;
	}
	&__add {
		color: var(--Basic-Grey);
		text-decoration: underline;
		cursor: pointer;
	}
	&__company {
		display: flex;
		align-items: center;
		gap: 16px;
	}
}
</style>
