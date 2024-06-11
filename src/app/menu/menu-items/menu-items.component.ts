import {Component, Input} from '@angular/core';
import {Meal} from "../meal";
import {MenuService} from "../menu.service";

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css'
})
export class MenuItemsComponent {
  meals: Meal[] = [];

 constructor(private  menuService: MenuService) {
   this.getMeals();
 }

 getMeals(): void{
   this.menuService.getAllMeals().subscribe(meals => this.meals = meals);
  }
}
