import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  Input,        // <-- added,
  HostBinding
} from '@angular/core';
import {Article} from './article.model'; // <-- added

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  @Output() onVotedDelete = new EventEmitter<boolean>();

  constructor() {
    // article is populated by the Input now,
    // so we don't need anything here
  }

  voteUp(): boolean {
    this.article.voteUp();
    if (this.article.votes > 10) {
      // make red
      document.getElementById("header").classList.add('red');
    }
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    if (this.article.votes < 11) {
      if (document.getElementById("header").className.match(/(?:^|\s)red(?!\S)/)) {
        document.getElementById("header").classList.remove('red');
      }
    }
    if (this.article.votes < 0) {
      this.onVotedDelete.emit(true)
    }
    return false;
  }

  ngOnInit() {
  }

}
