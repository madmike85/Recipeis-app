import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: SearchResultsComponent,
  },
  {
    path: 'recipes/:query',
    component: SearchResultsComponent,
  },
  {
    path: 'recipes/recipe/:id',
    component: RecipeDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
