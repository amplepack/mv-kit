import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-shares',
  templateUrl: './shares.page.html',
  styleUrls: ['./shares.page.scss'],
})
export class SharesPage implements OnInit {

  memberShares: any = [];

  mvShares: any = []

  public sharePercentage: any;

  
  userId: any;
  templeValue: any;

  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private authService: AuthService) { }

  ngOnInit() {
   this.menuCtrl.toggle();
    this.authService.getAllShares().subscribe((data:any)=>{
      this.mvShares = data;
    })

    this.authService.userData$.subscribe((res:any)=>{
        this.userId = res;
        this.authService.getMemberShares(this.userId).subscribe((data:any )=>{
        this.memberShares = data;
        this.templeValue = (this.memberShares['mShare'] / this.mvShares['Share']*100)
        this.sharePercentage = parseFloat(this.templeValue.toFixed(1))
      });
   })
  }

  applyShares(){
    this.menuCtrl.toggle().finally
    this.router.navigate(['fees-collection-form'])
  }

}
