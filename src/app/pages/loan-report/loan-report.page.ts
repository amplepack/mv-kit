import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import * as XLSX from 'xlsx';
import { Directory } from '@capacitor/filesystem';
import write_blob from 'capacitor-blob-writer';


@Component({
  selector: 'app-loan-report',
  templateUrl: './loan-report.page.html',
  styleUrls: ['./loan-report.page.scss'],
})
export class LoanReportPage implements OnInit {

  postData = {
    loanType: '',
    startDate: '',
    endDate: '',
    postId: 2,
    userId: '',
  }

  grandTotal: number = 0;

  public loanDetails: any;

  statuz;

  allData:any[]=[];
  withFilterData:any[]=[];
  result:any[]=[];

  constructor(
    private menuCntrl: MenuController,
    private authService: AuthService,
    private toastService: ToastService
    ) { }
  ngOnInit() {
    this.menuCntrl.toggle();
    this.authService.getLoanDetails(this.postData).subscribe((data:any)=>{
      if (data.status != 0) {
        this.statuz = false;
        this.loanDetails = data;
        for (var i = 0; i < data.length; i++) {
          var obj = {
            FIRST_NAME:data[i]['firstName'].toString(),
            SECOND_NAME:data[i]['secondName'].toString(),
            LAST_NAME:data[i]['lastName'].toString(),
            PHONE:data[i]['phoneNo'].toString(),
            PHYSICAL_ADDRESS:data[i]['physicalAddress'].toString(),
            LOAN_AMOUNT:data[i]['loanAmount'].toString(),
            INTEREST:data[i]['interest'].toString(),
            LOAN_REPAID:data[i]['paid'].toString(),
            TIME_FRAME:data[i]['timeFrame'].toString()+' Month(s)',
            DATE:data[i]['submitedDate'].toString(),
          };
          this.allData.push(obj);
          this.result = this.allData
        }
      }else{
        this.statuz = true;
        this.toastService.presentToastDanger("No Data For that Filter")
      }
    });
  }

  loadData(){
    this.authService.getLoanDetails(this.postData).subscribe((data:any)=>{
      if (data.status != 0) {
        this.statuz = false;
        this.loanDetails = data;
        for (var i = 0; i < data.length; i++) {
          var obj = {
            FIRST_NAME:data[i]['firstName'].toString(),
            SECOND_NAME:data[i]['secondName'].toString(),
            LAST_NAME:data[i]['lastName'].toString(),
            PHONE:data[i]['phoneNo'].toString(),
            PHYSICAL_ADDRESS:data[i]['physicalAddress'].toString(),
            LOAN_AMOUNT:data[i]['loanAmount'].toString(),
            INTEREST:data[i]['interest'].toString(),
            LOAN_REPAID:data[i]['paid'].toString(),
            TIME_FRAME:data[i]['timeFrame'].toString()+' Month(s)',
            DATE:data[i]['submitedDate'].toString(),
          };
          this.withFilterData.push(obj);
          this.result = this.withFilterData;
        }
      }else{
        this.statuz = true;
        this.toastService.presentToastDanger("No Data For that Filter")
      }
    });
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
     path: 'loan-report-'+fileName+fileExtension,
     directory: Directory.Documents,
     blob: data
   }).then(()=>{
     window.alert("File Downloaded and save to Documents");
   }).catch((e)=>{
     window.alert(e);
   });
 }
}
