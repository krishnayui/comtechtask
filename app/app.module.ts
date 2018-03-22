import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend

import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';


import { AuthGuard } from './_guards/index';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';

import { OtpComponent } from './otp/index';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,        
        HomeComponent,
        LoginComponent,        
        OtpComponent
    ],
    providers: [
        AuthGuard,       
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }