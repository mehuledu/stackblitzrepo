import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ModalComponent } from "./modal/modal.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { DataService } from "./data.service";
import { HttpClientModule } from "@angular/common/http";
import { PagerService } from "./pager.service";
import { PaginationPipe } from './pagination.pipe';
import { ScrollContainerComponent } from './scroll-container/scroll-container.component';

declare const chance;

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, InfiniteScrollModule],
  declarations: [AppComponent, HelloComponent, ModalComponent, PaginationPipe, ScrollContainerComponent],
  bootstrap: [AppComponent],
  providers: [DataService, PagerService]
})
export class AppModule {}
