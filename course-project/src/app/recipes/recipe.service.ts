import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Rendang',
    'Rendang is the most delicious food ever',
    'https://c1.staticflickr.com/2/1040/612050559_a377a28cd9_b.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Coconut', 1)
    ]),
    new Recipe('Nasi Goreng',
    'Second best after rendang',
    'https://c1.staticflickr.com/5/4092/5053587863_8b21b3c064_b.jpg',
    [
      new Ingredient('Rice', 1),
      new Ingredient('Egg', 1)
    ])
  ];

  getRecipes() {
    // return COPY of recipes array
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
