import { Pipe, PipeTransform } from '@angular/core';
import { AdvertDto } from '../models/advertDto';

@Pipe({
  name: 'property'
})
export class PropertyPipe implements PipeTransform {

  transform(value: AdvertDto[], filterText: string): AdvertDto[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:AdvertDto)=>c.title.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
