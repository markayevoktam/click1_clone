import { Component, ElementRef, Renderer2 } from '@angular/core';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'click_clone';
  isExpanded = false;

  toggleSearch(event?: Event): void {
    if (event) {
      event.stopPropagation(); // Click hodisasi boshqa elementlarga ta’sir qilmasligi uchun
    }
    this.isExpanded = !this.isExpanded;
  }

  
 isMenuOpen = false; // Menyu dastlab yopiq bo‘ladi

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Holatni o‘zgartirish
  }



}
