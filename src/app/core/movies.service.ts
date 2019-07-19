import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    public moviessListRef: firebase.firestore.CollectionReference;
    public assignmentsMovieHall: firebase.firestore.CollectionReference;



    constructor() {
        this.moviessListRef = firebase
            .firestore()
            .collection(`moviesList`);
        this.assignmentsMovieHall = firebase
            .firestore()
            .collection(`assignmentsMovieHall`);
    }

    public createMovie(
        name: string,
        description: string,
        movieDateTime,
        trailerLink: string
    ): Promise<firebase.firestore.DocumentReference> {
        return this.moviessListRef.add({name, description, movieDateTime, trailerLink});
    }

    public getMovieList(): firebase.firestore.CollectionReference {
        return this.moviessListRef;
    }

    public updateMovie(movieId: string, name: string,
                       description: string,
                       movieDateTime,
                       trailerLink: string) {
        return this.moviessListRef.doc(movieId).update({name, description, movieDateTime, trailerLink});
    }

    public getMovieDetail(movieId: string): firebase.firestore.DocumentReference {
        return this.moviessListRef.doc(movieId);
    }

    public checkAssignment(movieId, hallId) {
        return this.assignmentsMovieHall.doc(`${movieId}_${hallId}`);
    }

    public getAssignedHallsIds(movieId) {
        return this.assignmentsMovieHall.where('movieId', '==', movieId);
    }


    public assignMovieToHall(movieId, hallId) {
        return this.assignmentsMovieHall.doc(`${movieId}_${hallId}`).set({movieId, hallId});
    }

    public unAssignMovieToHall(movieId, hallId) {
        return this.assignmentsMovieHall.doc(`${movieId}_${hallId}`).delete()
    }
}
