import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private _recipeService: RecipeService) { }

    // TODO: Modify to process each recipe in recipes
    storeRecipes() {
        const recipes = this._recipeService.getRecipe(2);
        this.http.post('/api/recipes', recipes).subscribe(res => {
            console.log(res);
        });
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('/api/recipes')
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return {
                            ...recipe,
                            ingredients: recipe.ingredients ? recipe.ingredients : []
                        };
                    });
                }),
                tap(recipes => {
                    console.log(recipes);
                    this._recipeService.setRecipes(recipes);
                })
            );
    }
}
