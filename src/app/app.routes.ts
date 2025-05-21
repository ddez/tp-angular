import { Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article/article.component';
import { ArticlesComponent } from './components/article/articles/articles.component';

export const routes: Routes = [
    {
        path: 'article',
        component: ArticleComponent
    }, 
   {
        path: 'articles',
        component: ArticlesComponent
    }, 
];
