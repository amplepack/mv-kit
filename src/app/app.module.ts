import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DepositsPipe } from './pages/deposits.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './httpInterceptor/http-intercepter';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ModalFullComponent } from './pages/loan-requests/modal-full/modal-full.component';
import { LoanRequestsPage } from './pages/loan-requests/loan-requests.page';
import { FileOpener } from '@ionic-native/file-opener/ngx';

//this is appModule
@NgModule({
  declarations: [AppComponent, ModalFullComponent, DepositsPipe],
  imports: [BrowserModule,FormsModule, HttpClientModule, ReactiveFormsModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule],
  providers: [
              HttpClientModule,StatusBar,Storage, LoanRequestsPage, ModalFullComponent,FileOpener,
              {provide:HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true},
              { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
  bootstrap: [AppComponent],
})
export class AppModule {}
