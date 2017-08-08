import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log(this.recipe);
  }
}
