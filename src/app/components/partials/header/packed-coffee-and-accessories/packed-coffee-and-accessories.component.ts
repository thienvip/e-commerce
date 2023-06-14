import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-packed-coffee-and-accessories',
  templateUrl: './packed-coffee-and-accessories.component.html',
  styleUrls: ['./packed-coffee-and-accessories.component.css']
})
export class PackedCoffeeAndAccessoriesComponent {

  @Input()
  buttonText!: string ;


}
