import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, LoadingController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {CommonProvider} from '../../providers/common/common';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    screenWidth: any;
    screenHeight: any;
    loading: any;

    constructor(public navCtrl: NavController, public common: CommonProvider, public loadingCtrl: LoadingController, public navParams: NavParams, platform: Platform) {
        this.screenWidth = platform.width();
        this.screenHeight = platform.height();
        this.loading = common.getLoading();
        console.log('height:', this.screenHeight)
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    signIn() {
        console.log('masuk')
        this.loading.present();

        setTimeout(() => {
            this.navCtrl.push(HomePage).then(() => {
                console.log('done')
                this.loading.dismiss();
                this.navCtrl.setRoot(HomePage);
            })
        }, 500);

    }

}
