//our root app component
import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { PagerService } from "./pager.service";
import { defaultThrottleConfig } from "rxjs/internal-compatibility";
import { Pager } from "./Pager";
@Component({
  selector: "my-app",
  styleUrls: [`/app.component.css`],
  templateUrl: `./app.component.html`
})
export class AppComponent implements OnInit {
  pager: Pager;
  array = [];
  sum = 100;
  throttle = 50;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";

  constructor(
    private dataService: DataService,
    private pagerService: PagerService
  ) {
    //this.appendItems(0, this.sum);
    //debugger
    //console.log(systemConfig);
  }

  ngOnInit() {
    this.getData();
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array.push([i, " ", this.generateWord()].join(""));
      //this.array.slice(startIndex, endIndex);
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, "push");
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, "unshift");
  }

  onScrollDown(ev) {
    this.direction = "down";
    console.log("scrolled down!!", ev);
    this.getData();
    // add another 20 items
    // const start = this.sum;
    // this.sum += 20;
    // this.appendItems(start, this.sum);
  }

  onUp(ev) {
    console.log("scrolled up!", ev);
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);
    this.direction = "up";
  }

  getData() {
    console.log("getdata");
    //this.results = concat(this.results, this.dataService.getCommentsObs());

    // this.dataService.getCommentsObs().subscribe(res => {
    //   this.array = this.array.concat(res);
    // });
    this.dataService.get("posts").subscribe((response: any) => {
      this.array = this.array.concat(response);
      console.log("response", this.array.length);
      this.pager = this.pagerService.getPager(this.array.length);
      // switch (this.direction) {
      //   case "up": {
      //     this.pager = this.pagerService.getPager(
      //       this.array.length,
      //       this.pager.currentPage - 1
      //     );
      //     break;
      //   }
      //   case "down":
      //     {
      //       this.pager = this.pagerService.getPager(
      //         this.array.length,
      //         this.pager.currentPage + 1
      //       );
      //       break;
      //     }
      //     break;
      //   default: {
      //     this.pager = this.pagerService.getPager(this.array.length);
      //     break;
      //   }
      // }

      console.log(this.pager);
    });
  }

  generateWord() {
    return chance.word();
  }
}
