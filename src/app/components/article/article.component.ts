import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Global } from 'src/app/services/global';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router

  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
          }else{
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);

        }
      );
      
    });
  }

}
