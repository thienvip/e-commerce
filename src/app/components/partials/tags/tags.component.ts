import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  routerLink?:any
  tags?:Tag[]

  constructor(foodService:FoodService,private router: Router) {
    this.tags = foodService.getAllTags();
  }

  navigateTags(term:string):void{
    if(term)
    this.router.navigateByUrl('/home/tag/'+ term);
  }

}
