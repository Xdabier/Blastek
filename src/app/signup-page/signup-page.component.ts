import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';
import {UsersService} from '../core/users.service';
import {Router} from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
    creeds = {
        name: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
    };

    loading;

    constructor(public authService: AuthService,
                public usersService: UsersService,
                public router: Router,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController) {
    }

    validateEmail(email) {
        if (!email) {
            return false;
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        ) {
            return false;
        }
        return true;
    }

    ngOnInit() {
    }

    async signupUser(): Promise<void> {
        const email: string = this.creeds.email;
        const password: string = this.creeds.password;
        if (!email || !password) {
            this.authService.presentToast('All fields are required!');
            return;
        } else if (password.length < 6) {
            this.authService.presentToast('Passwords should be at least 6 characters');
            return;
        } else if (this.creeds.password !== this.creeds.password2) {
            this.authService.presentToast('Passwords not identical.');
            return;
        } else {
            if (!this.validateEmail(email)) {
                this.authService.presentToast('Please provide a valid email!');
                return;
            }
        }
        this.authService.signupUser(this.creeds).then(
            () => {
                this.loading.dismiss().then(() => {
                    this.router.navigateByUrl('home');
                });
            },
            error => {
                this.loading.dismiss().then(async () => {
                    const alert = await this.alertCtrl.create({
                        message: error.message,
                        buttons: [{text: 'Ok', role: 'cancel'}],
                    });
                    await alert.present();
                });
            }
        );
        this.loading = await this.loadingCtrl.create();
        await this.loading.present();
    }
}
