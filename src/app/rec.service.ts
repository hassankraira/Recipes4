// src/app/rec.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from './Food';

@Injectable({
  providedIn: 'root'
})
export class RecService {
  private selectedFoodSubject = new BehaviorSubject<Food | null>(null);
  selectedFood$ = this.selectedFoodSubject.asObservable();

  setSelectedFood(food: Food) {
    this.selectedFoodSubject.next(food);
  }

  getSelectedFood(): Food | null {
    return this.selectedFoodSubject.value;
  }
}
