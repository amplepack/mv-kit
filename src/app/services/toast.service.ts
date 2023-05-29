import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastControler: ToastController) { }

  async presentToastSuccess(infoMessage: string){
    const toast = await this.toastControler.create({
      message: infoMessage,
      duration: 3000,
      color: 'tertiary'
    });
    toast.present();
  }

  async presentToastDanger(infoMessage: string){
    const toast = await this.toastControler.create({
      message: infoMessage,
      duration: 3000,
      color: 'danger'
    });
    toast.present();
  }
}
