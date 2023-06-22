import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute  } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-brew',
  templateUrl: './home-brew.component.html',
  styleUrls: ['./home-brew.component.css']
})
export class HomeBrewComponent {

  foods:Food[] = []
  constructor( private foodService: FoodService, activatedRoute:ActivatedRoute){
     let foodsObservable:Observable<Food[]>;
     activatedRoute.params.subscribe((params) =>{
      if (params['searchTerm'])
      foodsObservable  = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
      foodsObservable  = this.foodService.getAllFoodsByTag(params['tag']);
      else  foodsObservable =  foodService.getAll()

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      })
    })
  }
}
