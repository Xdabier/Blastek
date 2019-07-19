import {Component, OnInit} from '@angular/core';
import {HallsService} from '../core/halls.service';
import {UsersService} from '../core/users.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


@Component({
    selector: 'app-cin-chief-halls-list',
    templateUrl: './cin-chief-halls-list.component.html',
    styleUrls: ['./cin-chief-halls-list.component.scss'],
})
export class CinChiefHallsListComponent implements OnInit {
    hallsList: Array<any>;
    loggedInUser: firebase.User;

    constructor(public hallsservice: HallsService, public userService: UsersService) {
        firebase.auth().onAuthStateChanged((a: (firebase.User | null)) => {
            if (a) {
                this.loggedInUser = a;
                this.getHalls();
            } else {
                this.loggedInUser = null;
            }
        });
    }

    getHalls() {
        this.userService.getAssignedHallsIds(this.loggedInUser.uid)
            .onSnapshot((ass) => {
                if (!ass.empty) {
                    this.hallsList = [];

                    ass.docs.forEach((ASS) => {
                        this.hallsservice.getHallDetail(ASS.data().hallId).get()
                            .then((hall) => {
                                this.hallsList.push({
                                    id: hall.id,
                                    name: hall.data().name,
                                    address: hall.data().address,
                                    seats: hall.data().seats,
                                    phone: hall.data().phone
                                });
                            });
                    });
                }
            });
    }

    ngOnInit() {
        ;
    }

}
