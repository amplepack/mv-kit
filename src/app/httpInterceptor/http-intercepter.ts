import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlertController, LoadingController, ToastController } from "@ionic/angular";
import { EMPTY, Observable } from "rxjs";
import { catchError, delay, finalize, map, retryWhen, take, tap } from "rxjs/operators";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor{
     
    constructor(
        private loadingCtrl: LoadingController,
        private toastCntrl: ToastController,
        private alertCntrl: AlertController
        ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingCtrl.getTop().then(hasloading => {
            if (!hasloading) {
            this.loadingCtrl.create({
                spinner: 'circular',
                translucent: true,
                duration: 2000
            }).then(loading => loading.present())
            }
        });
        
        return next.handle(req).pipe(
            retryWhen(err =>{
                let retries = 1;
                 return err.pipe(
                    delay(1000),
                    tap(() => {
                        this.showRetryToast(retries);
                    }),
                    map(error => {
                        if (retries++ == 1) {
                            throw error;
                        }
                        return error;
                    })
                 )
            }),
            catchError(err => {
                return EMPTY;
            }),
            finalize(() => {
                this.loadingCtrl.getTop().then(hasloading => {
                    if (hasloading) {
                    this.loadingCtrl.dismiss();
                    }
                });
            })
        );
    }

    async showRetryToast(retryCount){
       const toast = await this.toastCntrl.create({
        message: `Check Network Connecting`,
        duration: 2000,
        color: 'danger'
       });
       toast.present()
    }

    async presentFailerAlert(msg){
        const alert = await this.alertCntrl.create({
        header: 'Oops',
        message: 'Failed',
        buttons: ['OK']
        });
        await alert.present()
     }

}