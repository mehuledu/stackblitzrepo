import { Pipe, PipeTransform } from "@angular/core";
import {PagerService } from './pager.service';
import { Pager} from './Pager';
import value from "*.json";

@Pipe({ name: "pagination" })
export class PaginationPipe implements PipeTransform {
  constructor(private pagerService :PagerService){

  }
  transform(value: any[], pager : Pager): any {
    if(!value) return [];
    //return [...value.slice(pager.startIndex, pager.endIndex + 1)];
    pager.pages.forEach(el => {
      let predictPager = this.pagerService.getPager(value.length, el);
      value = [...value, ...value.slice(predictPager.startIndex, predictPager.endIndex + 1)];
    });
    return value;
  }
}