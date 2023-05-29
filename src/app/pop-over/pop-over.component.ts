import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
})
export class PopOverComponent implements OnInit {

  list: any = [
    "logout",
    "change Password"
  ]

  constructor(private router : Router, private popOver: PopoverController, private toastService: ToastService, private authService: AuthService, private storageService: StorageService) { }


  ngOnInit() {}

  getLogout(){
        this.storageService.clear();
        this.router.navigate(['login']);
        this.popOver.dismiss();
  }

}
