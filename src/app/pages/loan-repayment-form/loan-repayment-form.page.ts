import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-loan-repayment-form',
  templateUrl: './loan-repayment-form.page.html',
  styleUrls: ['./loan-repayment-form.page.scss'],
})
export class LoanRepaymentFormPage implements OnInit {

  public memberList = [];

  postData = {
    loanType: '',
    feeAmount: '',
    memberId: '',
    paymentDate: '',
    acountName: ''
}

dtToday = new Date();

month: any = this.dtToday.getMonth() + 1;
day: any = this.dtToday.getDate();
year = this.dtToday.getFullYear();


accountType: any = [];
showMember: boolean = false;

constructor(private router: Router,
  private toastService: ToastService,
  private menuCntrl: MenuController, 
  private authService: AuthService) { }

ngOnInit() {
  this.menuCntrl.toggle();
   this.authService.getAccountNames().subscribe((data:any)=>{
    this.accountType = data;
   });

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

    if(this.month < 10)
        this.month = 0 + this.month.toString();
    if(this.day < 10)
        this.day = '0' + this.day.toString();

    let maxDate = this.year + '-' + this.month + '-' + this.day;    
    // ('#txtDate').('max', maxDate);
 }

 saveData(){
  this.authService.insertLoan(this.postData).subscribe((res: any) => {
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

concelBtn(){
  this.router.navigate(['dashboard']);
}

}
