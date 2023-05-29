import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  userInfo: any = [];
  loanFormCount: any = [];
  postData: any = {

  };

  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Profile', url: '/member-profile', icon: 'person' },
    { title: 'Shares', url: '/shares', icon: 'share' },
    // { title: 'Setting', url: '/settings', icon: 'build' },
    { title: 'Loan Requests', url: '/loan-requests', icon: 'reader',facto:1 },
  ];

  public loanReports = [
    { title: 'All Member', url: '/loan-report', icon: 'reader' },
    { title: 'Individual', url: '/member-loan-report', icon: 'reader' },
  ];


  public sharesReports = [
    { title: 'Fees & Shares', url: '/collection-report', icon: 'reader' },
  ];


  public loan = [
    { title: 'Loan Statement', url: '/loan-statement', icon: 'card' },
    { title: 'Apply Loan', url: '/loan-form', icon: 'create' },
  ];


  public deposit = [
    { title: 'Fees&Shares', url: '/fees-collection-form', icon: 'briefcase' },
    { title: 'Loan Repay', url: '/loan-repayment-form', icon: 'reader' },
  ];

  constructor(   
               private storage: Storage,
               private statusBar: StatusBar,
               private authService: AuthService,
               private router: Router,
               private storageService: StorageService
  ) {
    this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#1f355a');
        this.statusBar.show();
          this.storage.create();
            this.authService.userData$.subscribe((data:any)=>{
             this.userInfo = data;
                  this.postData.userId = data['Id'];
            //  form requests
            this.authService.getSubmitedFormCount(this.postData).subscribe((res:any)=>{
              this.loanFormCount = res;
            })
      });
  }

  getLogout(){
    this.storageService.clear();
    this.router.navigate(['login']);
}
}
