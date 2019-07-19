import {Component, OnInit} from '@angular/core';
import {HallsService} from '../core/halls.service';

@Component({
    selector: 'app-admin-cinema-halls-list',
    templateUrl: './admin-cinema-halls-list.component.html',
    styleUrls: ['./admin-cinema-halls-list.component.scss'],
})
export class AdminCinemaHallsListComponent implements OnInit {
    hallsList: Array<any>;

    constructor(public hallsservice: HallsService) {
    }

    ngOnInit() {
        this.hallsservice.getHallList().onSnapshot(value => {
                this.hallsList = [];
                value.forEach((hall) => {
                    this.hallsList.push({
                        id: hall.id,
                        name: hall.data().name,
                        address: hall.data().address,
                        phone: hall.data().phone,
                        seats: hall.data().seats
                    });
                });
            });
    }

}
