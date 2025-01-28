import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeLayoutView.vue'
import DocumentsView from '@/views/DocumentsView.vue'
import ClientsView from '@/views/ClientsView.vue'
import PaymentsView from '@/views/PaymentsView.vue'
import ProductsView from '@/views/ProductsView.vue'
import TariffView from '@/views/TariffView.vue'
import EmployeesView from '@/views/EmployeesView.vue'
import SettingsView from '@/views/SettingsView.vue'
import KnowledgeView from '@/views/knowledgeView.vue'
import PartnersView from '@/views/PartnersView.vue'
import BonusesView from '@/views/BonusesView.vue'
import LoginView from '@/views/LoginView.vue'
import PasswordRecoveryView from '@/views/PasswordRecoveryView.vue'
import RegistrationView from '@/views/RegistrationView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			redirect: { name: 'documents' },
			component: HomeView,
			children: [
				{
					path: '/home/documents',
					name: 'documents',
					component: DocumentsView,
				},
				{
					path: '/home/clients',
					name: 'clients',
					component: ClientsView,
				},
				{
					path: '/home/payments',
					name: 'payments',
					component: PaymentsView,
				},
				{
					path: '/home/products',
					name: 'products',
					component: ProductsView,
				},
			],
		},
		{
			path: '/tariff',
			name: 'tariff',
			component: TariffView,
		},
		{
			path: '/employees',
			name: 'employees',
			component: EmployeesView,
		},
		{
			path: '/settings',
			name: 'settings',
			component: SettingsView,
		},
		{
			path: '/knowledge',
			name: 'knowledge',
			component: KnowledgeView,
		},
		{
			path: '/partners',
			name: 'partners',
			component: PartnersView,
		},
		{
			path: '/bonuses',
			name: 'bonuses',
			component: BonusesView,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView,
			meta: { layout: 'null' },
		},
		{
			path: '/password-recovery',
			name: 'password-recovery',
			component: PasswordRecoveryView,
			meta: { layout: 'null' },
		},
		{
			path: '/registration',
			name: 'registration',
			component: RegistrationView,
			meta: { layout: 'null' },
		},
	],
})

export default router
