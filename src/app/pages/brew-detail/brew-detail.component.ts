import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-brew-detail',
  templateUrl: './brew-detail.component.html',
  styleUrls: ['./brew-detail.component.css']
})
export class BrewDetailComponent {
  food!: Food;
  constructor(activatedRoute:ActivatedRoute, foodService:FoodService, private cardService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      foodService.getFoodById(params['id']).subscribe(serverFood => {
        this.food = serverFood;
      });
    })
  }
  addToCart(){
    this.cardService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }
}
