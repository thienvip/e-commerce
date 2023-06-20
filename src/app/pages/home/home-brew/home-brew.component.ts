import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-home-brew',
  templateUrl: './home-brew.component.html',
  styleUrls: ['./home-brew.component.css']
})
export class HomeBrewComponent {

  foods:Food[] = []
  constructor( private foodService: FoodService, activatedRoute:ActivatedRoute){

     activatedRoute.params.subscribe((params) =>{
      if (params['searchTerm'])
      this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
      this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else  this.foods =  foodService.getAll()
    })
  }
}
