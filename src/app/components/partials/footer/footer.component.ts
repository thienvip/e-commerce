import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  isScrollDown = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const maxScrollHeight = documentHeight - windowHeight;

    if (window.scrollY >= maxScrollHeight) {
      this.isScrollDown = true;
    } else {
      this.isScrollDown = false;
    }
  }

}
