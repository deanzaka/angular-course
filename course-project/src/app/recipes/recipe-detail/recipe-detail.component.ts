import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Recipe } from '../recipe.model';

import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  ngOnChanges() {
    // console.log(this.recipe);
  }

  onToShoppingList() {
    for (let ingredient of this.recipe.ingredients) {
        this.shoppingListService.addIngredient(ingredient);
    }
  }

  onEditRecipe() {
    this.router.navigate(["edit"], {relativeTo: this.route})
  }
}
