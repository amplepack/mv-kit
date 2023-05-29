import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Directory } from '@capacitor/filesystem';
import write_blob from 'capacitor-blob-writer';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss']
})
export class AdminPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
}
