import {Component, OnInit} from '@angular/core';
import {HallsService} from '../core/halls.service';
import {ActivatedRoute, Route} from '@angular/router';
import {AuthService} from '../core/auth.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {UsersService} from '../core/users.service';

@Component({
    selector: 'app-edit-hall',
    templateUrl: './edit-hall.component.html',
    styleUrls: ['./edit-hall.component.scss'],
})
export class EditHallComponent implements OnInit {
    hallId: string;
    name;
    phone;
    address;
    loggedInUser: firebase.User;
    user;

    constructor(public hallsService: HallsService, public route: ActivatedRoute, public authService: AuthService, public usersService: UsersService) {
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
                }
            });
    }

    ngOnInit() {
        this.hallId = this.route.snapshot.paramMap.get('id');
        this.hallsService
            .getHallDetail(this.hallId)
            .get()
            .then(eventSnapshot => {
                this.name = eventSnapshot.data().name;
                this.phone = eventSnapshot.data().phone;
                this.address = eventSnapshot.data().address;
            });
    }

    updateHall() {
        if (
            this.name === undefined ||
            this.phone === undefined ||
            this.address === undefined
        ) {
            return;
        }

        this.hallsService
            .updateHall(this.hallId, this.name, this.address, this.phone)
            .then(() => {
                this.authService.presentToast('hall updated!!');
            });
    }

}
