<script setup>
const form = ref({
	email: '',
})

const emit = defineEmits(['submit'])

const submitHandler = () => {
	emit('submit', form.value)
}
</script>

<template>
	<form class="form" @submit.prevent="submitHandler">
		<base-input placeholder="Email" type="email" :required="true" v-model="form.email" required />
		<base-button>Отправить</base-button>
	</form>
</template>

<style scoped lang="scss">
.form {
	display: flex;
	flex-direction: column;
	gap: 24px;
}
</style>
