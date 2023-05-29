import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { PopOverService } from 'src/app/services/pop-over.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {

  postData: any = {};
  normalLoan;
  emergencyLoan;


  constructor(
    private loadingCtrl: LoadingController,
    private menuCtrl: MenuController,
    private router: Router,
    private popService : PopOverService, 
    private toastService: ToastService, 
    private authService: AuthService) { }

  ngOnInit() {
    this.menuCtrl.toggle();
    this.authService.userData$.subscribe((res:any)=>{
      this.postData.userId = res['Id']
      this.authService.getNormalLoan(this.postData).subscribe((data:any)=>{
        this.normalLoan = data;
      })
    })

    this.authService.userData$.subscribe((res:any)=>{
      this.postData.userId = res['Id']
      this.authService.getEmergencyLoan(this.postData).subscribe((data:any)=>{
        this.emergencyLoan = data;
      })
    })
  }

  applyLoan(){
    this.router.navigate(['loan-form'])
  }

}
