import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegesterPageComponent } from './regester-page/regester-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CinemaPageComponent } from './cinema-page/cinema-page.component';
import { BookinkPageComponent } from './bookink-page/bookink-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { WelcomPageComponent } from './welcom-page/welcom-page.component';
import { ChooseInterestsComponent } from './choose-interests/choose-interests.component';
import { ForgetComponent } from './forget/forget.component';
import { CreatPassComponent } from './forget/creat-pass/creat-pass.component';
import { CheckEmailComponent } from './forget/check-email/check-email.component';
import { FavouritePageComponent } from './favourite-page/favourite-page.component';
import { AccountPageComponent } from './profile-page/account-page/account-page.component';
import { TicketComponent } from './profile-page/ticket/ticket.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { CinmaSearchComponent } from './cinma-search/cinma-search.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { MovieDeatilsComponent } from './movie-deatils/movie-deatils.component';
import { MovieShowComponent } from './bookink-page/movie-show/movie-show.component';
import { ChooseseatsComponent } from './bookink-page/chooseseats/chooseseats.component';
import { MethodPayComponent } from './payment-page/method-pay/method-pay.component';
import { VariPayComponent } from './payment-page/vari-pay/vari-pay.component';
import { CinmaProfileComponent } from './profile-page/cinma-profile/cinma-profile.component';
import { RequestesPageComponent } from './cinema-page/requestes-page/requestes-page.component';
import { SendmoiverequestpageComponent } from './cinema-page/sendmoiverequestpage/sendmoiverequestpage.component';
import { HallPageComponent } from './cinema-page/hall-page/hall-page.component';
import { AvailableMoviesComponent } from './cinema-page/available-movies/available-movies.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegesterPageComponent,
    MoviePageComponent,
    ProfilePageComponent,
    CinemaPageComponent,
    BookinkPageComponent,
    PaymentPageComponent,
    WelcomPageComponent,
    ChooseInterestsComponent,
    ForgetComponent,
    CreatPassComponent,
    CheckEmailComponent,
    FavouritePageComponent,
    AccountPageComponent,
    TicketComponent,
    SearchMoviesComponent,
    CinmaSearchComponent,
    FilterPageComponent,
    MovieDeatilsComponent,
    MovieShowComponent,
    ChooseseatsComponent,
    MethodPayComponent,
    VariPayComponent,
    CinmaProfileComponent,
    RequestesPageComponent,
    SendmoiverequestpageComponent,
    HallPageComponent,
    AvailableMoviesComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
