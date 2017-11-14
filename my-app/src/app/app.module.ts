import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import {CatsComponent} from './cats/cats.component';
import {CatDetailsComponent} from './cat-details/cat-details.component';
import {CatService} from './cat.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';
import {AppRoutingModule} from './/app-routing.module';
import {MainPageComponent} from './main-page/main-page.component';
import { CatSearchComponent } from './cat-search/cat-search.component';


@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatDetailsComponent,
    MessagesComponent,
    MainPageComponent,
    CatSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // TODO: The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // TODO: and returns simulated server responses.
    // TODO: Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CatService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
