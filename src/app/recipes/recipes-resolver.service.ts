import { RecipeService } from './recipe.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Injectable } from '@angular/core';
import { Resolve, ResolveFn } from '@angular/router';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesResolverService {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  resolve: ResolveFn<Recipe[]> = (route, state) => {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    }

    return recipes;
  };
}
