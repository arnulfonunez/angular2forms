import { FormPosterService } from './services/form-poster.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ButtonsModule.forRoot()

  ],
  providers: [FormPosterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
