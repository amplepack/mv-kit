import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.page.html',
  styleUrls: ['./loan-form.page.scss'],
})
export class LoanFormPage implements OnInit {

  showImputs: boolean = false;
  userInfo: any;


  
  constructor(private router: Router,private menuCntr: MenuController, private toastService: ToastService, private authService: AuthService) { }

  ngOnInit() {
    this.menuCntr.toggle()
    this.authService.userData$.subscribe((data:any)=>{
      this.userInfo = data;
      this.postData.userId = this.userInfo['Id'];
    })
  }

  postData: any = {
    "remainingLoan": '',
    "returtAmount": '',
    "deadline": '',
    "debitAmount": '',
    "loanProvider": '',
    "garantersPhone1": '',
    "garantersPhone2": '',
    "garantersPhone3": '',
    "garantersName1": '',
    "garantersName2": '',
    "garantersName3": '',
    "loanType": '',
    "timeFrame": '',
    "loanAmount": '',
    "accountName": '',
    "accNumber": '',
    "branchName": '',
    "bankName": '',
    "jobTitle": '',
    "startTime": '',
    "officeLocation": '',
    "ocupationType": '',
    "employer": '',
    "mateName": '',
    "matePhone": '',
    "mateLocation": ''
  }


  submitLoanForm(){
    this.authService.loanApplicanForm(this.postData).subscribe((res:any)=>{
      if (res.status == 1) {
        this.toastService.presentToastSuccess("Data saved Successfully");
        this.router.navigate(['dashboard']);
      } else {
        this.toastService.presentToastDanger("Error on saving, try again")
      }
    });
  }

  checkedItems = []

  checkd: boolean = true;

  onCheck(event: any) {
    if(event.detail.checked) {
      this.showImputs = true;
    } else if (!event.detail.checked) {
      this.showImputs = false;
    }
  }

  isDeclared(event: any) {
    if(event.detail.checked) {
      this.checkd = false;
    } else if (!event.detail.checked) {
      this.checkd = true;
    }
  }

}
