import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class HallsService {

    public hallssListRef: firebase.firestore.CollectionReference;
    public bookingListRef: firebase.firestore.CollectionReference;

    constructor() {
        this.hallssListRef = firebase
            .firestore()
            .collection(`hallssList`);
    }

    public createHall(
        name: string,
        address: string,
        phone: number,
        seats: number,
    ): Promise<firebase.firestore.DocumentReference> {
        return this.hallssListRef.add({
            name,
            address,
            seats,
            phone
        });
    }

    public getHallList(): firebase.firestore.CollectionReference {
        return this.hallssListRef;
    }

    public updateHall(hallId: string, name: string,
                      address: string,
                      seats: number,
                      phone: number) {
        return this.hallssListRef.doc(hallId).update({name, address, phone, seats});
    }

    public getHallDetail(hallId: string): firebase.firestore.DocumentReference {
        return this.hallssListRef.doc(hallId);
    }

    public bookHall(userId, hallId: string) {
        return this.hallssListRef.doc(`${userId}_${hallId}`).set({userId, hallId, bookingDate: new Date()});
    }
}


