import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment as env } from 'src/environments/environment';
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { NavComponent } from './components/nav/nav.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BackendApiComponent } from './components/backend-api/backend-api.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    NavComponent,
    LogoutButtonComponent,
    ProfileComponent,
    BackendApiComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [`${env.auth.serverUrl}api/steamaccount`]
      }
    }),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
