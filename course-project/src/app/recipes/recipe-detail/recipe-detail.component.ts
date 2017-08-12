import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from '../recipe.model';

import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log(this.recipe);
  }

  onToShoppingList() {
    for (let ingredient of this.recipe.ingredients) {
        this.shoppingListService.addIngredient(ingredient);
    }
  }
}
