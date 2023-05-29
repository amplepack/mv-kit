import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-approve-loan-repay',
  templateUrl: './approve-loan-repay.page.html',
  styleUrls: ['./approve-loan-repay.page.scss'],
})
export class ApproveLoanRepayPage implements OnInit {

  postData = {
    action: '',
    formId: '',
    depositAmount: '',
    memberId: ''
  }


  formData;
  showNoData: boolean;


  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private toastService: ToastService,
  ) { }


  ngOnInit() {
      this.authService.loanDepositsList().subscribe((data:any)=>{
        if (data.status != 0) {
          this.showNoData = false;
          for (let i = 0; i < data.length; i++) {
            if (data[i]['loanType'] == 1) {
              data[i]['loanType'] = 'Emergency';
            }else{
              data[i]['loanType'] = 'Normal';
            }
          }
          this.formData = data;  
           } else {
            this.showNoData = true;
        }
      })
  }

  async acceptDeposit(formId: any, depositAmount: any, memberId: any) {
    const alert = await this.alertController.create({
      header: 'Accept Loan',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          role: 'accept',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

  await alert.present();

    const { role } = await alert.onDidDismiss();
    if (role!='cancel') {
        this.postData.depositAmount = depositAmount
        this.postData.memberId = memberId;
        this.postData.formId = formId;
        this.postData.action = role;
        this.authService.approveLoanDeposit(this.postData).subscribe((res:any)=>{
          if (res.status == 1) {
            this.toastService.presentToastSuccess("Payment Approved Successful!");
             window.location.reload();
          }else{
            this.toastService.presentToastDanger("Problem on saving data! Try again")
          }
       
    })
    }
  }

  async rejectDeposit(formId: any, depositAmount: any, memberId: any) {
    const alert = await this.alertController.create({
      header: 'Reject Loan',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          role: 'reject',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    if (role!='cancel') {
        this.postData.depositAmount = depositAmount
        this.postData.formId = formId;
        this.postData.action = role;
        this.authService.approveLoanDeposit(this.postData).subscribe((res:any)=>{
        window.location.reload();
        })
    }
  }

}
