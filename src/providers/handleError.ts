import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class HandleError {

    constructor(private toastCtrl: ToastController, private translateService: TranslateService) {

    }

    public notifyError(error) {
        let key = error.message.split(" ").join("_");
        key = key.toUpperCase();
        console.log(key);
        this.translateService.get(key).subscribe(value => {
            let toast = this.toastCtrl.create({
                message: value,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
}
