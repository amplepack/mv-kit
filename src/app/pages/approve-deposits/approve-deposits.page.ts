import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-approve-deposits',
  templateUrl: './approve-deposits.page.html',
  styleUrls: ['./approve-deposits.page.scss'],
})
export class ApproveDepositsPage implements OnInit {

  postData = {
    action: '',
    formId: ''
  }


  formData;
  showNoData: boolean;


  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private toastService: ToastService,
  ) { }


  ngOnInit() {
      this.authService.feesDepositsList().subscribe((data:any)=>{
        if (data.status != 0) {
          this.showNoData = false;
          for (let i = 0; i < data.length; i++) {
            if (data[i]['feeType'] == 1) {
              data[i]['feeType'] = 'Joining Fees';
            }else{
              data[i]['feeType'] = 'Shares';
            }
          }
          this.formData = data;  
           } else {
            this.showNoData = true;
        }
      })
  }

  async acceptDeposit(formId: any) {
    const alert = await this.alertController.create({
      header: 'Accept Payment',
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
        this.postData.formId = formId;
        this.postData.action = role;
        this.authService.approveFees(this.postData).subscribe((res:any)=>{
        this.toastService.presentToastSuccess("Payment Approved Successful!");
        window.location.reload();
    })
    }
  }

  async rejectDeposit(formId: any) {
    const alert = await this.alertController.create({
      header: 'Reject Paymentsswd',
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
        this.postData.formId = formId;
        this.postData.action = role;
        this.authService.approveFees(this.postData).subscribe((res:any)=>{
        window.location.reload();
        })
    }
  }

}
