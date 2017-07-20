import { Pipe, PipeTransform } from '@angular/core';
import {Article} from "./article/article.model";

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(articles: Article[], searchStr:string): any {
    console.log('searchStr - ' + searchStr);
    console.log(articles.toString);
    if(searchStr === undefined) return articles;
    return articles.filter(article => article.title.toLowerCase().includes(searchStr.toLowerCase()));
  }
}
