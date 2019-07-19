import {Component, OnInit} from '@angular/core';
import {HallsService} from '../core/halls.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../core/users.service';
import {AlertController} from '@ionic/angular';
import {AuthService} from '../core/auth.service';

@Component({
    selector: 'app-cin-chiefs-to-assign',
    templateUrl: './cin-chiefs-to-assign.component.html',
    styleUrls: ['./cin-chiefs-to-assign.component.scss'],
})
export class CinChiefsToAssignComponent implements OnInit {
    hallId: string;
    chiefsList = [];


    constructor(public usersService: UsersService, public alertController: AlertController,
                public authService: AuthService, public router: Router, public route: ActivatedRoute) {
    }

    getCinChiefs() {
        this.usersService.getCinemaChiefs().get().then(value => {
            this.chiefsList = [];
            value.forEach((chief) => {
                this.usersService.checkAssignment(chief.id, this.hallId).get()
                    .then((res) => {
                        if (res.exists) {
                            this.chiefsList.push({
                                id: chief.id,
                                name: chief.data().name,
                                lastName: chief.data().lastName,
                                email: chief.data().email,
                                assigned: true
                            });
                        } else {
                            this.chiefsList.push({
                                id: chief.id,
                                name: chief.data().name,
                                lastName: chief.data().lastName,
                                email: chief.data().email,
                                assigned: false
                            });
                        }
                    }).catch((err) => {
                    this.chiefsList.push({
                        id: chief.id,
                        name: chief.data().name,
                        lastName: chief.data().lastName,
                        email: chief.data().email,
                        assigned: false
                    });
                });
            });
        });
    }

    ngOnInit() {
        this.hallId = this.route.snapshot.paramMap.get('hallId');
        this.getCinChiefs();
    }

    assignToHall(id, assign) {
        if (assign) {
            this.usersService.assignChiefToHall(id, this.hallId).then(res => {
                this.authService.presentToast('Chief assigned to hall!');
                this.getCinChiefs();
            });
        } else {
            this.usersService.unAssignChiefToHall(id, this.hallId).then(res => {
                this.authService.presentToast('un assigned from hall!');
                this.getCinChiefs();
            });
        }
    }

}
