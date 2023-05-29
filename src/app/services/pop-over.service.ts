import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopOverComponent } from '../pop-over/pop-over.component';

@Injectable({
  providedIn: 'root'
})
export class PopOverService {

  constructor(private popUpCntrl: PopoverController) { }

  async _openPopOver(ev) {
    const pop = await this.popUpCntrl.create({
      component: PopOverComponent,
      event: ev
    })
    return await pop.present()
  }
}
