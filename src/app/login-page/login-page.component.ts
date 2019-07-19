import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';
import {Router} from '@angular/router';
import {UsersService} from '../core/users.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    email = '';
    password = '';

    constructor(public authServices: AuthService, public router: Router, public usersService: UsersService) {
    }

    ngOnInit() {
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

    login(): void {
        if (!this.email || !this.password) {
            this.authServices.presentToast('All fields are required!');
            return;
        } else if (this.password.length < 6) {
            this.authServices.presentToast('Passwords should be at least 6 characters');
            return;
        } else {
            if (!this.validateEmail(this.email)) {
                this.authServices.presentToast('Please provide a valid email!');
                return;
            }
        }

        this.authServices.loginUser(this.email, this.password).then((res) => {
            console.log(res);
            this.router.navigateByUrl('home');
        });
    }

}
