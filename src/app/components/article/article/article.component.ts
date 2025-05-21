import { Component, input } from '@angular/core';
import { Article } from '../../../models/article.model';


@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  data = input.required<Article>();
}
