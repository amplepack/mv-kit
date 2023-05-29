import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { AuthConstants } from 'src/app/config/auth-constant';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private menu: MenuController,
    private fb: FormBuilder, 
    private authService : AuthService,
    private storageService: StorageService,
    private toastService: ToastService,
    private loadingCtrl: LoadingController,
    ) { 
      
    }

  // loginForm = this.fb.group({
  //   username: ['',Validators.required],
  //   password: ['',Validators.required],
  //   role: ['',Validators.required],
  //   });

  postData = {
    username: '',
    password: '',
    role: ''
  };

  userRole = [
    {id:"2", roleName: "Member"},
    {id:"1", roleName: "Admin"}
  ]

  ngOnInit() {
    this.menu.enable(false);
  }

  loginAction(){
    this.authService.login(this.postData).subscribe((res: any) => {
      if (res.status !==0) {
        this.loadingCtrl.dismiss();
        this.storageService.store(AuthConstants.AUTH, res).then((postData)=>{
          //window.location.reload();
        })
        this.menu.enable(true);
        this.router.navigate(['dashboard']);
      } else {
        this.loadingCtrl.dismiss();
        this.toastService.presentToastDanger("Incorrect Username Or Password")
      }
    },
     (error: any) =>{
      this.toastService.presentToastDanger("Please Check Network Connection")
    }
    )
  }

  // async loaderSpinner(){
  //   let loading = await this.loadingCtrl.create({
  //     message: "loading",
  //     duration: 5000,
  //     showBackdrop: true,
  //     spinner: "lines-small",
  //   });

  //   loading.present();

  //   setTimeout(() => {
  //     loading.dismiss();
  //     this.loginAction()
  //   }, 5000);
  // }

  Register(){
    this.router.navigate(['register']);
  }


}
