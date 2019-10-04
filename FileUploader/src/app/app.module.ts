import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NcaFile } from './model/app.model';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }