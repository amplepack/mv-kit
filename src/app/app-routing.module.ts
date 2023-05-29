import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UerDataResolver } from './resolvers/userData.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    resolve: {
      userData: UerDataResolver
    }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'shares',
    loadChildren: () => import('./pages/shares/shares.module').then( m => m.SharesPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'deposits',
    loadChildren: () => import('./pages/deposits/deposits.module').then( m => m.DepositsPageModule)
  },
  {
    path: 'communication',
    loadChildren: () => import('./pages/communication/communication.module').then( m => m.CommunicationPageModule)
  },
  {
    path: 'loan-statement',
    loadChildren: () => import('./pages/loan-statement/withdraw.module').then( m => m.WithdrawPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'member',
    loadChildren: () => import('./pages/member/member.module').then( m => m.MemberPageModule)
  },
  {
    path: 'treasurer',
    loadChildren: () => import('./pages/treasurer/treasurer.module').then( m => m.TreasurerPageModule)
  },
  {
    path: 'member-profile',
    loadChildren: () => import('./pages/member-profile/member-profile.module').then( m => m.MemberProfilePageModule)
  },
  {
    path: 'deposit-form',
    loadChildren: () => import('./pages/deposit-form/deposit-form.module').then( m => m.DepositFormPageModule)
  },
  {
    path: 'loan-form',
    loadChildren: () => import('./pages/loan-form/loan-form.module').then( m => m.LoanFormPageModule)
  },
  {
    path: 'fees-collection-form',
    loadChildren: () => import('./pages/fees-collection-form/fees-collection-form.module').then( m => m.FeesCollectionFormPageModule)
  },
  {
    path: 'loan-repayment-form',
    loadChildren: () => import('./pages/loan-repayment-form/loan-repayment-form.module').then( m => m.LoanRepaymentFormPageModule)
  },
  {
    path: 'loan-requests',
    loadChildren: () => import('./pages/loan-requests/loan-requests.module').then( m => m.LoanRequestsPageModule)
  },
  {
    path: 'loan-votes',
    loadChildren: () => import('./pages/loan-votes/loan-votes.module').then( m => m.LoanVotesPageModule)
  },
  {
    path: 'member-loan-report',
    loadChildren: () => import('./pages/member-loan-report/member-loan-report.module').then( m => m.MemberLoanReportPageModule)
  },

  {
    path: 'collection-report',
    loadChildren: () => import('./pages/collection-report/collection-report.module').then( m => m.CollectionReportPageModule)
  },

  {
    path: 'approve-deposits',
    loadChildren: () => import('./pages/approve-deposits/approve-deposits.module').then( m => m.ApproveDepositsPageModule)
  },

  {
    path: 'loan-report',
    loadChildren: () => import('./pages/loan-report/loan-report.module').then( m => m.LoanReportPageModule)
  },
  
  {
    path: 'approve-loan-repay',
    loadChildren: () => import('./pages/approve-loan-repay/approve-loan-repay.module').then( m => m.ApproveLoanRepayPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
