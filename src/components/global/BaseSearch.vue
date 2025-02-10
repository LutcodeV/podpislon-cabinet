<script setup>
const props = defineProps({
	list: {
		type: Array,
		required: true,
	},
	modelValue: {
		type: String,
		default: '',
	},
})

const emit = defineEmits(['selectOption', 'update:modelValue'])

const refInput = ref(null)
const refList = ref(null)
const value = ref(props.modelValue)
const isOpen = ref(false)
const boundingRect = ref(null)
const openList = () => {
	isOpen.value = !isOpen.value
	boundingRect.value = refInput.value.refLabel.getBoundingClientRect()
}

const windowClick = (e) => {
	if (
		!e.composedPath().includes(refInput.value.refLabel) &&
		!e.composedPath().includes(refList.value)
	) {
		isOpen.value = false
	}
}

const selectItem = (item) => {
	emit('selectOption', item)
	emit('update:modelValue', '')
	value.value = ''
	isOpen.value = false
}

onMounted(() => {
	document.addEventListener('click', windowClick)
})
onUnmounted(() => {
	document.removeEventListener('click', windowClick)
})
</script>

<template>
	<base-input
		v-model="value"
		ref="refInput"
		:placeholder="$attrs.placeholder || 'Выберите'"
		@update:modelValue="$emit('update:modelValue', value)"
		@focus="openList"
		:class="`search ${$attrs.class || ''}`"
		:disabled="$attrs.disabled"
	>
		<template #postfix>
			<base-icon size="24" class="search__icon" name="search" />
		</template>
	</base-input>
	<Teleport to="body">
		<div
			class="list"
			v-if="isOpen"
			ref="refList"
			:style="{
				left: boundingRect.left + 'px',
				top: boundingRect.top + boundingRect.height + 8 + 'px',
				maxWidth: boundingRect.width + 'px',
			}"
		>
			<div class="list__container">
				<button class="list__item" v-for="item in list" :key="item" @click="selectItem(item)">
					<slot name="option" :item="item"></slot>
				</button>
			</div>
		</div>
	</Teleport>
</template>

<style scoped lang="scss">
.search {
	cursor: pointer;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08) inset;
	&__icon {
		margin: auto 0;
		color: var(--Basic-Grey);
	}
}
.list {
	position: absolute;
	z-index: 1000;
	border-radius: 4px;
	background: #fff;
	box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
	animation: open 0.3s ease;
	width: 100%;
	&__container {
		display: flex;
		flex-direction: column;
		padding: 8px 0;
	}
	&__item {
		@extend .f-main-text;
		padding: 16px;
		color: var(--Basic-Dark);
		text-align: left;
		transition: 0.3s ease;
		cursor: pointer;
		&:hover {
			text-decoration: underline;
			color: var(--Basic-Branded);
		}
	}
}
@keyframes open {
	from {
		transform: translateY(10px);
		opacity: 0;
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
