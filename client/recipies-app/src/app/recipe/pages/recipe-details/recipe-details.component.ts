import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { IRecipe } from 'src/app/core/models/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  public recipe: IRecipe;

  constructor(private searchService: SearchService, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.searchService.getRecipeById(params.id).subscribe((recipe) => {
        this.recipe = recipe;
        console.log(recipe);
      });
    });
  }
}
