import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-fees-collection-form',
  templateUrl: './fees-collection-form.page.html',
  styleUrls: ['./fees-collection-form.page.scss'],
})
export class FeesCollectionFormPage implements OnInit {

  varHide: boolean = false;
  postData = {
    feeType: '',
    feeAmount: '',
    memberId: '',
    paymentDate: '',
    acountName: ''
}

public memberList = [];
  accountType: any = [];
  showMember: boolean = false;

  constructor(
    private router: Router,
     private toastService: ToastService,
      private authService: AuthService,
      private menuCntrl: MenuController,
      ) { }

  ngOnInit() {
    this.menuCntrl.toggle()
    this.authService.userData$.subscribe((res:any)=>{
      if (res['Role'] == 1) {
        this.authService.fetchAllmember().subscribe(
          res =>this.memberList = res
          );
       this.showMember = true;
      }else{
        this.postData.memberId = res['Id'];
      }
     });

    this.authService.getAccountNames().subscribe((data:any)=>{
      this.accountType = data;
     })
  }


  showForm(){
   this.varHide = true;
  }

  hideForm(){
    this.varHide = false;
   }


 saveData(){
  this.authService.insertFees(this.postData).subscribe((res: any) => {
      if (res.status === 1) {
        this.toastService.presentToastSuccess("Data saved SUCCESSFULL")
        this.router.navigate(['dashboard']);
      } else {
        this.toastService.presentToastDanger("Something went wrong! Try again...")
      }
  },
   (error: any) =>{
    this.toastService.presentToastDanger("Please Check Network Connection")
  }
  )
}
}
