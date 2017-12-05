import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from '../home/home';

/**
 * Generated class for the CarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
    selector: 'page-car',
    templateUrl: 'car.html',
})
export class CarPage {
    items: Array<{note: string}>

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.initializeItems();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CarPage');
    }

    initializeItems() {
        this.items = [];
        for (let i = 1; i < 11; i++) {
            this.items.push({
                note: 'Andalusia & Travel #' + i
            });
        }
    }

    goHome() {
        console.log('home')
        this.navCtrl.setRoot(HomePage);
    }

    getItems(ev: any) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.note.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

}
