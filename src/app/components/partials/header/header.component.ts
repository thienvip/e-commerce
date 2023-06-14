import { Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  @ViewChild("dynamicContentCoffeeBeans", { read: ViewContainerRef, static: true })
  containerRef!: ViewContainerRef;

  @ViewChild("dynamicPackedCoffeeAndAccessories", { read: ViewContainerRef, static: true })
  containerRef2!: ViewContainerRef;
  cartItems: any[] = [];

  constructor() {}

  ngOnInit() {}

  isVisible:boolean = false;
  isBag:boolean = false;
  isAccount: boolean= false;
  isSearch:boolean = false;
  currentButtonType: string | null = null;

  async addDynamicContentCoffeeBeans(buttontext: string) {

    if (this.currentButtonType === buttontext) {
      return;
    }
    if(this.isVisible === false){
      this.containerRef.clear();
      const { CoffeeBeansComponent } = await import('./coffee-beans/coffee-beans.component');
      let componentRef = this.containerRef.createComponent(CoffeeBeansComponent);
      componentRef.instance.buttonText = buttontext;
      this.currentButtonType = buttontext;
      this.isVisible = true
    } else {
      this.containerRef.clear();
      const { CoffeeBeansComponent } = await import('./coffee-beans/coffee-beans.component');
      let componentRef = this.containerRef.createComponent(CoffeeBeansComponent);
      componentRef.instance.buttonText = buttontext;
      this.isVisible = false
      this.currentButtonType = buttontext;
    }
  }

  async addDynamicContentPackedCoffeeAndAccessories(buttonText:string){
    if (this.currentButtonType === buttonText) {
      return;
    }
    if(this.isVisible === false){
      this.containerRef2.clear();
      const { PackedCoffeeAndAccessoriesComponent } = await import('./packed-coffee-and-accessories/packed-coffee-and-accessories.component');
      let componentRef = this.containerRef2.createComponent(PackedCoffeeAndAccessoriesComponent);
      componentRef.instance.buttonText = buttonText;
      this.currentButtonType = buttonText;
      this.isVisible = true
    } else {
      this.containerRef2.clear();
      const { PackedCoffeeAndAccessoriesComponent } = await import('./packed-coffee-and-accessories/packed-coffee-and-accessories.component');
      let componentRef = this.containerRef2.createComponent(PackedCoffeeAndAccessoriesComponent);
      componentRef.instance.buttonText = buttonText;
      this.isVisible = false
      this.currentButtonType = buttonText;
    }
  }



}
