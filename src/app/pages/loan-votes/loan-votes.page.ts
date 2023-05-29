import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-loan-votes',
  templateUrl: './loan-votes.page.html',
  styleUrls: ['./loan-votes.page.scss'],
})
export class LoanVotesPage implements OnInit {

  formData: any [];
  postData: any = {
   
  };

  showNoData: boolean;


  constructor(
    private authService: AuthService, 
    private router: Router, 
    private toastService: ToastService, 
    private menuCtrl: MenuController,
    private alertController: AlertController) { }

  ngOnInit() {
    this.authService.userData$.subscribe((res:any)=>{
      this.postData.userId = res['Id'];
      this.authService.getVotedLoan(this.postData).subscribe((data:any)=>{
        if (data.status != 0) {
          this.showNoData = false;
          for (let i = 0; i < data.length; i++) {
            if (data[i]['loanType'] == 1) {
              data[i]['loanType'] = 'Normal Loan';
            }else{
              data[i]['loanType'] = 'Emergency Loan';
            }
          }
          this.formData = data;  
           } else {
            this.showNoData = true;
        }
      })
    })
  }

  async acceptLoan(formId: any) {
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
      this.authService.userData$.subscribe((res:any)=>{
        this.postData.formId = formId;
        this.postData.action = role;
        this.authService.approveForm(this.postData).subscribe((res:any)=>{
        window.location.reload();
    })
      })
    }
  }

  async rejectLoan(formId: any) {
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
      this.authService.userData$.subscribe((res:any)=>{
        this.postData.formId = formId;
        this.postData.action = role;
        this.authService.approveForm(this.postData).subscribe((res:any)=>{
        window.location.reload();
        })
      })
    }
  }

}
