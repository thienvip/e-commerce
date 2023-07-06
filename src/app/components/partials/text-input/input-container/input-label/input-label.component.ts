import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.css']
})
export class InputLabelComponent  implements OnInit,OnChanges {
  ngOnInit(): void {
    this.control.statusChanges.subscribe(() =>{
     this.checkValidation();
    })
    this.control.valueChanges.subscribe(() =>{
     this.checkValidation();
    })
   }

   ngOnChanges(): void {
     this.checkValidation()

   }

  @Input()
  control!:AbstractControl
  @Input()
  showErrorsWhen = true;
  @Input()
  label!:string;
  @Input()
  darkMode = true

  checkValidation(){
    const errors = this.control.errors;
    if(!errors){
      return
    }
  }

}
