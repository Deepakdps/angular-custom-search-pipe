import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../models/user";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(values: User[], searchValue: string): any {
    console.log("hey hey", values, searchValue);

    if (!values) return [];

    if (!searchValue) return values;
    return values.filter(topic => {
      // javascript filter(function)
      // if below is false, then topic will be removed from topics array
      return topic.username.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
