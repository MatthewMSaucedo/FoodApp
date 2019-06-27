import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({providedIn: 'root'})
export class ShoppingListService
{
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<Ingredient>();

  // shopping list made up of ingredients
  private ingredients: Ingredient[] = [
    new Ingredient( 'Apples', 5 ),
    new Ingredient( 'Tomatoes', 10 )
  ];

  // return deep copy of shopping list list
  getIngredients(): Ingredient[]
  {
    return this.ingredients.slice();
  }

  // return shallow of ingredient at given index
  getIngredient( index: number): Ingredient
  {
    return this.ingredients[index];
  }

  // adds ingredient to list and emits a deep copy
  addIngredient( ingredient: Ingredient ): void
  {
    this.ingredients.push( ingredient );
    this.ingredientsChanged.next( this.ingredients.slice() );
  }

  // adds multiple ingredients (from recipe) to list and emits a deep copy
  addIngredients( ingredients: Ingredient[] ): void
  {
    this.ingredients.push( ...ingredients );
    this.ingredientsChanged.next( this.ingredients.slice() );
  }

  // updates ingredient in shopping list with edited fields
  updateIngredient(oldIngredient: Ingredient, newIngredient: Ingredient): void
  {
    oldIngredient.amount = newIngredient.amount;
    oldIngredient.name = newIngredient.name;
    this.ingredientsChanged.next( this.ingredients.slice() );
  }

  deleteIngredient(ingredient: Ingredient): void {
    for (let i = 0; i < this.ingredients.length; i++) {
        if ( this.ingredients[i] === ingredient) {
            this.ingredients.splice(i, 1);
        }
    }
    this.ingredientsChanged.next(this.ingredients.slice());

  }
}
