import { Component, OnInit } from '@angular/core';
import {HallsService} from '../core/halls.service';
import {UsersService} from '../core/users.service';
import {AlertController} from '@ionic/angular';
import {AuthService} from '../core/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-customers-list',
  templateUrl: './admin-customers-list.component.html',
  styleUrls: ['./admin-customers-list.component.scss'],
})
export class AdminCustomersListComponent implements OnInit {
  usersList: Array<any>;

  constructor(public usersService: UsersService, public alertController: AlertController,
              public authService: AuthService, public router: Router) {
  }

  ngOnInit() {
    this.usersService.getUsersList().onSnapshot(value => {
      this.usersList = [];
      value.forEach((hall) => {
        this.usersList.push({
          id: hall.id,
          name: hall.data().name,
          lastName: hall.data().lastName,
          email: hall.data().email
        });
      });
    });
  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      header: 'Delete user',
      message: 'Are you sure you want to delete',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.usersService.deleteUser(id).then((res) => {
              this.authService.presentToast('User deleted!!');
            });
          }
        }
      ]
    });

    await alert.present();
  }

}
