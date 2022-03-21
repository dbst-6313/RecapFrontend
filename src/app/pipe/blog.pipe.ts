import { Pipe, PipeTransform } from '@angular/core';
import { BlogDetail } from '../models/blog';

@Pipe({
  name: 'blog'
})
export class BlogPipe implements PipeTransform {

  transform(value: BlogDetail[], filterText: string): BlogDetail[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:BlogDetail)=>c.header.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
