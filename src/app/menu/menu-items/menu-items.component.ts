import {Component, Input} from '@angular/core';
import {Meal} from "../meal/meal";
import {MenuService} from "../menu.service";
import {MealFilterComponent} from "../meal-filter/meal-filter.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [
    MealFilterComponent,
    NgOptimizedImage
  ],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css'
})
export class MenuItemsComponent {
  meals: Meal[] = [];
  filteredMeals: Meal[] | null = [];

 constructor(private  menuService: MenuService) {
   this.getMeals();
 }

 getMeals(): void{
   this.menuService.getAllMeals().subscribe(meals => this.meals = meals);
  }

  mealsFiltered(meals: Meal[]): void {
    this.filteredMeals = meals.length > 0 ? meals : null;
  }
}
