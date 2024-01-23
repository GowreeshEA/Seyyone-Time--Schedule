import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isBlue = true;

  isDropdownOpen = false;

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }

  handleBellButtonClick(): void {
    // Add your logic here for what should happen when the bell button is clicked
    console.log('Bell button clicked!');
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }
  toggleColor() {
    this.isBlue = !this.isBlue;
  }
}
