<script setup></script>

<template>
	<footer class="footer">
		<div class="footer__socials">
			<a href="#" target="_blank" class="footer__social"><BaseIcon name="vk" /></a>
			<a href="#" target="_blank" class="footer__social"><BaseIcon name="youtube" /></a>
			<a href="#" target="_blank" class="footer__social"><BaseIcon name="rutube" /></a>
			<a href="#" target="_blank" class="footer__social"><BaseIcon name="telegram" /></a>
		</div>
		<div class="footer__agreements">
			<a href="#" target="_blank" class="footer__link">Политика конфиденциальности</a>
			<a href="#" target="_blank" class="footer__link">Оферта</a>
		</div>
		<p class="footer__copyright">©2022-2024 ООО “Подпислон”</p>
	</footer>
</template>

<style scoped lang="scss">
.footer {
	margin-top: auto;
	display: flex;
	align-items: center;
	padding-top: 16px;
	&__socials {
		align-items: center;
		display: flex;
		gap: 20px;
	}
	&__social {
		color: #a7a7a7;
	}
	&__agreements {
		margin-left: 72px;
		display: flex;
		align-items: center;
		gap: 72px;
	}
	&__link {
		@extend .f-small-main !optional;
		color: #a7a7a7;
		text-decoration: underline;
	}
	&__copyright {
		@extend .f-small-main !optional;
		margin-left: auto;
		color: #a7a7a7;
	}
}
</style>
