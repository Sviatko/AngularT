import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  searchStr:string = '';

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    // this.searchStr = "ull";
    // console.log('searchStr - ' + this.searchStr );

    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes).filter(article => article.title.toLowerCase().includes(this.searchStr.toLowerCase()));
  }

  onVotedDelete(isDelete: boolean, article) {
    if (isDelete){
      this.articles.splice(this.articles.indexOf(article))
    }
  }

}
