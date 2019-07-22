import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OktaAuthModule } from '@okta/okta-angular';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MarkdownModule } from 'ngx-markdown';
import { EditComponent } from './edit/edit.component';

const firebaseConfig = {
  apiKey: "AIzaSyDkRqazC11pK0d3wTO0c4gpSP5eqoMeY00",
  authDomain: "wikiclient-3f4db.firebaseapp.com",
  databaseURL: "https://wikiclient-3f4db.firebaseio.com",
  projectId: "wikiclient-3f4db",
  storageBucket: "wikiclient-3f4db.appspot.com",
  messagingSenderId: "1005685612295",
  appId: "1:1005685612295:web:f6e3ad6bb84ded40"
};

const config = {
  issuer: 'https://dev-309142.okta.com',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oaz22bpnyyaJLucM356'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OktaAuthModule.initAuth(config),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MarkdownModule.forRoot()
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }