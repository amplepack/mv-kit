import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalController, IonModal } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, AnimationController, MenuController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';
import { ModalFullComponent } from './modal-full/modal-full.component';


@Component({
  selector: 'app-loan-requests',
  templateUrl: './loan-requests.page.html',
  styleUrls: ['./loan-requests.page.scss'],
})
export class LoanRequestsPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  formData: any [];

  public formId;

  handlerMessage = '';
  roleMessage = '';

  postData: any = {
   
  };

  showNoData: boolean;

  constructor(private authService: AuthService,
    private menuCtrl: MenuController,    
    private animationCtrl: AnimationController,
    private router: Router, 
    private modalCtrl: ModalController,
    private toastService: ToastService, 
    private alertController: AlertController) { }

  ngOnInit() {
    this.menuCtrl.toggle();
    this.authService.userData$.subscribe((res:any)=>{
      this.postData.userId = res['Id'];
      this.authService.getSubmitedFormDetails(this.postData).subscribe((data:any)=>{
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
        this.postData.userId = res['Id'];
        this.postData.role = res['Role'];
        this.postData.action = role;
        this.postData.formId = formId;
        this.authService.insertVote(this.postData).subscribe((res:any)=>{
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
        this.postData.userId = res['Id'];
        this.postData.role = res['Role'];
        this.postData.action = role;
        this.postData.formId = formId;
        this.authService.insertVote(this.postData).subscribe((res:any)=>{
        window.location.reload();
        })
      })
    }
  }


  async openModal(formId: any) {
    const modal = await this.modalCtrl.create({
      component: ModalFullComponent,
      componentProps: {id:formId}
    });
    modal.present();
  }

  setFormId(formId: any){
    //this.modalFull.getFormId(formId);
  }

}
