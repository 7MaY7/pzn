import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AdminComponent } from './admin/admin.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

var firebaseConfig = {
  apiKey: "AIzaSyA1VU787Q52pJ6UwDwPzDpujHYpgtXMBH0",
  authDomain: "ang-pzn.firebaseapp.com",
  databaseURL: "https://ang-pzn.firebaseio.com",
  projectId: "ang-pzn",
  storageBucket: "ang-pzn.appspot.com",
  messagingSenderId: "991564227364"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    AdminComponent,
    TourDetailsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
