import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';
import { IRecipe } from 'src/app/core/models/recipe.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public recipes: IRecipe[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.getAllRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      console.log(recipes);
    });
  }
}
