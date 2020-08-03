import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "pagination" })
export class PaginationPipe implements PipeTransform {
  transform(value: any[], pager): any {
    if(!value) return [];
    return [...value.slice(pager.startIndex, pager.endIndex + 1)];
  }
}
