import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coffee-beans',
  templateUrl: './coffee-beans.component.html',
  styleUrls: ['./coffee-beans.component.css']
})
export class CoffeeBeansComponent {
  @Input()
  buttonText!: string ;
}
