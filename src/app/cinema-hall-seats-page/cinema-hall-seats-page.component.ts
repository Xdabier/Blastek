import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HallsService} from '../core/halls.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {AuthService} from '../core/auth.service';

@Component({
    selector: 'app-cinema-hall-seats-page',
    templateUrl: './cinema-hall-seats-page.component.html',
    styleUrls: ['./cinema-hall-seats-page.component.scss'],
})
export class CinemaHallSeatsPageComponent implements OnInit {
    hallId;
    hallDetails;
    arraySeats = [];
    loggedInUser;

    constructor(public route: ActivatedRoute, public hallsService: HallsService,
                public router: Router, public authService: AuthService) {
        firebase.auth().onAuthStateChanged((a: (firebase.User | null)) => {
            if (a) {
                this.loggedInUser = a;
            } else {
                this.loggedInUser = null;
            }
        });
    }

    ngOnInit() {
        this.hallId = this.route.snapshot.paramMap.get('hallId');

        this.hallsService.getHallDetail(this.hallId).get()
            .then(value => {
                if (value.exists) {
                    this.hallDetails = value.data();
                    this.returnArrayOfSeats();
                }
            });
    }

    returnArrayOfSeats() {
        for (let i = 0; i < this.hallDetails.seats; i++) {
            this.arraySeats.push('seat' + i);
        }
    }

    randoùmSeatNumber() {
        const min = 1;
        const max = 100;
        let random = Math.random() * (+max - +min) + +min;
        return random.toFixed(0);
    }

    confirmReservation() {
        if (!this.loggedInUser) {
            this.router.navigateByUrl('/login');
            this.authService.presentToast('You have to be logged in to book!');
        } else {
            this.hallsService.bookHall(this.loggedInUser.uid, this.hallId).then(value => {
                this.authService.presentToast('You are book to seat ' + this.randoùmSeatNumber());
            });
        }
    }

}
