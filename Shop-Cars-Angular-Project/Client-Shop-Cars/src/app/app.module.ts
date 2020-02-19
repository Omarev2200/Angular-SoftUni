import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertModule, } from 'ngx-bootstrap'; 
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

import {CoreModule} from './core/core.module'
import { UserModule } from './user/user.module';
import { CarsModule } from './cars/cars.module';
import {ToastrModule} from 'ngx-toastr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AppInterceptor } from './app-interceptor';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    CoreModule,
    UserModule,
    CarsModule,
    FormsModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
