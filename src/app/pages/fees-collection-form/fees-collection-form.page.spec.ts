import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FeesCollectionFormPage } from './fees-collection-form.page';

describe('FeesCollectionFormPage', () => {
  let component: FeesCollectionFormPage;
  let fixture: ComponentFixture<FeesCollectionFormPage>;
  let router: Router


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesCollectionFormPage ],
      imports: [IonicModule.forRoot(),AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FeesCollectionFormPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should direct to login page after load', fakeAsync(() =>{
    spyOn(router, 'navigate');

     component.ngOnInit();

     tick(3000);

     expect(router.navigate).toHaveBeenCalledWith(['dashboard'])
  }));
});
