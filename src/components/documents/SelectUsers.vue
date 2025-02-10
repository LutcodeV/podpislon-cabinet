<script setup>
const props = defineProps({
	modelValue: {
		type: Array,
		required: true,
	},
})

const emit = defineEmits(['update:modelValue'])

const USERS_MOCK = [
	{
		id: 1,
		first_name: 'Иван',
		last_name: 'Иванов',
		surname: 'Иванович',
		phone: '+7 (999) 999-99-99',
	},
	{
		id: 2,
		first_name: 'Петр',
		last_name: 'Петров',
		surname: 'Петрович',
		phone: '+7 (999) 999-99-99',
	},
	{
		id: 3,
		first_name: 'Сидор',
		last_name: 'Сидоров',
		surname: 'Сидорович',
		phone: '+7 (999) 999-99-99',
	},
]
const searchValue = ref('')

const selectedUsers = ref(props.modelValue)

const isCreateUser = ref(false)
const createdUser = ref({
	first_name: '',
	last_name: '',
	surname: '',
	phone: '',
})

watch(selectedUsers.value, () => emit('update:modelValue', selectedUsers.value))
</script>

<template>
	<div class="user-select-group">
		<BaseInfoBlock>
			До первой оплаты ваш личный кабинет работает в тестовом режиме. Вы можете полноценно
			тестировать работу сервиса, но документы не будут иметь юридическую силу и на них будет
			наноситься водяной знак “Образец”.
		</BaseInfoBlock>
		<SelectedUserDocument
			:info="{
				company_name:
					'ООО “Водоочистные системы непрерывного цикла водоочистки” системы непрерывного цикла водоочистки”',
			}"
			is-company
		/>
		<SelectedUserDocument
			@delete="selectedUsers.splice(selectedUsers.indexOf($event), 1)"
			v-for="user in selectedUsers"
			:key="user.id"
			:info="user"
			editable
		/>
	</div>
	<hr />
	<div class="user-select-group">
		<BaseSearch
			@selectOption="selectedUsers.push($event)"
			v-model="searchValue"
			:list="
				USERS_MOCK.filter((user) => {
					let name = `${user.first_name} ${user.last_name} ${user.surname}`
					return (
						name.toLowerCase().includes(searchValue.toLowerCase()) && !selectedUsers.includes(user)
					)
				})
			"
			placeholder="Поиск подписанта"
		>
			<template #option="{ item }">
				{{ item.last_name }} {{ item.first_name }} {{ item.surname }}
			</template>
		</BaseSearch>
		<BaseCard
			:padding="{ y: '14px' }"
			isDashed
			isCentered
			class="user-select-group__add"
			@click="isCreateUser = true"
		>
			<BaseText variant="small-main" v-if="!isCreateUser"> + Добавить подписанта вручную </BaseText>
			<EditUserForm
				v-else
				:info="createdUser"
				@close="isCreateUser = false"
				@save="selectedUsers.push($event)"
				@click.stop
			/>
		</BaseCard>
	</div>
</template>

<style scoped lang="scss">
.user-select-group {
	display: flex;
	flex-direction: column;
	gap: 24px;
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
