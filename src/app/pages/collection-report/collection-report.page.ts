import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import * as XLSX from 'xlsx';
import { Directory } from '@capacitor/filesystem';
import write_blob from 'capacitor-blob-writer';

@Component({
  selector: 'app-collection-report',
  templateUrl: './collection-report.page.html',
  styleUrls: ['./collection-report.page.scss'],
})
export class CollectionReportPage implements OnInit {

  postData = {
    loanType: '',
    startDate: '',
    endDate: ''
  }

  allData:any[]=[];
  withFilterData:any[]=[];
  result:any[]=[];

  pdfObj = null;

  grandTotal: number =0;
  count: number = 0;

  statuz;

  resultArray: any = [];

  constructor(
    private menuCntrl: MenuController,
    private authService: AuthService,
    ) { }
    
  ngOnInit() {
    this.menuCntrl.toggle();
    this.authService.filterReport(this.postData).subscribe((data:any)=>{
        if (data.status != 0) {
          this.statuz = false;
          this.resultArray = data;
          for (let i = 0; i < data.length; i++) {
            this.grandTotal += parseFloat(data[i]['feeAmount']);  
            if (data[i]['feeType']==1) {
              var feeType = 'Joining Fee';
            }else{
              var feeType = 'Shares';
            }
            var obj = {
              FIRST_NAME:data[i]['firstName'].toString(),
              SECOND_NAME:data[i]['secondName'].toString(),
              LAST_NAME:data[i]['lastName'].toString(),
              PHONE:data[i]['phoneNo'].toString(),
              PHYSICAL_ADDRESS:data[i]['physicalAddress'].toString(),
              AMOUNT_PAID:data[i]['feeAmount'].toString(),
              DATE:data[i]['paymentDate'].toString(),
              FEE_TYPE:feeType.toString()
            };
            this.allData.push(obj);
            this.result = this.allData
          } 
        } else {
          this.statuz = true;
        }
        
     });
  }

  loadData(){
     this.authService.filterReport(this.postData).subscribe((res:any)=>{
      this.grandTotal = 0;
     if (res.status !=0) {
      this.statuz = false;
      this.resultArray = res
      for (let i = 0; i < res.length; i++) {
        this.grandTotal += parseFloat(res[i]['feeAmount']);  
      }
     }else{
      this.statuz = true;
     }
     })
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
     path: 'Deposit-report-'+fileName+fileExtension,
     directory: Directory.Documents,
     blob: data
   }).then(()=>{
     window.alert("File Downloaded and save to Documents");
   }).catch((e)=>{
     window.alert(e);
   });
 }
}
