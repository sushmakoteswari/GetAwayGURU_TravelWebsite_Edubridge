
// holiday.component.ts

import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-holiday',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidayComponent implements OnInit {

  destinations: any[] = [];

  nationalDestinations = [
    { title: 'Kerala', description: 'Backwaters and vibrant culture', image: '../../assets/Get Away Guru/kerala/k12.jpg' },
    { title: 'Ooty', description: 'Queen of the Nilgiris with tea gardens', image: '../../assets/Get Away Guru/ooty/o1.jpg' },
    { title: 'Coorg', description: 'Coffee plantations and misty landscapes', image: '../../assets/Get Away Guru/coorg/af3.jpg' },
    { title: 'Goa', description: 'Beautiful beaches and vibrant nightlife', image: '../../assets/Get Away Guru/goa/af3.jpg' },
    { title: 'Ladakh', description: 'Majestic mountains and scenic landscapes', image: '../../assets/Get Away Guru/ladakh/af1.jpg'},
    { title: 'Kullu Manali', description: 'Spectacular beauty of the Himalayas', image: '../../assets/Get Away Guru/manali/af1.jpg' },
    { title: 'Kashmir', description: 'Scenic landscapes and serene lakes', image: '../../assets/Get Away Guru/kashmir/af1.jpg' },
    { title: 'Araku Valley', description: 'Picturesque hills and lush greenery,', image: '../../assets/Get Away Guru/araku/af1.jpg' },
  ];

  internationalDestinations = [
    { title: 'Italy', description: 'Art, history, and delicious cuisine', image: '../../assets/Get Away Guru/italy/cf4.jpg' },
  { title: 'Japan', description: 'Blend of tradition and modernity', image: '../../assets/Get Away Guru/japan/japan1.jpg' },
  { title: 'Sri Lanka', description: 'Beautiful beaches and rich heritage', image: '../../assets/Get Away Guru/srilanka/s1.jpg' },
  { title: 'Thailand', description: 'Exotic islands and vibrant cities', image:'../../assets/Get Away Guru/Thailand/t2.jpg' },
  { title: 'France', description: 'Eiffel Tower, art, and romance', image: '../../assets/Get Away Guru/france/af1.jpg' },
  { title: 'Maldives', description: 'Overwater bungalows and coral reefs', image: '../../assets/Get Away Guru/maldives/af1.jpg' },
  { title: 'Dubai', description: 'Luxury,futuristic architecture and desert adventures', image: '../../assets/Get Away Guru/dubai/af3.jpg' },
  { title: 'Bali', description: 'Beautiful beaches, lush landscapes, and vibrant culture', image: '../../assets/Get Away Guru/bali/af4.jpg' },
  { title: 'Switzerland', description: 'Alps, picturesque landscapes, and chocolate', image: '../../assets/Get Away Guru/switzerland/s1.jpg' },
  ];

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.destinations = this.dataService.getDestinations();
  }

  bookHoliday(destination: any) {
    if (destination) {
      console.log('Book Now clicked for:', destination);
      this.router.navigate(['/booking', { destination: JSON.stringify(destination) }]);
    }
  }
  
  

  @ViewChild('nationalDestinationsRow', { static: false }) nationalDestinationsRow!: ElementRef;
  @ViewChild('internationalDestinationsRow', { static: false }) internationalDestinationsRow!: ElementRef;

  scroll(container: HTMLElement, direction: number): void {
    const scrollAmount = container.scrollWidth / 3 * direction;
    container.scrollLeft += scrollAmount;
  }

}