import { Component, HostListener, ViewChild, ViewContainerRef, ViewEncapsulation, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {

  @ViewChild("dynamicContentCoffeeBeans", { read: ViewContainerRef, static: true })
  containerRef!: ViewContainerRef;

  @ViewChild("dynamicPackedCoffeeAndAccessories", { read: ViewContainerRef, static: true })
  containerRef2!: ViewContainerRef;


  @Input()
  signIn!: boolean ;
  cartItems: any[] = [];
  cartQuantity=0;
  isVisible = false;
  isBag = false;
  isAccount= false;
  isSearch= false;
  isSlideBarOpen= false;
  isScrollDown = false;
  currentButtonType: string | null = null;
  user!:User;

  constructor(cartService:CartService,private userService: UserService){
    cartService.getCartObservable().subscribe((newCart)=>{
      this.cartQuantity = newCart.totalCount
    })

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser
    })
  }

  get isAuth(){
    return this.user.token;
  }


  logout(){
    this.userService.logout();
  }

  async addDynamicContentCoffeeBeans(buttontext: string) {

    if (this.currentButtonType === buttontext) {
      return;
    }
    if(this.isVisible === false){
      this.containerRef.clear();
      const { CoffeeBeansComponent } = await import('./coffee-beans/coffee-beans.component');
      const componentRef = this.containerRef.createComponent(CoffeeBeansComponent);
      componentRef.instance.buttonText = buttontext;
      this.currentButtonType = buttontext;
      this.isVisible = true
    } else {
      this.containerRef.clear();
      const { CoffeeBeansComponent } = await import('./coffee-beans/coffee-beans.component');
      const componentRef = this.containerRef.createComponent(CoffeeBeansComponent);
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
      const componentRef = this.containerRef2.createComponent(PackedCoffeeAndAccessoriesComponent);
      componentRef.instance.buttonText = buttonText;
      this.currentButtonType = buttonText;
      this.isVisible = true
    } else {
      this.containerRef2.clear();
      const { PackedCoffeeAndAccessoriesComponent } = await import('./packed-coffee-and-accessories/packed-coffee-and-accessories.component');
      const componentRef = this.containerRef2.createComponent(PackedCoffeeAndAccessoriesComponent);
      componentRef.instance.buttonText = buttonText;
      this.isVisible = false
      this.currentButtonType = buttonText;
    }
  }

  closeSlideBar(): void {
    this.isSlideBarOpen = false;
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: HTMLElement): void {
    if (!this.isSlideBarOpen) {
      return;
    }
    const slideBar = document.getElementById('header');
    if (!slideBar?.contains(targetElement) && this.isSlideBarOpen) {
      this.isSlideBarOpen = false;
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollPosition = window.scrollY ;
    this.isScrollDown = scrollPosition > 0;
  }


  }
