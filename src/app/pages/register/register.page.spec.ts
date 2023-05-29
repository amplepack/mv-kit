import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
//import { Router } from '@angular/router';
//import { AppRoutingModule } from 'src/app/app-routing.module';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  //let router : Router

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
   // router = TestBed.get(Router)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should direct to dashboard', () => {
  //   expect(router.navigate).toHaveBeenCalledWith(['dashboard']);
  // });
});
