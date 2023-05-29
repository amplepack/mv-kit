import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(),AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to dashboard page', () =>{
    spyOn(router, 'navigate');
    component.loginAction();
    expect(router.navigate).toHaveBeenCalledWith(['dashboard']);
  });

  it('should go to register page', () =>{
    spyOn(router, 'navigate');
    component.Register();
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  });

});
