import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private router: Router,
    private authService : AuthService,
    private toastService: ToastService
    ) { }

  postData = {
        firstName: '',
        secondName: '',
        lastName: '',
        dOb: '',
        email: '',
        phoneNo: '',
        physicalAddress: '',
        jobTitle: '',
        membershipDate: '',
        password: '',
        ConfirmPassword: '',
  }

  ngOnInit() {}


  memberRegistration(){
    if (this.postData.password === this.postData.ConfirmPassword) {
    this.authService.signup(this.postData).subscribe((res: any) => {
        if (res.status === 1) {
          this.toastService.presentToastSuccess("One User Added SUCCESSFULL")
          this.router.navigate(['dashboard']);
        } else {
          this.toastService.presentToastDanger("Something went wrong! Try again...")
        }
    },
     (error: any) =>{
      this.toastService.presentToastDanger("Please Check Network Connection")
    }
    )
  }else {
    this.toastService.presentToastDanger("Password & Confirm Password should be same")
  }
  }
}
