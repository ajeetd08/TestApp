import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestareaComponent } from './testarea/testarea.component';
import { JsonsearchService } from './jsonsearch.service';


@NgModule({
  declarations: [
    AppComponent,
    TestareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [JsonsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
