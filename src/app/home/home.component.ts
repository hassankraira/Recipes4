import { AppComponent } from './../app.component';
import { RecService } from './../rec.service';
import { Component } from '@angular/core';
import { Food } from './../Food';
import { CanActivateFn, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  
  food: Food[] = Food.food

  foodtypeArray: Food[] = this.food.filter(ffood => ffood.foodType == "Brunch");

  constructor(private foodService: RecService,private router: Router) {
  }

  foodtype(button: HTMLButtonElement, b1: HTMLButtonElement, b2: HTMLButtonElement, b3: HTMLButtonElement, b4: HTMLButtonElement) {
    button.classList.add("slected");
    b1.classList.remove("slected");
    b2.classList.remove("slected");
    b3.classList.remove("slected");
    b4.classList.remove("slected");

    switch (button.value) {
      case "b":
        this.foodtypeArray = this.food.filter(foodt => foodt.foodType == "Brunch");
        break;
      case "bf":
        this.foodtypeArray = this.food.filter(foodt => foodt.foodType == "Breakfast");
        break;
      case "d":
        this.foodtypeArray = this.food.filter(foodt => foodt.foodType == "Dinner");
        break;
      case "c":
        this.foodtypeArray = this.food.filter(foodt => foodt.foodType == "Chocolate");
        break;
      case "ed":
        this.foodtypeArray = this.food.filter(foodt => foodt.foodType == "Desserts");
        break;
    }
  }

  showRecipe(food: Food) {
    this.foodService.setSelectedFood(food); 
     console.log(this.foodService.getSelectedFood())
      window.scrollTo(0, 0);
     AppComponent.ele1.classList.remove("aa")

  }
  showRecipeOfTheDay() {
    this.foodService.setSelectedFood(new Food('Big, Juicy Hamburgers', "/assets/imges/hamburgers.png", "hh", "Medium", "Total Time: 30 minutes", "This recipe is easier than it looks. Let’s make it together.", ["Yield: 4 servings", "1 pound ground beef (80% lean)", "1 teaspoon salt", "1/2 teaspoon black pepper", "1/2 teaspoon garlic powder", "1/2 teaspoon onion powder", "4 hamburger buns", "4 slices cheddar cheese", "Lettuce, tomato, and other desired toppings"], ["Preheat the grill to medium-high heat.", "In a bowl, combine the ground beef, salt, black pepper, garlic powder, and onion powder. Mix until just combined.", "Divide the mixture into 4 equal portions and shape each into a patty.", "Grill the patties for about 4-5 minutes on each side or until they reach your desired doneness.", "Place a slice of cheddar cheese on each patty and let it melt.", "Toast the hamburger buns on the grill for about 1 minute.", "Assemble the burgers by placing each patty on a bun and adding lettuce, tomato, and other desired toppings.", "Serve immediately and enjoy!"]),); 
     console.log(this.foodService.getSelectedFood())
     window.scrollTo(0, 0);
     AppComponent.ele1.classList.remove("aa")

  }
}
