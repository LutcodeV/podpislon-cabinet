import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeLayoutView.vue'
import DocumentsView from '@/views/DocumentsView.vue'
import ClientsView from '@/views/ClientsView.vue'
import PaymentsView from '@/views/PaymentsView.vue'
import ProductsView from '@/views/ProductsView.vue'
import TariffView from '@/views/TariffView.vue'
import EmployeesView from '@/views/EmployeesListView.vue'
import KnowledgeView from '@/views/KnowledgeView.vue'
import PartnersView from '@/views/PartnersView.vue'
import BonusesView from '@/views/BonusesLayoutView.vue'
import LoginView from '@/views/LoginView.vue'
import PasswordRecoveryView from '@/views/PasswordRecoveryView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import BalanceView from '@/views/BalanceView.vue'
import BillsView from '@/views/BillsView.vue'
import KnowledgePageView from '@/views/KnowledgePageView.vue'
import EmployeesLayoutView from '@/views/EmployeesLayoutView.vue'
import EmployeesAgreementsView from '@/views/EmployeesAgreementsView.vue'
import EmployeesStructureView from '@/views/EmployeesStructureView.vue'
import BonusesLayoutView from '@/views/BonusesLayoutView.vue'
import BonusesHomeView from '@/views/BonusesHomeView.vue'
import BonusesStartView from '@/views/BonusesStartView.vue'

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
			redirect: { name: 'balance' },
			children: [
				{
					name: 'balance',
					path: '/tariff/balance',
					component: BalanceView,
				},
				{
					name: 'bills',
					path: '/tariff/bills',
					component: BillsView,
				},
			],
		},
		{
			path: '/employees',
			name: 'employees',
			redirect: { name: 'list' },
			component: EmployeesLayoutView,
			children: [
				{
					path: '/employees/list',
					name: 'list',
					component: EmployeesView,
				},
				{
					path: '/employees/structure',
					name: 'structure',
					component: EmployeesStructureView,
				},
				{
					path: '/employees/agreements',
					name: 'agreements',
					component: EmployeesAgreementsView,
				},
			],
		},
		{
			path: '/knowledge',
			name: 'knowledge',
			component: KnowledgeView,
			children: [
				{
					path: '/knowledge/:chapter',
					name: 'chapter',
					component: KnowledgePageView,
				},
			],
		},
		{
			path: '/partners',
			name: 'partners',
			component: PartnersView,
		},
		{
			path: '/bonuses',
			name: 'bonuses',
			redirect: { name: 'bonuses-start' },
			component: BonusesLayoutView,
			children: [
				{
					path: '/bonuses/home',
					name: 'bonuses-home',
					component: BonusesHomeView,
				},
				{
					path: '/bonuses/start',
					name: 'bonuses-start',
					component: BonusesStartView,
				},
			],
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
