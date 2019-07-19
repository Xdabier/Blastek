import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    public usersListRef: firebase.firestore.CollectionReference;
    public assignments: firebase.firestore.CollectionReference;

    constructor() {
        this.usersListRef = firebase
            .firestore()
            .collection(`userProfile`);
        this.assignments = firebase
            .firestore()
            .collection(`assignments`);
    }

    public getUsersList(): firebase.firestore.CollectionReference {
        return this.usersListRef;
    }

    public getCinemaChiefs() {
        return this.usersListRef.where('isChief', '==', true);
    }

    public checkAssignment(chiefId, hallId) {
        return this.assignments.doc(`${chiefId}_${hallId}`);
    }

    public getAssignedHallsIds(chiefId) {
        return this.assignments.where('chiefId', '==', chiefId);
    }

    public assignChiefToHall(chiefId, hallId) {
        return this.assignments.doc(`${chiefId}_${hallId}`).set({chiefId, hallId});
    }

    public unAssignChiefToHall(chiefId, hallId) {
        return this.assignments.doc(`${chiefId}_${hallId}`).delete()
    }

    public updateUsers(userId: string, email: string,
                       lastName: string,
                       name: number) {
        return this.usersListRef.doc(userId).update({email, lastName, name});
    }

    public getUserDetail(userId: string): firebase.firestore.DocumentReference {
        return this.usersListRef.doc(userId);
    }

    public deleteUser(userId: string) {
        return this.usersListRef.doc(userId).delete();
    }
}
