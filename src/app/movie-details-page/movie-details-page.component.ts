import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../core/movies.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
    selector: 'app-movie-details-page',
    templateUrl: './movie-details-page.component.html',
    styleUrls: ['./movie-details-page.component.scss'],
})
export class MovieDetailsPageComponent implements OnInit {
    movieDetails;
    movieId = '';

    url: SafeUrl;

    constructor(public route: ActivatedRoute, public movieService: MoviesService, public sanitizer: DomSanitizer) {
    }


    renderUrl(url) {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    ngOnInit() {
        this.movieId = this.route.snapshot.paramMap.get('movieId');
        this.movieService.getMovieDetail(this.movieId).get().then((mov) => {
            if (mov.exists) {
                this.movieDetails = mov.data();
                this.renderUrl('https://www.youtube.com/embed/' + mov.data().trailerLink);
            }
        });
    }

    bookticket() {

    }

}
