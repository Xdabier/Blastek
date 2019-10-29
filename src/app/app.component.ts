import { Component } from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthService} from './core/auth.service';
import * as firebase from 'firebase/app';
import {environment} from '../environments/environment.prod';

const firebaseConfig =  {
    apiKey: 'AIzaSyBlFAbAaaFvYQPDZMtsJXrvkaqbDP5lVrE',
    authDomain: 'blastek-32d7e.firebaseapp.com',
    databaseURL: 'https://blastek-32d7e.firebaseio.com',
    projectId: 'blastek-32d7e',
    storageBucket: '',
    messagingSenderId: '360774291081',
    appId: '1:360774291081:web:c156f66474723df7'
}


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public authServices: AuthService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        firebase.initializeApp(firebaseConfig);
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
