import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeEmit = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Rendang','Rendang is the most delicious food ever', 'https://c1.staticflickr.com/2/1040/612050559_a377a28cd9_b.jpg'),
    new Recipe('Nasi Goreng', 'Second best after rendang', 'https://c1.staticflickr.com/5/4092/5053587863_8b21b3c064_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeEmit(recipe: Recipe) {
    this.recipeEmit.emit(recipe);
  }

}
