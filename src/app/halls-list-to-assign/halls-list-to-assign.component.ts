import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../core/movies.service';
import {AuthService} from '../core/auth.service';
import {ActivatedRoute} from '@angular/router';
import {HallsService} from '../core/halls.service';

@Component({
    selector: 'app-halls-list-to-assign',
    templateUrl: './halls-list-to-assign.component.html',
    styleUrls: ['./halls-list-to-assign.component.scss'],
})
export class HallsListToAssignComponent implements OnInit {
    movieId: string;
    hallsList = [];

    constructor(public moviesService: MoviesService, public authService: AuthService,
                public route: ActivatedRoute, public hallsService: HallsService) {
    }

    ngOnInit() {
        this.movieId = this.route.snapshot.paramMap.get('movieId');
        this.getHalls();
    }

    getHalls() {
        this.hallsService.getHallList().get().then(value => {
            this.hallsList = [];
            value.forEach((hall) => {
                this.moviesService.checkAssignment(this.movieId, hall.id).get()
                    .then((res) => {
                        if (res.exists) {
                            this.hallsList.push({...hall.data(), id: hall.id, assigned: true});
                        } else {
                            this.hallsList.push({...hall.data(), id: hall.id, assigned: false});
                        }
                    }).catch((err) => {
                    this.hallsList.push({...hall.data(), id: hall.id, assigned: false});
                });
            });
        });
    }


    assignToHall(id, assign) {
        if (assign) {
            this.moviesService.assignMovieToHall(this.movieId, id).then(res => {
                this.authService.presentToast('Hall assigned to movie!');
                this.getHalls();
            });
        } else {
            this.moviesService.unAssignMovieToHall(this.movieId, id).then(res => {
                this.authService.presentToast('un assigned from movie!');
                this.getHalls();
            });
        }
    }

}
