import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HolidayComponent } from './holidays/holidays.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { NavbarService } from './navbar.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { DataService } from './data.service';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    HolidayComponent,
    ContactComponent,
    FeedbackComponent,
    AboutComponent,
    BookingComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NavbarService,DataService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { 

 
}
