import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CatsComponent} from './cats/cats.component';
import {CatDetailsComponent} from './cat-details/cat-details.component';
import {CatService} from './cat.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';
import {AppRoutingModule} from './/app-routing.module';
import {MainPageComponent} from './main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatDetailsComponent,
    MessagesComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CatService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
