import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModalComponent } from './modal/modal.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

declare const chance;

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule, InfiniteScrollModule ],
  declarations: [ AppComponent, HelloComponent, ModalComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
