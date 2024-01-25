import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

const baseUrl = 'https://recipe-book-34820-default-rtdb.firebaseio.com/';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(`${baseUrl}/recipes.json`, recipes)
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(`${baseUrl}/recipes.json`).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return { ingredients: [], ...recipe };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
