import { DataStorageService } from './../shared/data-storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  providers: [],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {}
}
