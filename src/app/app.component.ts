//our root app component
import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "my-app",
  styleUrls: [`/app.component.css`],
  templateUrl: `./app.component.html`
})
export class AppComponent implements OnInit {
  array = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  title = "Version 2";

  constructor(private dataService: DataService) {
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
    console.log("scrolled down!!", ev);

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);

    this.direction = "down";
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
    });
  }

  generateWord() {
    return chance.word();
  }
}
