<script setup>
import Popper from 'vue3-popper'

defineProps({
	info: {
		type: Object,
		required: true,
	},
})
</script>

<template>
	<Popper hover offsetSkid="50" @click.stop>
		<div class="document-users">
			<p class="document-users__title">
				{{
					info.users.length > 1
						? `${info.users[0].full_name} +${info.users.length - 1}`
						: info.users[0].full_name
				}}
			</p>
		</div>
		<template #content>
			<div class="document-users__list-wrapper">
				<div class="document-users__list">
					<div class="document-users-item" v-for="user in info.users">
						<BaseIcon name="profile" class="document-users-item__icon" />
						<div class="document-users-item__col">
							<p class="document-users-item__title">{{ user.full_name }}</p>
							<p class="document-users-item__phone">
								<span>Тел.</span>
								{{ user.phone || '-' }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</template>
	</Popper>
</template>

<style scoped lang="scss">
.document-users {
	@extend .f-main-text;
	transition: 0.3s ease;
	position: relative;
	cursor: pointer;
	&__title {
		@extend .f-main-text;
	}
	&__list-wrapper {
		padding-top: 16px;
		// position: absolute;
		// top: 100%;
		// left: 64px;
		padding-left: 36px;
		// opacity: 0;
		// z-index: 1;
		// pointer-events: none;
		transition: 0.3s ease;
		transform: translateY(10px);
	}
	&__list {
		border-radius: 4px;
		min-width: 200px;
		background: #fff;
		box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
	}
	@include hover {
		color: var(--Basic-Branded);
		.document-users__list-wrapper {
			opacity: 1;
			pointer-events: all;
			transform: translateY(0);
		}
	}
}
.document-users-item {
	display: flex;
	gap: 8px;
	padding: 12px;
	&__col {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	&__title {
		@extend .f-small-main;
		color: var(--Basic-Grey);
	}
	&__icon {
		color: var(--Basic-Grey) !important;
	}
	&__phone {
		@extend .f-signatures;
		color: var(--Basic-Dark);
		display: flex;
		gap: 10px;
		span {
			color: var(--Basic-Grey) !important;
		}
	}
	& + & {
		border-top: 1px solid var(--Basic-Background);
	}
}
</style>
