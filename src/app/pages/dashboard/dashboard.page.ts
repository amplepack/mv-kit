import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { App } from '@capacitor/app';
import { LoadingController, Platform, IonRouterOutlet } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { PopOverService } from 'src/app/services/pop-over.service';
import { ToastService } from 'src/app/services/toast.service';
import * as XLSX from 'xlsx';
import { Directory } from '@capacitor/filesystem';
import write_blob from 'capacitor-blob-writer';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  memberList = [];

  userId: any;

  memberShares;

  result:any[]=[];

  displayData: any;
  mvShares; 
  saccosShare;
  public sharePercentage: any;
  templeValue: any;

  showQuickAction: boolean;

  role: number;


  constructor(
    private loadingCtrl: LoadingController,
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private router: Router,
    private popService : PopOverService,
    private toastService: ToastService, 
    private authService: AuthService) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }

      /*
       * if(isNotDashboard){
       *  router.navigate(['dashboard']);
       * }else{
       * App.exitApp();
       * App.exitApp.!dashboard
       * }
       */

  });
}

  ngOnInit() {
    this.authService.fetchMember().subscribe((data:any) =>{
      this.memberList = data
     for (let i = 0; i < data.length; i++) {
      var obj = {
        FIRST_NAME:data[i]['firstName'].toString(),
        LAST_NAME:data[i]['lastName'].toString(),
        PHONE:data[i]['phoneNo'].toString(),
        PHYSICAL_ADDRESS:data[i]['physicalAddress'].toString(),
        STATUS:'Active'
      };
      this.result.push(obj);
    }
  });

    this.authService.getAllShares().subscribe((data:any)=>{
      this.mvShares = data['Share'];
      this.saccosShare = (new Intl.NumberFormat().format(data['Share']));
    });

    this.authService.userData$.subscribe((data:any)=>{
      this.userId = data;
      this.displayData = data;
      this.role = data['Role'];
      if (this.role == 1) {
        this.showQuickAction = true;
      }else{
        this.showQuickAction = false;
      }
      this.authService.getMemberShares(this.userId).subscribe((data:number )=>{
      this.memberShares = data['mShare'];
      this.templeValue = this.memberShares / this.mvShares * 100.
      this.sharePercentage = parseFloat(this.templeValue.toFixed(1))
      this.memberShares = (new Intl.NumberFormat().format(data['mShare']));
    });
 })
}

  DepostFun(){
   this.router.navigate(['deposit-form']);
  }

  openPopList(ev: any){
    this.popService._openPopOver(ev);
  }

  LoanFun(){
    this.router.navigate(['loan-form']);
   }
   Register(){
    this.router.navigate(['register']);
   }
   feeCollectionForm(){
    this.router.navigate(['fees-collection-form']);
   }

   loanRepaymentForm(){
    this.router.navigate(['loan-repayment-form']);
   }

   loanVotes(){
    this.router.navigate(['loan-votes']);
   }

   approveDeposite(){
    this.router.navigate(['approve-deposits']);
 }

 loanRepayApprove(){
  this.router.navigate(['approve-loan-repay']);
}

createExcel(){
  var ws = XLSX.utils.json_to_sheet(this.result);
  var wb = {Sheets:{'data':ws}, SheetNames:['data']};
  var buffer = XLSX.write(wb,{bookType:'xlsx',
  type:'array'});
  this.saveToPhone(buffer);
}

saveToPhone(buffer){
  var  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  var fileName = Date.now().toString();
  var fileExtension = ".xlsx";
  var data:Blob = new Blob([buffer],{type:fileType});
 write_blob({
   path: 'List-Members-'+fileName+fileExtension,
   directory: Directory.Documents,
   blob: data
 }).then(()=>{
   window.alert("File Downloaded and save to Documents");
 }).catch((e)=>{
   window.alert(e);
 });
}
}
