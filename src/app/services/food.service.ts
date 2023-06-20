import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getAll():Food[]{
    return sample_foods
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filterFood = this.getAll().filter(  food => food.name.toLowerCase().includes(lowerCaseSearchTerm))
    return filterFood
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag === "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getFoodById(foodId:string):Food{
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }

}
