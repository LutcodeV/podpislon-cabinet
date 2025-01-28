<script setup></script>

<template>
	<label class="checkbox">
		<input type="checkbox" class="checkbox__input" :required="$attrs.required" />
		<span class="checkbox__box">
			<svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.5 3L2.01511 5.65145C2.21743 6.0055 2.73568 5.98151 2.90442 5.61028L5 1"
					stroke="white"
					stroke-linecap="round"
				/>
			</svg>
		</span>
		<span class="checkbox__text"><slot></slot></span>
	</label>
</template>

<style scoped lang="scss">
.checkbox {
	display: flex;
	align-items: flex-start;
	gap: 12px;
	cursor: pointer;
	position: relative;

	&__input {
		position: absolute;
		width: 16px;
		height: 16px;
		opacity: 0;
	}

	&__box {
		width: 16px;
		height: 16px;
		min-width: 16px;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: inset 0px 0px 0px 1px var(--Basic-Grey);
		transition: 0.3s ease;
		position: relative;
		svg {
			position: relative;
			z-index: 2;
		}
		&::before {
			content: '';
			width: 11px;
			height: 11px;
			position: absolute;
			border-radius: 2px;
			opacity: 0;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%) scale(0.7);
			background: var(--Basic-Branded);
			transition:
				opacity 0.3s ease,
				transform 0.3s ease;
		}
	}

	&__input:checked + &__box::before {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
	}
	&__input:checked + &__box {
		box-shadow: inset 0px 0px 0px 1px var(--Basic-Branded);
	}
	&__input:checked ~ &__text {
		color: var(--Basic-Dark);
	}

	&__text {
		@extend .f-signatures;
		transition: 0.3s ease;
		color: var(--Basic-Grey);
		:deep(a) {
			color: var(--Basic-Branded);
			text-decoration: underline;
		}
	}

	@include hover {
		.checkbox__box {
			box-shadow: inset 0px 0px 0px 1px var(--Basic-Branded);
		}
		.checkbox__text {
			color: var(--Basic-Dark);
		}
	}
}
</style>
