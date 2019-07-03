import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetRecipesResponse } from '../shared/get-recipes-response.model';
import { ConstantPool } from '@angular/compiler';

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[];

    constructor(
        private shoppingListService: ShoppingListService,
        private _httpService: HttpClient
    ) { }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    // return call from backend
    public getRecipes(): void {
        this._httpService.get('/api/recipes').subscribe((response) => {
            this.recipes = this.recipesFromResponse(response);
            this.recipesChanged.next(this.recipes);
        });
    }

    public recipesFromResponse(response): Recipe[] {
        const recipes = new Array<Recipe>();
        for (let i = 0; i < response.length; i++) {
            const recipe = {
                id: response[i].id,
                name: response[i].name,
                description: response[i].description,
                imagePath: response[i].imagePath,
                ingredients: response[i].ingredients
            };
            recipes.push(recipe);
        }
        console.log('recipes!', recipes)
        return recipes;
    }

    public listRecipes() {
        return this.recipes;
    }

    // returns recipe at given index
    getRecipe(index: number): Recipe {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]): void {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this._httpService.post('/api/recipes', recipe).subscribe((response) => {
            this.recipes = this.recipesFromResponse(response);
            this.recipesChanged.next(this.recipes);
            this.recipes.push(recipe);
        });

        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
