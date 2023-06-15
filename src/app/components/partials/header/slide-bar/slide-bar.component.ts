import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.css']
})
export class SlideBarComponent {


  @Input() isSlideBarOpen: boolean | undefined
  @Output() closeSlideBar = new EventEmitter<void>();

  menuItems: any[] = [
    { label: 'COFFEE BEANS', route: '/a' },
    { label: 'PACKED COFFEES & ACCESSORIES', route: '/b' },
    { label: 'ABOUT US', route: '/c' },
    { label: 'COFFEE STORIES', route: '/d' },
    { label: 'LOCATIONS', route: '/e' },
  ]

  onButtonClick(): void {
    this.closeSlideBar.emit();
  }


}
