import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IRecipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private isOpen = false;
  private lastQuery: string;

  public searchBarStateSource: BehaviorSubject<boolean> = new BehaviorSubject(this.isOpen);
  public currentSearchBarState: Observable<boolean> = this.searchBarStateSource.asObservable();
  public query: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  public toggleSearchBar(): void {
    this.isOpen = !this.isOpen;
    this.searchBarStateSource.next(this.isOpen);
  }

  public setQuery(query: string): void {
    this.query.next(query);
  }

  public setLastQuery(query: string): void {
    this.lastQuery = query;
  }

  public getLastQuery(): string {
    return this.lastQuery;
  }

  public getAllRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>('recipes');
  }

  public getRecipesByQuery(query: string): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`recipes/${query}`);
  }

  public getRecipeById(id: string): Observable<IRecipe> {
    return this.http.get<IRecipe>(`recipes/recipe/${id}`);
  }

  public updateRecipe(id: string, data: Object): Subscription {
    return this.http.patch<IRecipe>(`recipes/recipe/${id}`, data).subscribe();
  }
}
