import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ToastController} from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


interface User {
    uid: string;
    email?: string | null;
    photoURL?: string;
    displayName?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: Observable<User | null>;

    constructor(
        private router: Router,
        public toastController: ToastController
    ) {
    }

    async presentToast(message) {
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        toast.present();
    }

    loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    signupUser(creeds: {name: string, lastName: string, email: string, password: string, password2: string}): Promise<any> {
        const {password, password2, ...others} = creeds;
        return firebase
            .auth()
            .createUserWithEmailAndPassword(creeds.email, creeds.password)
            .then((newUserCredential: firebase.auth.UserCredential) => {
                firebase
                    .firestore()
                    .doc(`/userProfile/${newUserCredential.user.uid}`)
                    .set(others);
            })
            .catch(error => {
                console.error(error);
                this.presentToast(error.message);
                throw new Error(error);
            });
    }

    resetPassword(email: string): Promise<void> {
        return firebase.auth().sendPasswordResetEmail(email);
    }

    logoutUser(): Promise<void> {
        return firebase.auth().signOut();
    }

}
