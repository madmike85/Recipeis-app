import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';
import { IRecipe } from 'src/app/core/models/recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public recipes: IRecipe[] = [];

  constructor(private searchService: SearchService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params.query) {
        this.searchService.getAllRecipes().subscribe((recipes) => {
          this.recipes = recipes;
          console.log(recipes);
        });
      } else {
        this.searchService.getRecipesByQuery(params.query).subscribe((recipes) => {
          this.recipes = recipes;
          console.log(recipes);
        });
      }
    });
  }
}
