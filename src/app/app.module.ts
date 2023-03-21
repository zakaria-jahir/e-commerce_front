import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
=======
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
>>>>>>> 60cfc9fdb6f723b7c5d25422025b0d3261e27118

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavComponent,
    FooterComponent,
    HomeComponent
=======
    HomeComponent,
    ContactComponent
>>>>>>> 60cfc9fdb6f723b7c5d25422025b0d3261e27118
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
