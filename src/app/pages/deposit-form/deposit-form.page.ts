import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-deposit-form',
  templateUrl: './deposit-form.page.html',
  styleUrls: ['./deposit-form.page.scss'],
})
export class DepositFormPage implements OnInit {

  constructor(
    private menuCtrl: MenuController
  ) { }

  showBanks:boolean = false;
  showMno:boolean = true;
  mnoColor: string = "#87CEEB";
  bankColor: string = "#f1f1f1";
  ngOnInit() {
    this.menuCtrl.toggle()
  }

  ShowBanks(){
    this.showBanks = true;
    this.showMno = false;
    this.mnoColor = "#f1f1f1";
    this.bankColor = "#87CEEB";
  }

  ShowMno(){
    this.showBanks = false;
    this.showMno = true;
    this.mnoColor = "#87CEEB";
    this.bankColor = "#f1f1f1";
  }
}
