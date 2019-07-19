import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../core/movies.service';
import {AuthService} from '../core/auth.service';
import {Route, Router} from '@angular/router';

@Component({
    selector: 'app-cin-chief-create-movie',
    templateUrl: './cin-chief-create-movie.component.html',
    styleUrls: ['./cin-chief-create-movie.component.scss'],
})
export class CinChiefCreateMovieComponent implements OnInit {
    name = '';
    description = '';
    trailerLink = '';
    movieDateTime = new Date();

    constructor(public moviesService: MoviesService, public authService: AuthService, public router: Router) {
    }

    ngOnInit() {
    }

    createMovie() {
        if (
            this.name === undefined ||
            this.description === undefined ||
            this.movieDateTime === undefined ||
            this.trailerLink === undefined
        ) {
            return;
        }
        this.moviesService
            .createMovie(this.name, this.description, this.movieDateTime, this.trailerLink)
            .then(() => {
                this.authService.presentToast('Movie added!');
                this.router.navigateByUrl('/cin_chief_movies_list');
            });
    }
}
