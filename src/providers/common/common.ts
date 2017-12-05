//import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ToastController, LoadingController} from 'ionic-angular';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {

    constructor(public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
        console.log('Hello CommonProvider Provider');
    }

    public isEmpty(data: any) {
        if (data === "" || data === null || data === undefined) {
            return true;
        } else {
            return false;
        }
    }

    public isEmptyObject(data: any) {
        if (data === "" || data === null || data === undefined || data === '{}') {
            return true;
        } else {
            return false;
        }
    }

    public presentToast(msg: string) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });

        toast.present();
    }

    public getLoading() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });


        return loading;
//        loading.present();
//
//        setTimeout(() => {
//            loading.dismiss();
//        }, 5000);
    }

}
