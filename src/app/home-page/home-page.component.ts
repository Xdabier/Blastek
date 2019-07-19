import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {User} from 'firebase';
import {loggedIn} from '@angular/fire/auth-guard';
import {UsersService} from '../core/users.service';
import {MoviesService} from '../core/movies.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    slideOpts = {
        effect: 'flip'
    };
    loggedInUser: firebase.User;
    user;

    movies = [];

    url: SafeUrl;

    constructor(public authService: AuthService, public usersService: UsersService,
                public movieService: MoviesService, public router: Router) {
        firebase.auth().onAuthStateChanged((a: (firebase.User | null)) => {
            if (a) {
                this.loggedInUser = a;
                this.getCurrentUserData(a.uid);
            } else {
                this.loggedInUser = null;
            }
        });
    }

    getCurrentUserData(uid) {
        this.usersService.getUserDetail(uid).get()
            .then((res) => {
                if (res.exists) {
                    this.user = res.data();
                    this.getMovies();
                }
            });
    }

    getMovies() {
        this.movieService.getMovieList().onSnapshot(snapshot => {
            if (!snapshot.empty) {
                snapshot.docs.forEach((mov) => {
                    const index = this.movies.findIndex(x => x.id === mov.id);
                    if (index === -1) {
                        this.movies.push({...mov.data(), id: mov.id});
                    } else {
                        this.movies[index] = {...mov.data(), id: mov.id};
                    }
                });
            }
        });
    }

    ngOnInit() {
    }

    logout() {
        this.authService.logoutUser().then(() => {
            console.log('loggedout');
            this.router.navigateByUrl('/login');
        });
    }

}
