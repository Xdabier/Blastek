import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AdminCinemaHallsListComponent} from './admin-cinema-halls-list/admin-cinema-halls-list.component';
import {AdminCreateCinemaComponent} from './admin-create-cinema/admin-create-cinema.component';
import {AdminCustomersListComponent} from './admin-customers-list/admin-customers-list.component';
import {CinChiefCreateMovieComponent} from './cin-chief-create-movie/cin-chief-create-movie.component';
import {CinChiefEditMovieComponent} from './cin-chief-edit-movie/cin-chief-edit-movie.component';
import {CinChiefMoviesListComponent} from './cin-chief-movies-list/cin-chief-movies-list.component';
import {CinemaHallSeatsPageComponent} from './cinema-hall-seats-page/cinema-hall-seats-page.component';
import {CinemaHallsPageComponent} from './cinema-halls-page/cinema-halls-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {MovieDetailsPageComponent} from './movie-details-page/movie-details-page.component';
import {SignupPageComponent} from './signup-page/signup-page.component';
import {FormsModule} from '@angular/forms';
import {ProfileComponent} from './profile/profile.component';
import {AuthService} from './core/auth.service';
import {UsersService} from './core/users.service';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {CinChiefHomeComponent} from './cin-chief-home/cin-chief-home.component';
import {CinChiefHallsListComponent} from './cin-chief-halls-list/cin-chief-halls-list.component';
import {HallsService} from './core/halls.service';
import {BookingService} from './core/booking.service';
import {MoviesService} from './core/movies.service';
import {EditHallComponent} from './edit-hall/edit-hall.component';
import {CinChiefsToAssignComponent} from './cin-chiefs-to-assign/cin-chiefs-to-assign.component';
import {HallsListToAssignComponent} from './halls-list-to-assign/halls-list-to-assign.component';
import {AssignedHallsToMovieComponent} from './assigned-halls-to-movie/assigned-halls-to-movie.component';

@NgModule({
    declarations: [
        AppComponent,
        AdminCinemaHallsListComponent,
        AdminCreateCinemaComponent,
        AdminCustomersListComponent,
        CinChiefCreateMovieComponent,
        CinChiefEditMovieComponent,
        CinChiefMoviesListComponent,
        CinemaHallSeatsPageComponent,
        CinemaHallsPageComponent,
        HomePageComponent,
        LoginPageComponent,
        MovieDetailsPageComponent,
        SignupPageComponent,
        ProfileComponent,
        AdminHomeComponent,
        CinChiefHomeComponent,
        CinChiefHallsListComponent,
        EditHallComponent,
        CinChiefsToAssignComponent,
        HallsListToAssignComponent,
        AssignedHallsToMovieComponent
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        FormsModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
