import {Component, EventEmitter, Input, input, model, Output} from '@angular/core';
import {Meal} from "../meal/meal";
import {MenuService} from "../menu.service";
import {FormsModule} from "@angular/forms";
import {MealType} from "../meal/meal-type";
import {DailyMealPlan} from "../meal/daily-meal-plan";

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
  mealTypes = Object.values(MealType);
  selectedMealTypes: { [key in MealType]?: boolean } = {};
  @Input() totalCalories: number=0;
  @Output() protected dailyMealPlan?: DailyMealPlan;


  constructor(private  menuService: MenuService) {
    this.filterMeals();
  }


  filterMeals(): void{
    this.menuService.getMealByCalories(this.minCalories, this.maxCalories).subscribe(meals =>{
      this.meals = meals;
      this.mealsFiltered.emit(this.meals);
    });
  }


  createDailyMealPlan() {
    const selectedMealTypes = this.mealTypes.filter(mealType => this.selectedMealTypes[mealType]);
    this.menuService.createDailyMealPlan(selectedMealTypes, this.totalCalories).subscribe(dailyMealPlan => {
      this.dailyMealPlan = dailyMealPlan;
    });
  }

  protected readonly MealType = MealType;
}
