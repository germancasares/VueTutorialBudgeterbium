import * as components from './components';

export default [
  {
    path: '/budgets',
    component: components.BudgetsList
  },
  {
    path: '/budgets/create',
    component: components.CreateUpdateBudget,
    name: 'createBudget'
  },
  {
    path: '/budgets/:budgetId/update',
    component: components.CreateUpdateBudget,
    name: 'updateBudget'
  }
];