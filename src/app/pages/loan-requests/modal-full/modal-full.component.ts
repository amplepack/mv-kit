import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { LoanRequestsPage } from '../loan-requests.page';


@Component({
  selector: 'app-modal-full',
  templateUrl: './modal-full.component.html',
  styleUrls: ['./modal-full.component.scss'],
})
export class ModalFullComponent implements OnInit {

  name: string;

  postData: any = {
         userId: '',
         formId: ''
  };

  formData: any [];

  constructor(
     private modalCtrl: ModalController,
     private authService: AuthService,
     private navParams: NavParams,
     private loanRequestPage: LoanRequestsPage
     ) {}

  ngOnInit() {
    this.authService.userData$.subscribe((res:any)=>{
      this.postData.userId = res['Id'];
      this.postData.formId  = this.navParams.data.id;
      this.authService.getSubmitedFormDetails(this.postData).subscribe((data:any)=>{
      this.formData = data;      
      })
    });
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
