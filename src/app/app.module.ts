import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ListComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      Ng2LoadingSpinnerModule.forRoot({})

   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { } 
