import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from 'src/app/core/models/recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() public recipe: IRecipe;

  constructor(private router: Router) {}

  public ngOnInit(): void {}

  public goToDetails(id: string): void {
    this.router.navigate(['/recipes', 'recipe', id]);
  }
}
