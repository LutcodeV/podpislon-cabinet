<script setup>
defineProps({
	info: {
		type: Object,
		required: true,
	},
})

const isOpen = ref(false)
</script>

<template>
	<div :class="`knowledge-chapter ${isOpen ? 'knowledge-chapter--open' : ''}`">
		<button class="knowledge-chapter__header" @click="isOpen = !isOpen">
			<BaseIcon name="arrow-chevron-down" />
			<BaseText variant="menu">{{ info.title }}</BaseText>
		</button>
		<div class="knowledge-chapter__content-wrapper">
			<div class="knowledge-chapter__content">
				<RouterLink
					v-for="item in info.items"
					:key="item.link"
					:to="item.link"
					class="knowledge-chapter__link"
				>
					<BaseText color="var(--Basic-Dark)" variant="main-text">{{ item.title }}</BaseText>
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.knowledge-chapter {
	&__header {
		display: flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;
		.icon {
			margin-top: -2px;
			margin-left: -10px;
			transition: 0.3s ease;
		}
	}
	&__content-wrapper {
		display: grid;
		grid-template-rows: 0fr;
		transition: 0.3s ease;
		overflow: hidden;
		padding-left: 14px;
	}
	&__link {
		.text {
			transition: 0.3s ease;
		}
		&.router-link-active {
			.text {
				text-decoration: underline;
				color: var(--Basic-Branded) !important;
			}
		}
	}
	&__content {
		transition: 0.3s ease;
		overflow: hidden;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	&--open {
		.knowledge-chapter__content-wrapper {
			grid-template-rows: 1fr;
			margin-top: 16px;
		}
		.knowledge-chapter__header .icon {
			transform: rotate(180deg);
		}
	}
}
</style>
