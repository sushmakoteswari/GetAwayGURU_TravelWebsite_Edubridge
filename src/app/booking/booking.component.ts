// booking.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

declare var Razorpay: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  destination: any;
  packages: any[] = [];
  selectedCategory: string = 'affordable';
  selectedPackage: any; // Add property to store the selected package

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const destinationParam = params.get('destination');

      if (destinationParam !== null) {
        try {
          this.destination = JSON.parse(destinationParam);
          this.packages = this.dataService.getPackagesForDestination(this.destination.title, this.selectedCategory);
        } catch (error) {
          console.error('Error parsing destination parameter:', error);
          this.destination = null;
          this.packages = [];
        }
      } else {
        console.error('Destination parameter is null');
        this.destination = null;
        this.packages = [];
      }
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.packages = this.dataService.getPackagesForDestination(this.destination.title, category);
  }

  // Update method to accept the selected package as a parameter
  selectPackage(packages: any): void {
    this.selectedPackage = packages;
  }

  BookNow(): void {
   
    const RazorPayOptions = {
      description: 'For all your travel destinations',
      currency: 'INR',
      amount: 10000 * 100,
      name: 'Get Away Guru',
      image: '../assets/feedback.png',
      key: 'rzp_test_7OziXyGfXkbjoT',
      prefills: {
        name: 'Marri Sushma Koteswari',
        email: 'sushmakmarri@gmail.com',
        phone: '8247200275'
      },
      theme: {
        color: '#d81063'
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed');
        }
      }
    };

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    };

    const failureCallback = (e: any) => {
      console.log(e);
    };

    Razorpay.open(RazorPayOptions, successCallback, failureCallback);
  }
}
