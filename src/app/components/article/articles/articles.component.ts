import { Component, inject } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-articles',
  imports: [ArticleComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

  articleSrv = inject(ArticleService);

  listArticles = this.articleSrv.getArticles();
}
