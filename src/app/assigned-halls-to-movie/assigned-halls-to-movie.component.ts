import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../core/movies.service';
import {ActivatedRoute} from '@angular/router';
import {HallsService} from '../core/halls.service';

@Component({
    selector: 'app-assigned-halls-to-movie',
    templateUrl: './assigned-halls-to-movie.component.html',
    styleUrls: ['./assigned-halls-to-movie.component.scss'],
})
export class AssignedHallsToMovieComponent implements OnInit {
    hallsList = [];
    movieId: string;

    constructor(public moviesService: MoviesService, public route: ActivatedRoute, public hallsService: HallsService) {
    }

    ngOnInit() {
        this.movieId = this.route.snapshot.paramMap.get('movieId');

        this.moviesService.getAssignedHallsIds(this.movieId).get()
            .then(value => {
                console.log(value.docs);

                value.docs.forEach((value1, index) => {
                    this.hallsService.getHallDetail(value1.data().hallId).get()
                        .then(value2 => {
                            if (value2.exists) {
                                console.log(value2.data());
                                this.hallsList.push({...value2.data(), id: value2.id});
                            }
                        });
                });
            });
    }

}
