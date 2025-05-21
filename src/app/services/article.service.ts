import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  getArticles(): Article[] {
    return [
        {
          domaine: 'Château Latour',
          nom: 'Grand Vin Pauillac 2010',
          image: 'https://images.vivino.com/thumbs/4RHhCzeQTsCeyCScxO0LOw_pb_x600.png',
          note: 4.6
        },
        {
          domaine: 'Christophe Buisson',
          nom: 'Saint-Romain Rouge',
          image: 'https://images.vivino.com/thumbs/as3SKKjfQm2E9Om7ubDImg_pb_x600.png',
          note: 3.8
        },
        {
          domaine: 'Château Pigoudet',
          nom: 'Classic Rosé',
          image: 'https://images.vivino.com/thumbs/7NuqRindSxW7cXDBQLU4SQ_pb_x600.png',
          note: 2.8
        }
      ]
  }
}
