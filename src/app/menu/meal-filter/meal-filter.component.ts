import {Component, EventEmitter, Input, input, model, Output} from '@angular/core';
import {Meal} from "../meal";
import {MenuService} from "../menu.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-meal-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './meal-filter.component.html',
  styleUrl: './meal-filter.component.css'
})
export class MealFilterComponent {
  @Input() minCalories: number =0;
  @Input() maxCalories: number =1000;
  @Output() mealsFiltered = new EventEmitter<Meal[]>();
  meals:Meal[] = [];

  constructor(private  menuService: MenuService) {
    this.filterMeals();
  }

  filterMeals(): void{
      this.menuService.getMealByCalories(this.minCalories, this.maxCalories).subscribe(meals =>{
        this.meals = meals;
        this.mealsFiltered.emit(this.meals);
      });
    }
}
