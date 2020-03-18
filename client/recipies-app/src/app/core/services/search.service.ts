import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IRecipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private isOpen = false;
  public searchBarStateSource: BehaviorSubject<boolean> = new BehaviorSubject(this.isOpen);
  public currentSearchBarState: Observable<boolean> = this.searchBarStateSource.asObservable();

  constructor(private http: HttpClient) {}

  public toggleSearchBar(): void {
    this.isOpen = !this.isOpen;
    this.searchBarStateSource.next(this.isOpen);
  }

  public getAllRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>('recipes');
  }

  public getRecipeById(id: string): Observable<IRecipe> {
    return this.http.get<IRecipe>(`recipes/${id}`);
  }
}
