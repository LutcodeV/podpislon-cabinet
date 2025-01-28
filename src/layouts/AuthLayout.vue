<script setup></script>

<template>
	<div class="auth">
		<div class="auth__left">
			<img src="/assets/img/logo-dark.svg" alt="" class="auth__logo" />
			<slot name="left"></slot>
		</div>
		<div class="auth__right">
			<div class="auth__right-sphere auth__right-sphere--yellow"></div>
			<div class="auth__right-sphere auth__right-sphere--white"></div>
			<slot name="right"></slot>
		</div>
	</div>
</template>

<style scoped lang="scss">
.auth {
	display: flex;
	max-height: 100vh;
	min-height: 100vh;
	overflow: auto;
	background: var(--Basic-Dark);
	&__right {
		overflow: hidden;
		width: 100%;
		z-index: 1;
		position: relative;
	}
	&__right-sphere {
		position: absolute;
		border-radius: 50%;
		width: 561px;
		height: 561px;
		opacity: 0.1;
		z-index: -1;
		filter: blur(87px);
		&--yellow {
			background: var(--Basic-Branded);
			left: 148px;
			bottom: -148px;
		}
		&--white {
			background: white;
			left: 430px;
			bottom: -360px;
		}
	}
	&__left {
		display: flex;
		flex-direction: column;
		max-height: 100vh;
		overflow: auto;
		padding: 52px;
		background: #fff;
		max-width: 402px;
		width: 100%;
	}
	&__logo {
		margin: 0 auto;
		max-width: 145px;
	}
	:deep(.auth__title) {
		@extend .f-heading;
		margin-top: 72px;
		text-align: center;
		text-transform: uppercase;
		& + * {
			margin-top: 24px;
		}
		& + .auth__subtitle {
			margin-top: 12px;
		}
	}
	:deep(.auth__subtitle) {
		@extend .f-main-text;
		text-align: center;
		& + * {
			margin-top: 24px;
		}
	}
	:deep(.auth__subtitle--small) {
		@extend .f-small-main;
		color: var(--Basic-Grey);
		mark {
			color: var(--Basic-Branded);
		}
	}
	:deep(.auth__subtitle--big) {
		@extend .f-menu;
		color: var(--Basic-Grey);
		margin-top: 24px !important;
	}
}
</style>
