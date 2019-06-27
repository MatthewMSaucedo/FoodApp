import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private _recipeService: RecipeService) { }

    // TODO: Implement endpoint to store in database.
    storeRecipes() {
        const recipes = this._recipeService.getRecipes();
        this.http.put('', recipes).subscribe(res => {
            console.log(res);
        });
    }

    // TODO: Implement endpoint to retrieve from database.
    fetchRecipes() {
        return this.http.get<Recipe[]>('', )
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return {
                            ...recipe,
                            ingredients: recipe.ingredients ? recipe.ingredients: []
                        }
                    })
                }),
                tap(recipes => {
                    this._recipeService.setRecipes(recipes);
                })
            )
    }
}
