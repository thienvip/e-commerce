import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-button',
  templateUrl: './reusable-button.component.html',
  styleUrls: ['./reusable-button.component.css']
})
export class ReusableButtonComponent {

  @Input() label:string | undefined;

}
