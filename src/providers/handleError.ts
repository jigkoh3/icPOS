import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class HandleError {

    constructor(private toastCtrl: ToastController, private translateService: TranslateService) {
        
    }

    public get(msg: string) {
        let key = msg.replace(' ', '_');
        key = key.toUpperCase();
        console.log(key);
        this.translateService.get(key).subscribe(value => {
            let toast = this.toastCtrl.create({
                message: value,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    }
}
