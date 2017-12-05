import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {CarPage} from '../pages/car/car';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = LoginPage;

    pages: Array<{id: number, title: string, icon: string, component: any}>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        platform.ready().then(() => {

            statusBar.styleDefault();
            splashScreen.hide();

            this.initializeApp();

            // used for an example of ngFor and navigation
            this.pages = [
                {id: 1, title: 'Nama User', icon: 'ios-contact-outline', component: HomePage},
                {id: 2, title: 'Hotel', icon: 'ios-albums-outline', component: HomePage},
                {id: 3, title: 'Agensi Pelancongan', icon: 'ios-jet-outline', component: HomePage},
                {id: 4, title: 'Kenderaan Pelancongan', icon: 'ios-car-outline', component: CarPage},
                {id: 5, title: 'SPA/Pusat Urutan Kaki', icon: 'ios-american-football-outline', component: HomePage},
                {id: 6, title: 'Institut Latihan Pelancongan', icon: 'ios-contacts-outline', component: HomePage},
                {id: 7, title: 'Pemandu Pelancong', icon: 'ios-contacts-outline', component: HomePage},
                {id: 8, title: 'Notification', icon: 'ios-notifications-outline', component: HomePage},
                {id: 9, title: 'Tetapan', icon: 'ios-cog-outline', component: HomePage},
                {id: 10, title: 'Log Keluar', icon: 'ios-log-out-outline', component: HomePage},
            ];
        });
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log('page: ', page);
        if (page.id === 10) {
            this.nav.setRoot(LoginPage);
        } else {
            this.nav.setRoot(page.component);
        }
    }

    goHome() {
        this.nav.setRoot(HomePage);
    }
}
