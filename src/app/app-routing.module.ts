import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AdminCreateCinemaComponent} from './admin-create-cinema/admin-create-cinema.component';
import {AdminCustomersListComponent} from './admin-customers-list/admin-customers-list.component';
import {CinChiefCreateMovieComponent} from './cin-chief-create-movie/cin-chief-create-movie.component';
import {CinChiefEditMovieComponent} from './cin-chief-edit-movie/cin-chief-edit-movie.component';
import {CinChiefMoviesListComponent} from './cin-chief-movies-list/cin-chief-movies-list.component';
import {CinemaHallSeatsPageComponent} from './cinema-hall-seats-page/cinema-hall-seats-page.component';
import {CinemaHallsPageComponent} from './cinema-halls-page/cinema-halls-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {MovieDetailsPageComponent} from './movie-details-page/movie-details-page.component';
import {SignupPageComponent} from './signup-page/signup-page.component';
import {AdminCinemaHallsListComponent} from './admin-cinema-halls-list/admin-cinema-halls-list.component';
import {ProfileComponent} from './profile/profile.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {CinChiefHomeComponent} from './cin-chief-home/cin-chief-home.component';
import {CinChiefHallsListComponent} from './cin-chief-halls-list/cin-chief-halls-list.component';
import {EditHallComponent} from './edit-hall/edit-hall.component';
import {CinChiefsToAssignComponent} from './cin-chiefs-to-assign/cin-chiefs-to-assign.component';
import {HallsListToAssignComponent} from './halls-list-to-assign/halls-list-to-assign.component';
import {AssignedHallsToMovieComponent} from './assigned-halls-to-movie/assigned-halls-to-movie.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'admin_create_cinema', component: AdminCreateCinemaComponent},
    {path: 'admin_home', component: AdminHomeComponent},
    {path: 'admin_customer', component: AdminCustomersListComponent},
    {path: 'admin_cinema_halls', component: AdminCinemaHallsListComponent},
    {path: 'edit_hall', component: EditHallComponent},
    {path: 'edit_hall/:id', component: EditHallComponent},
    {path: 'cin_chief_home', component: CinChiefHomeComponent},
    {path: 'assign_chiefs', component: CinChiefsToAssignComponent},
    {path: 'assign_chiefs/:hallId', component: CinChiefsToAssignComponent},
    {path: 'assign_movie_hall', component: HallsListToAssignComponent},
    {path: 'assign_movie_hall/:movieId', component: HallsListToAssignComponent},
    {path: 'cin_chief_halls_list', component: CinChiefHallsListComponent},
    {path: 'cin_chief_create_movie', component: CinChiefCreateMovieComponent},
    {path: 'cin_chief_edit_movie', component: CinChiefEditMovieComponent},
    {path: 'cin_chief_edit_movie/:movieId', component: CinChiefEditMovieComponent},
    {path: 'cin_chief_movies_list', component: CinChiefMoviesListComponent},
    {path: 'cinema_halls_seats', component: CinemaHallSeatsPageComponent},
    {path: 'cinema_halls_seats/:hallId', component: CinemaHallSeatsPageComponent},
    {path: 'cinema_halls', component: CinemaHallsPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'movie_details', component: MovieDetailsPageComponent},
    {path: 'assigned_halls_movie', component: AssignedHallsToMovieComponent},
    {path: 'assigned_halls_movie/:movieId', component: AssignedHallsToMovieComponent},
    {path: 'movie_details/:movieId', component: MovieDetailsPageComponent},
    {path: 'signup', component: SignupPageComponent},
    {path: 'profile', component: ProfileComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
