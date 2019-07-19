import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../core/movies.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../core/auth.service';

@Component({
    selector: 'app-cin-chief-edit-movie',
    templateUrl: './cin-chief-edit-movie.component.html',
    styleUrls: ['./cin-chief-edit-movie.component.scss'],
})
export class CinChiefEditMovieComponent implements OnInit {
    movieId: string;

    name = '';
    description = '';
    trailerLink = '';
    movieDateTime = new Date();

    constructor(public moviesServices: MoviesService, public route: ActivatedRoute,
                public authService: AuthService, public router: Router) {
    }

    ngOnInit() {
        this.movieId = this.route.snapshot.paramMap.get('movieId');
        this.moviesServices
            .getMovieDetail(this.movieId)
            .get()
            .then(eventSnapshot => {
                this.name = eventSnapshot.data().name;
                this.description = eventSnapshot.data().description;
                this.trailerLink = eventSnapshot.data().trailerLink;
                this.movieDateTime = eventSnapshot.data().movieDateTime;
            });
    }

    updateMovie() {
        if (
            this.name === undefined ||
            this.description === undefined ||
            this.movieDateTime === undefined ||
            this.trailerLink === undefined
        ) {
            return;
        }
        this.moviesServices
            .updateMovie(this.movieId, this.name, this.description, this.movieDateTime, this.trailerLink)
            .then(() => {
                this.authService.presentToast('Movie updated!');
                this.router.navigateByUrl('/cin_chief_movies_list');
            });
    }

}
