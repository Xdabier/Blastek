import {Component, OnInit} from '@angular/core';
import {HallsService} from '../core/halls.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-admin-create-cinema',
    templateUrl: './admin-create-cinema.component.html',
    styleUrls: ['./admin-create-cinema.component.scss'],
})
export class AdminCreateCinemaComponent implements OnInit {
    name;
    phone;
    address;
    seats;

    constructor(public hallsService: HallsService, private router: Router) {
    }

    ngOnInit() {
    }

    createHall() {
        if (
            this.name === undefined ||
            this.phone === undefined ||
            this.seats === undefined ||
            this.address === undefined
        ) {
            return;
        }
        this.hallsService
            .createHall(this.name, this.address, this.phone, this.seats)
            .then(() => {
                this.router.navigateByUrl('/admin_cinema_halls');
            });
    }

}
