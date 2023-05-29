import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-member-loan-report',
  templateUrl: './member-loan-report.page.html',
  styleUrls: ['./member-loan-report.page.scss'],
})
export class MemberLoanReportPage implements OnInit {

  postData = {
    dateStart: '',
    dateEnd: '',
    loanType: '',
    userId: '',
    postId: 1
  }

  allFactor = true;

  grandTotal: number =0;

  statuz;

  resultArray: any = [];
  public loanDetails: any;

  constructor(
    private menuCntrl: MenuController,
    private authService: AuthService,
    private toastService: ToastService
    ) { }

/** On init cycle hook */
  ngOnInit() {
    this.menuCntrl.toggle();
    this.authService.userData$.subscribe((res:any)=>{
      this.postData.userId = res['Id']
      this.authService.getLoanDetails(this.postData).subscribe((data:any)=>{
      if (data.status != 0) {
        this.statuz = false;
          this.loanDetails = data;
      } else {
        this.statuz = true;
        this.toastService.presentToastDanger("No Data For that Filter")
      }
    });
    });
  }
/** On Button click function to send data to the back */
  loadData(){
    this.authService.userData$.subscribe((res:any)=>{
      this.postData.userId = res['Id']
      this.authService.getLoanDetails(this.postData).subscribe((data:any)=>{
        if (data.status != 0) {
          this.statuz = false;
          this.loanDetails = data;
        }else{
          this.statuz = true;
          this.toastService.presentToastDanger("No Data For that Filter")
        }
      });
    });
  }
}
