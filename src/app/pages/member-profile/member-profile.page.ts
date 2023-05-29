import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.page.html',
  styleUrls: ['./member-profile.page.scss'],
})
export class MemberProfilePage implements OnInit {

  displayData: any;

  userData = {
    oldPass: '',
    newPass: '',
    confirmPass: ''
  }

  userPass;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private toastService: ToastService, 
    private animationCtrl: AnimationController
    ) {}


  ngOnInit() {
    this.authService.userData$.subscribe((res:any)=>{
      this.displayData = res;
    })
  }

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

  changeUserPassword(){
    if (this.userData.confirmPass == this.userData.newPass) {
      this.authService.changePassword(this.userData).subscribe((res:any)=>{
        if (res.status == 1) {
          this.toastService.presentToastSuccess("Password Change SUCCESSFULL!");
          this.router.navigate(['member-profile']);
        } else {
          this.toastService.presentToastDanger("Wrong Old Password, Please enter correct Password")
        }
      });
    } else {
      this.toastService.presentToastDanger("Password Didn't Match...!")
    }
      
  }
}
