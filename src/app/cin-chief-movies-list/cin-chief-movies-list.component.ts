import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../core/movies.service';

@Component({
    selector: 'app-cin-chief-movies-list',
    templateUrl: './cin-chief-movies-list.component.html',
    styleUrls: ['./cin-chief-movies-list.component.scss'],
})
export class CinChiefMoviesListComponent implements OnInit {
    moviesList: Array<any>;

    constructor(public moviesService: MoviesService) {
    }

    ngOnInit() {
        this.moviesService.getMovieList().onSnapshot(value => {
            this.moviesList = [];
            value.forEach((hall) => {
                this.moviesList.push({
                    id: hall.id,
                    name: hall.data().name,
                    description: hall.data().description,
                    movieDateTime: hall.data().movieDateTime,
                    trailerLink: hall.data().trailerLink
                });
            });
        });
    }

}
