import { RecService } from './../rec.service';
// src/app/recipes/recipes.component.ts
import { Component, OnInit } from '@angular/core';
import { Food } from './../Food';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public ff: Food | null = null;

  constructor(private foodService: RecService) {}

  ngOnInit() {
    this.ff = this.foodService.getSelectedFood();
    console.log( this.foodService.getSelectedFood())
  }

}
