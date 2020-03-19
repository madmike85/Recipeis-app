import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeRoutingModule } from './recipe-routing.module';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';

@NgModule({
  declarations: [SearchResultsComponent, RecipeCardComponent, RecipeDetailsComponent],
  imports: [CommonModule, RecipeRoutingModule, MatCardModule, MatButtonModule, MatIconModule],
})
export class RecipeModule {}
