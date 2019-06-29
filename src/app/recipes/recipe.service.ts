import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // recipes list for application TODO: Replace testData
    private recipes: Recipe[] = [    // test recipe
        new Recipe (
            'Fried Rice',
            `It's rice, but fried.`,
            'https://www.jessicagavin.com/wp-content/uploads/2018/09/fried-rice-8-1200.jpg', [
                new Ingredient('Cup of Rice', 1),
                new Ingredient('broccoli', 6),
                new Ingredient('egg', 2)
            ]
        ),
        // test recipe
        new Recipe(
            'Grilled Cheese',
            `It's cheese, but grilled.`,
            'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/0b87fc075ff04cd29ee4f739c7406ffe/finalFB.jpg', [
                new Ingredient('Slice of Bread', 2),
                new Ingredient('Slice of Cheddar', 2)
            ]
        )
    ];
    // private recipes: Recipe[] = [];

    constructor(private shoppingListService: ShoppingListService) { }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    // return deep copy of recipe array
    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    // returns recipe at given index
    getRecipe(index: number): Recipe {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]): void {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
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
