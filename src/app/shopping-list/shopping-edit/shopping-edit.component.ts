import {Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit()
  {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (ingredient: Ingredient) => {
          this.editedItem = ingredient;
          this.editMode = true;
          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  onSubmit( form: NgForm ): void
  {
    const value = form.value;
    const newIngredient = new Ingredient( value.name, value.amount );
    if( this.editMode )
    {
      this.shoppingListService.updateIngredient( this.editedItem, newIngredient );
    }
    else
    {
      this.shoppingListService.addIngredient( newIngredient );
    }
    this.editMode = false;
    form.reset();
  }

  onClear(): void {
      this.shoppingListForm.reset();
      this.editMode = false;
  }

  onDelete(): void {
      this.shoppingListService.deleteIngredient(this.editedItem);
      this.onClear();

  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

}
