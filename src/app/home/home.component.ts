import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const value = window.scrollY;
    this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', value * 2 + 'px');
  }

  cards = [
    { imageUrl: '../../assets/Get Away Guru/araku/a1.jpg', description: 'Card 1 Description' },
    { imageUrl: 'path_to_image2.jpg', description: 'Card 2 Description' },
    { imageUrl: 'path_to_image3.jpg', description: 'Card 3 Description' },
    { imageUrl: 'path_to_image4.jpg', description: 'Card 4 Description' },
    { imageUrl: 'path_to_image5.jpg', description: 'Card 5 Description' },
    { imageUrl: 'path_to_image6.jpg', description: 'Card 6 Description' },
    { imageUrl: 'path_to_image7.jpg', description: 'Card 7 Description' },
    { imageUrl: 'path_to_image8.jpg', description: 'Card 8 Description' },
    { imageUrl: 'path_to_image9.jpg', description: 'Card 9 Description' },
    { imageUrl: 'path_to_image10.jpg', description: 'Card 10 Description' },
  ];

  itemsPerPage = 4; // Adjust the number of items per page
  currentPage = 1;
  totalPages = Math.ceil(this.cards.length / this.itemsPerPage);
  displayedCards = this.cards.slice(0, this.itemsPerPage);

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedCards();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedCards();
    }
  }

  updateDisplayedCards() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage + 2; // Show 1 or 2 additional cards on the next page
    this.displayedCards = this.cards.slice(startIndex, endIndex);
  }
}