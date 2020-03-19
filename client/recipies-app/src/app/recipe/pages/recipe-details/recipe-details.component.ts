import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from 'src/app/core/models/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  private rating: number;
  private id: string;

  public recipe: IRecipe;
  public rated = false;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.searchService.getRecipeById(params.id).subscribe((recipe) => {
        this.recipe = recipe;
        this.rating = recipe.rating;
        this.id = recipe._id;
      });
    });
  }

  public goBack(): void {
    const query = this.searchService.getLastQuery();
    if (query) {
      this.router.navigate(['/recipes', this.searchService.getLastQuery()]);
    } else {
      this.router.navigate(['/recipes']);
    }
  }

  public like(): void {
    this.rating++;
    this.rated = true;
    this.searchService.updateRecipe(this.id, { rating: this.rating });
  }

  public dislike(): void {
    this.rating--;
    this.rated = true;
    this.searchService.updateRecipe(this.id, { rating: this.rating });
  }
}
