import { Injectable } from "@angular/core";
export interface Packages {
  [destination: string]: { name: string; description: string; price: number }[];
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private packages: {
    [destination: string]: {
      [category: string]: { name: string;image: string; description: string; price: number }[];
    };
  } = {
    'Kerala': {
      affordable: [
        { name: 'Serene Munnar Retreat', description: '3 days, 4 nights in the picturesque Munnar', price: 10000, image: '../assets/Get Away Guru/kerala/k1.jpg' },
        { name: 'Backwaters Bliss Experience', description: '4 days, 5 nights exploring Alleppey and Wayanad', price: 7000, image: '../assets/Get Away Guru/kerala/k2.jpg' },
        { name: 'Tranquil Trivandrum Getaway', description: '2 days, 3 nights in Trivandrum and Varkala', price: 5000, image: '../assets/Get Away Guru/kerala/k10.jpg' },
        { name: 'Hill Station Hideout Retreat', description: '5 days, 6 nights in the serene Idukki and Thekkady', price: 8000, image: '../assets/Get Away Guru/kerala/k4.jpg' },
        { name: 'Wayanad Wonders Escape', description: '2 days, 2 nights exploring the beauty of Wayanad', price: 4500, image: '../assets/Get Away Guru/kerala/k5.jpg' },
        { name: 'Kochi Carnival Experience', description: 'Enjoy the vibrant Kochi with a 3-day, 4-night package', price: 5500, image: '../assets/Get Away Guru/kerala/k6.jpg' },
        { name: 'Alleppey Adventure', description: 'Discover Alleppey with a 2-day, 2-night getaway', price: 4000, image: '../assets/Get Away Guru/kerala/k7.jpg' },
        { name: 'Cultural Kochi Tour', description: 'Experience the cultural richness of Kochi in 4 days and 5 nights', price: 7000, image: '../assets/Get Away Guru/kerala/k8.jpg' },
      ],
      
      luxury: [
        { name: 'Royal Retreat in Munnar', image: '../assets/Get Away Guru/kerala/l1.jpg', description: 'Indulge in luxury with a 4-day, 5-night stay in Munnar', price: 12000 },
        { name: 'Exquisite Alleppey Escapade', image: '../assets/Get Away Guru/kerala/l2.jpg', description: 'Luxury cruise and stay in Alleppey for 3 days and 4 nights', price: 15000 },
        { name: 'Premium Backwater Bliss', image: '../assets/Get Away Guru/kerala/l3.jpg', description: 'Experience the best of Kerala backwaters in a 5-day, 6-night package', price: 18000 },
        { name: 'Tranquil Houseboat Retreat', image: '../assets/Get Away Guru/kerala/l4.jpg', description: 'Luxurious houseboat stay in Alleppey for 2 days and 3 nights', price: 10000 },
        { name: 'Kochi Heritage Luxury Tour', image: '../assets/Get Away Guru/kerala/l5.jpg', description: 'Explore Kochis heritage with a 4-day, 5-night luxury package', price: 13000 },
      ],
      
      coupleFriendly: [
        { name: 'Romantic Getaway in Wayanad', image: '../assets/Get Away Guru/kerala/cf1.jpg', description: 'Enjoy a romantic escape in Wayanad with a 3-day, 2-night package', price: 8000 },
        { name: 'Cozy Houseboat Retreat', image: '../assets/Get Away Guru/kerala/cf2.jpg', description: 'A private houseboat experience in Alleppey for 2 days and 1 night', price: 5700 },
        { name: 'Serenade in Thekkady', image: '../assets/Get Away Guru/kerala/cf3.jpg', description: 'Explore the wildlife and serenity of Thekkady for 4 days and 3 nights', price: 10000 },
        { name: 'Beachside Romance in Varkala', image: '../assets/Get Away Guru/kerala/cf4.jpg', description: 'Romantic beachside retreat in Varkala for 5 days and 4 nights', price: 12000 },
        { name: 'Charming Munnar Honeymoon', image: '../assets/Get Away Guru/kerala/k13.jpg', description: 'Discover the beauty of Munnar with a 6-day, 5-night honeymoon package', price: 15000 },
      ],
    },
    'Ooty': {
      affordable: [
        { name: 'Scenic Ooty Escape', image: '../assets/Get Away Guru/ooty/af1.jpg', description: 'Explore the scenic beauty of Ooty with a 3-day, 2-night package', price: 10000 },
        { name: 'Tea Gardens Delight', image: '../assets/Get Away Guru/ooty/af2.jpg', description: 'Immerse in the charm of Ooty\'s tea gardens for 4 days and 3 nights', price: 27000 },
        { name: 'Nature Paradise', image: '../assets/Get Away Guru/ooty/af3.jpg', description: 'Discover the nature paradise in Ooty for 5 days and 4 nights', price: 28000 },
        { name: 'Ooty Blissful Retreat', image: '../assets/Get Away Guru/ooty/af4.jpg', description: 'A blissful retreat in Ooty for 6 days and 5 nights', price: 25000 },
        { name: 'Adventure in Ooty Hills', image: '../assets/Get Away Guru/ooty/af5.jpg', description: 'An adventurous getaway in the hills of Ooty for 7 days and 6 nights', price: 31000 },
      ],
      luxury: [
        { name: 'Luxury Ooty Escapade', image: '../assets/Get Away Guru/ooty/lux1.jpg', description: 'Indulge in luxury with a 3-day, 2-night Ooty escapade', price: 12000 },
        { name: 'Royal Retreat in Ooty', image: '../assets/Get Away Guru/ooty/lux2.jpg', description: 'Experience a royal retreat in Ooty for 4 days and 3 nights', price: 15000 },
        { name: 'Ooty Elegance', image: '../assets/Get Away Guru/ooty/lux3.jpg', description: 'Elegant stay and experiences in Ooty for 5 days and 4 nights', price: 18000 },
        { name: 'Serene Ooty Luxury', image: '../assets/Get Away Guru/ooty/lux4.jpg', description: 'A serene luxury experience in Ooty for 6 days and 5 nights', price: 10000 },
        { name: 'Grand Ooty Retreat', image: '../assets/Get Away Guru/ooty/lux5.jpg', description: 'Grand retreat with luxury amenities in Ooty for 7 days and 6 nights', price: 22000 },
      ],
      coupleFriendly: [
        { name: 'Romantic Getaway in Ooty', image: '../assets/Get Away Guru/ooty/cf1.jpg', description: 'A romantic escape in Ooty for 2 days and 1 night', price: 10000 },
        { name: 'Ooty Honeymoon Bliss', image: '../assets/Get Away Guru/ooty/cf2.jpg', description: 'Experience honeymoon bliss in Ooty for 3 days and 2 nights', price: 12000 },
        { name: 'Couples Retreat in Ooty', image: '../assets/Get Away Guru/ooty/cf3.jpg', description: 'A peaceful retreat for couples in Ooty for 4 days and 3 nights', price: 15000 },
        { name: 'Enchanting Ooty Love', image: '../assets/Get Away Guru/ooty/cf4.jpg', description: 'Experience enchanting love in Ooty for 5 days and 4 nights', price: 18000 },
        { name: 'Ooty Romantic Hideaway', image: '../assets/Get Away Guru/ooty/cf5.jpg', description: 'A romantic hideaway in Ooty for 6 days and 5 nights', price: 20000 },
      ],
    },

    'Coorg': {
      affordable: [
        { name: 'Coorg Nature Retreat', image: '../assets/Get Away Guru/coorg/af1.jpg', description: 'Explore the natural beauty of Coorg with a 3-day, 2-night package', price: 12000 },
        { name: 'Tea Plantation Getaway', image: '../assets/Get Away Guru/coorg/af2.jpg', description: 'Enjoy a getaway amidst Coorg\'s tea plantations for 4 days and 3 nights', price: 15000 },
        { name: 'Tranquil Coorg Escape', image: '../assets/Get Away Guru/coorg/af3.jpg', description: 'Experience tranquility in Coorg for 5 days and 4 nights', price: 18000 },
        { name: 'Coorg Wilderness Adventure', image: '../assets/Get Away Guru/coorg/af4.jpg', description: 'An adventurous escape in the wilderness of Coorg for 6 days and 5 nights', price: 10000 },
        { name: 'Enchanting Coorg Hills', image: '../assets/Get Away Guru/coorg/af5.jpg', description: 'Discover enchanting hills of Coorg for 7 days and 6 nights', price: 22000 },
      ],
      luxury: [
        { name: 'Luxury Coorg Retreat', image: '../assets/Get Away Guru/coorg/lux1.jpg', description: 'Indulge in luxury with a 3-day, 2-night Coorg retreat', price: 25000 },
        { name: 'Royal Coorg Getaway', image: '../assets/Get Away Guru/coorg/af3.jpg', description: 'Experience a royal getaway in Coorg for 4 days and 3 nights', price: 28000 },
        { name: 'Elegant Coorg Retreat', image: '../assets/Get Away Guru/coorg/lux3.jpg', description: 'An elegant retreat in Coorg for 5 days and 4 nights', price: 30000 },
        { name: 'Coorg Serenity Luxury', image: '../assets/Get Away Guru/coorg/lux4.jpg', description: 'Experience serenity with luxury in Coorg for 6 days and 5 nights', price: 35000 },
        { name: 'Grand Coorg Mansion', image: '../assets/Get Away Guru/coorg/lux5.jpg', description: 'A grand mansion experience in Coorg for 7 days and 6 nights', price: 10000 },
      ],
      coupleFriendly: [
        { name: 'Romantic Coorg Retreat', image: '../assets/Get Away Guru/coorg/cf1.jpg', description: 'A romantic retreat in Coorg for 2 days and 1 night', price: 15000 },
        { name: 'Coorg Honeymoon Bliss', image: '../assets/Get Away Guru/coorg/cf2.jpg', description: 'Experience honeymoon bliss in Coorg for 3 days and 2 nights', price: 18000 },
        { name: 'Couples Getaway in Coorg', image: '../assets/Get Away Guru/coorg/cf3.jpg', description: 'A peaceful getaway for couples in Coorg for 4 days and 3 nights', price: 20000 },
        { name: 'Enchanting Coorg Love', image: '../assets/Get Away Guru/coorg/cf4.jpg', description: 'Experience enchanting love in Coorg for 5 days and 4 nights', price: 25000 },
        { name: 'Coorg Romantic Hideaway', image: '../assets/Get Away Guru/coorg/cf5.jpg', description: 'A romantic hideaway in Coorg for 6 days and 5 nights', price: 28000 },
      ],
    },
    'Goa': {
      affordable: [
        { name: 'Goa Beach Retreat', image: '../assets/Get Away Guru/goa/af1.jpg', description: 'Relax on the beaches of Goa with a 3-day, 2-night package', price: 8000 },
        { name: 'Adventure in Goa', image: '../assets/Get Away Guru/goa/af2.jpg', description: 'Experience adventure in Goa for 4 days and 3 nights', price: 10000 },
        { name: 'Goa Cultural Getaway', image: '../assets/Get Away Guru/goa/af3.jpg', description: 'Explore the cultural side of Goa for 5 days and 4 nights', price: 12000 },
        { name: 'Goa Nature Discovery', image: '../assets/Get Away Guru/goa/af4.jpg', description: 'Discover nature in Goa for 6 days and 5 nights', price: 14000 },
        { name: 'Enchanting Goa Escape', image: '../assets/Get Away Guru/goa/af5.jpg', description: 'Escape to enchanting places in Goa for 7 days and 6 nights', price: 16000 },
      ],
      luxury: [
        { name: 'Luxury Beachfront Retreat', image: '../assets/Get Away Guru/goa/lux1.jpg', description: 'Indulge in luxury with a 3-day, 2-night beachfront retreat in Goa', price: 25000 },
        { name: 'Royal Goa Experience', image: '../assets/Get Away Guru/goa/lux2.jpg', description: 'Experience royalty in Goa for 4 days and 3 nights', price: 28000 },
        { name: 'Elegant Goa Retreat', image: '../assets/Get Away Guru/goa/lux3.jpg', description: 'An elegant retreat in Goa for 5 days and 4 nights', price: 30000 },
        { name: 'Goa Serenity Luxury', image: '../assets/Get Away Guru/goa/lux4.jpg', description: 'Experience serenity with luxury in Goa for 6 days and 5 nights', price: 35000 },
        { name: 'Grand Goa Mansion', image: '../assets/Get Away Guru/goa/lux5.jpg', description: 'A grand mansion experience in Goa for 7 days and 6 nights', price: 40000 },
      ],
      coupleFriendly: [
        { name: 'Romantic Goa Getaway', image: '../assets/Get Away Guru/goa/cf1.jpg', description: 'A romantic getaway in Goa for 2 days and 1 night', price: 15000 },
        { name: 'Goa Honeymoon Bliss', image: '../assets/Get Away Guru/goa/cf2.jpg', description: 'Experience honeymoon bliss in Goa for 3 days and 2 nights', price: 18000 },
        { name: 'Couples Retreat in Goa', image: '../assets/Get Away Guru/goa/cf3.jpg', description: 'A peaceful retreat for couples in Goa for 4 days and 3 nights', price: 20000 },
        { name: 'Enchanting Goa Love', image: '../assets/Get Away Guru/goa/cf4.jpg', description: 'Experience enchanting love in Goa for 5 days and 4 nights', price: 25000 },
        { name: 'Goa Romantic Hideaway', image: '../assets/Get Away Guru/goa/cf5.jpg', description: 'A romantic hideaway in Goa for 6 days and 5 nights', price: 28000 },
      ],
    },

    'Ladakh': {
      affordable: [
        { name: 'Ladakh Adventure', image: '../assets/Get Away Guru/ladakh/af1.jpg', description: 'An adventurous journey in Ladakh for 4 days and 3 nights', price: 12000 },
        { name: 'Ladakh Cultural Escape', image: '../assets/Get Away Guru/ladakh/af2.jpg', description: 'Explore Ladakh\'s rich culture for 5 days and 4 nights', price: 14000 },
        { name: 'Ladakh Nature Retreat', image: '../assets/Get Away Guru/ladakh/af3.jpg', description: 'Experience nature\'s retreat in Ladakh for 6 days and 5 nights', price: 10000 },
        { name: 'Ladakh Serenity Getaway', image: '../assets/Get Away Guru/ladakh/af4.jpg', description: 'A serene getaway in Ladakh for 7 days and 6 nights', price: 18000 },
        { name: 'Ladakh Spiritual Journey', image: '../assets/Get Away Guru/ladakh/af5.jpg', description: 'Embark on a spiritual journey in Ladakh for 8 days and 7 nights', price: 20000 },
      ],
      luxury: [
        { name: 'Luxury Ladakh Expedition', image: '../assets/Get Away Guru/ladakh/lux1.jpg', description: 'Embark on a luxury expedition in Ladakh for 4 days and 3 nights', price: 30000 },
        { name: 'Royal Ladakh Experience', image: '../assets/Get Away Guru/ladakh/lux2.jpg', description: 'Experience royalty in Ladakh for 5 days and 4 nights', price: 35000 },
        { name: 'Ladakh Luxury Retreat', image: '../assets/Get Away Guru/ladakh/lux3.jpg', description: 'A luxurious retreat in Ladakh for 6 days and 5 nights', price: 40000 },
        { name: 'Ladakh Serenity Luxury', image: '../assets/Get Away Guru/ladakh/lux4.jpg', description: 'Experience serenity with luxury in Ladakh for 7 days and 6 nights', price: 45000 },
        { name: 'Grand Ladakh Mansion', image: '../assets/Get Away Guru/ladakh/lux5.jpg', description: 'A grand mansion experience in Ladakh for 8 days and 7 nights', price: 50000 },
      ],
      coupleFriendly: [
        { name: 'Romantic Ladakh Getaway', image: '../assets/Get Away Guru/ladakh/cf1.jpg', description: 'A romantic getaway in Ladakh for 3 days and 2 nights', price: 25000 },
        { name: 'Ladakh Honeymoon Bliss', image: '../assets/Get Away Guru/ladakh/cf2.jpg', description: 'Experience honeymoon bliss in Ladakh for 4 days and 3 nights', price: 30000 },
        { name: 'Couples Retreat in Ladakh', image: '../assets/Get Away Guru/ladakh/cf3.jpg', description: 'A peaceful retreat for couples in Ladakh for 5 days and 4 nights', price: 35000 },
        { name: 'Enchanting Ladakh Love', image: '../assets/Get Away Guru/ladakh/cf4.jpg', description: 'Experience enchanting love in Ladakh for 6 days and 5 nights', price: 10000 },
        { name: 'Ladakh Romantic Hideaway', image: '../assets/Get Away Guru/ladakh/cf5.jpg', description: 'A romantic hideaway in Ladakh for 7 days and 6 nights', price: 45000 },
      ],
    },
    
    'Kullu Manali': {
      affordable: [
        { name: 'Kullu Manali Adventure', image: '../assets/Get Away Guru/manali/af1.jpg', description: 'An adventurous journey in Kullu Manali for 4 days and 3 nights', price: 15000 },
        { name: 'Kullu Manali Nature Escape', image: '../assets/Get Away Guru/manali/af2.jpg', description: 'Escape to nature in Kullu Manali for 5 days and 4 nights', price: 17000 },
        { name: 'Kullu Manali Cultural Retreat', image: '../assets/Get Away Guru/manali/af3.jpg', description: 'Experience cultural retreat in Kullu Manali for 6 days and 5 nights', price: 19000 },
        { name: 'Kullu Manali Serenity Getaway', image: '../assets/Get Away Guru/manali/af4.jpg', description: 'A serene getaway in Kullu Manali for 7 days and 6 nights', price: 10000 },
        { name: 'Kullu Manali Spiritual Journey', image: '../assets/Get Away Guru/manali/af5.jpg', description: 'Embark on a spiritual journey in Kullu Manali for 8 days and 7 nights', price: 23000 },
      ],
      luxury: [
        { name: 'Luxury Kullu Manali Expedition', image: '../assets/Get Away Guru/manali/lux1.jpg', description: 'Embark on a luxury expedition in Kullu Manali for 4 days and 3 nights', price: 35000 },
        { name: 'Royal Kullu Manali Experience', image: '../assets/Get Away Guru/manali/lux2.jpg', description: 'Experience royalty in Kullu Manali for 5 days and 4 nights', price: 40000 },
        { name: 'Kullu Manali Luxury Retreat', image: '../assets/Get Away Guru/manali/lux3.jpg', description: 'A luxurious retreat in Kullu Manali for 6 days and 5 nights', price: 45000 },
        { name: 'Kullu Manali Serenity Luxury', image: '../assets/Get Away Guru/manali/lux4.jpg', description: 'Experience serenity with luxury in Kullu Manali for 7 days and 6 nights', price: 50000 },
        { name: 'Grand Kullu Manali Mansion', image: '../assets/Get Away Guru/manali/lux5.jpg', description: 'A grand mansion experience in Kullu Manali for 8 days and 7 nights', price: 55000 },
      ],
      coupleFriendly: [
        { name: 'Romantic Kullu Manali Getaway', image: '../assets/Get Away Guru/manali/cf1.jpg', description: 'A romantic getaway in Kullu Manali for 3 days and 2 nights', price: 10000 },
        { name: 'Kullu Manali Honeymoon Bliss', image: '../assets/Get Away Guru/manali/cf2.jpg', description: 'Experience honeymoon bliss in Kullu Manali for 4 days and 3 nights', price: 35000 },
        { name: 'Couples Retreat in Kullu Manali', image: '../assets/Get Away Guru/manali/cf3.jpg', description: 'A peaceful retreat for couples in Kullu Manali for 5 days and 4 nights', price: 40000 },
        { name: 'Enchanting Kullu Manali Love', image: '../assets/Get Away Guru/manali/cf4.jpg', description: 'Experience enchanting love in Kullu Manali for 6 days and 5 nights', price: 45000 },
        { name: 'Kullu Manali Romantic Hideaway', image: '../assets/Get Away Guru/manali/cf5.jpg', description: 'A romantic hideaway in Kullu Manali for 7 days and 6 nights', price: 50000 },
      ],
    },
    'Kashmir': {
      affordable: [
        { name: 'Kashmir Budget Explorer', image: '../assets/Get Away Guru/kashmir/af1.jpg', description: 'Explore Kashmir on a budget for 4 days and 3 nights', price: 12000 },
        { name: 'Kashmir Nature Getaway', image: '../assets/Get Away Guru/kashmir/af2.jpg', description: 'Enjoy a nature getaway in Kashmir for 5 days and 4 nights', price: 14000 },
        { name: 'Kashmir Cultural Retreat', image: '../assets/Get Away Guru/kashmir/af3.jpg', description: 'Experience cultural retreat in Kashmir for 6 days and 5 nights', price: 10000 },
        { name: 'Kashmir Serenity Escape', image: '../assets/Get Away Guru/kashmir/af4.jpg', description: 'Escape to serenity in Kashmir for 7 days and 6 nights', price: 18000 },
        { name: 'Kashmir Adventure Budget', image: '../assets/Get Away Guru/kashmir/af5.jpg', description: 'An adventurous budget trip in Kashmir for 8 days and 7 nights', price: 20000 },
      ],
      luxury: [
        { name: 'Luxury Kashmir Expedition', image: '../assets/Get Away Guru/kashmir/lux1.jpg', description: 'Embark on a luxury expedition in Kashmir for 4 days and 3 nights', price: 35000 },
        { name: 'Royal Kashmir Experience', image: '../assets/Get Away Guru/kashmir/lux2.jpg', description: 'Experience royalty in Kashmir for 5 days and 4 nights', price: 40000 },
        { name: 'Kashmir Luxury Retreat', image: '../assets/Get Away Guru/kashmir/lux3.jpg', description: 'A luxurious retreat in Kashmir for 6 days and 5 nights', price: 45000 },
        { name: 'Kashmir Serenity Luxury', image: '../assets/Get Away Guru/kashmir/lux4.jpg', description: 'Experience serenity with luxury in Kashmir for 7 days and 6 nights', price: 50000 },
        { name: 'Grand Kashmir Palace', image: '../assets/Get Away Guru/kashmir/lux5.jpg', description: 'A grand palace experience in Kashmir for 8 days and 7 nights', price: 55000 },
      ],
      coupleFriendly: [
        { name: 'Romantic Kashmir Getaway', image: '../assets/Get Away Guru/kashmir/cf1.jpg', description: 'A romantic getaway in Kashmir for 3 days and 2 nights', price: 30000 },
        { name: 'Kashmir Honeymoon Bliss', image: '../assets/Get Away Guru/kashmir/cf2.jpg', description: 'Experience honeymoon bliss in Kashmir for 4 days and 3 nights', price: 35000 },
        { name: 'Couples Retreat in Kashmir', image: '../assets/Get Away Guru/kashmir/cf3.jpg', description: 'A peaceful retreat for couples in Kashmir for 5 days and 4 nights', price: 40000 },
        { name: 'Enchanting Kashmir Love', image: '../assets/Get Away Guru/kashmir/cf4.jpg', description: 'Experience enchanting love in Kashmir for 6 days and 5 nights', price: 45000 },
        { name: 'Kashmir Romantic Hideaway', image: '../assets/Get Away Guru/kashmir/cf5.jpg', description: 'A romantic hideaway in Kashmir for 7 days and 6 nights', price: 50000 },
      ],
    },
    'Araku Valley': {
      affordable: [
        { name: 'Araku Valley Budget Retreat', image: '../assets/Get Away Guru/araku/af1.jpg', description: 'A budget retreat in Araku Valley for 3 days and 2 nights', price: 8000 },
        { name: 'Araku Valley Nature Escape', image: '../assets/Get Away Guru/araku/af2.jpg', description: 'Escape to nature in Araku Valley for 4 days and 3 nights', price: 9000 },
        { name: 'Araku Valley Cultural Journey', image: '../assets/Get Away Guru/araku/af3.jpg', description: 'Explore the cultural richness of Araku Valley for 5 days and 4 nights', price: 10000 },
        { name: 'Araku Valley Serene Getaway', image: '../assets/Get Away Guru/araku/af4.jpg', description: 'A serene getaway in Araku Valley for 6 days and 5 nights', price: 10000 },
        { name: 'Araku Valley Adventure Budget', image: '../assets/Get Away Guru/araku/af5.jpg', description: 'An adventurous budget trip in Araku Valley for 7 days and 6 nights', price: 12000 },
      ],
      luxury: [
        { name: 'Luxury Araku Valley Expedition', image: '../assets/Get Away Guru/araku/lux1.jpg', description: 'Embark on a luxury expedition in Araku Valley for 3 days and 2 nights', price: 25000 },
        { name: 'Royal Araku Valley Experience', image: '../assets/Get Away Guru/araku/lux2.jpg', description: 'Experience royalty in Araku Valley for 4 days and 3 nights', price: 30000 },
        { name: 'Araku Valley Luxury Retreat', image: '../assets/Get Away Guru/araku/lux3.jpg', description: 'A luxurious retreat in Araku Valley for 5 days and 4 nights', price: 35000 },
        { name: 'Araku Valley Serenity Luxury', image: '../assets/Get Away Guru/araku/lux4.jpg', description: 'Experience serenity with luxury in Araku Valley for 6 days and 5 nights', price: 40000 },
        { name: 'Grand Araku Valley Palace', image: '../assets/Get Away Guru/araku/lux5.jpg', description: 'A grand palace experience in Araku Valley for 7 days and 6 nights', price: 45000 },
      ],
      coupleFriendly: [
        { name: 'Romantic Araku Valley Getaway', image: '../assets/Get Away Guru/araku/cf1.jpg', description: 'A romantic getaway in Araku Valley for 2 days and 1 night', price: 10000 },
        { name: 'Araku Valley Honeymoon Bliss', image: '../assets/Get Away Guru/araku/cf2.jpg', description: 'Experience honeymoon bliss in Araku Valley for 3 days and 2 nights', price: 18000 },
        { name: 'Couples Retreat in Araku Valley', image: '../assets/Get Away Guru/araku/af4.jpg', description: 'A peaceful retreat for couples in Araku Valley for 4 days and 3 nights', price: 20000 },
        { name: 'Enchanting Araku Valley Love', image: '../assets/Get Away Guru/araku/cf4.jpg', description: 'Experience enchanting love in Araku Valley for 5 days and 4 nights', price: 23000 },
        { name: 'Araku Valley Romantic Hideaway', image: '../assets/Get Away Guru/araku/cf5.jpg', description: 'A romantic hideaway in Araku Valley for 6 days and 5 nights', price: 26000 },
      ],
    },
    
    'Italy': {
      affordable: [
        { name: 'Budget Explorer in Rome', image: '../assets/Get Away Guru/italy/af1.jpg', description: 'Explore Rome on a budget for 3 days and 2 nights', price: 12000 },
        { name: 'Affordable Venice Getaway', image: '../assets/Get Away Guru/italy/af2.jpg', description: 'Affordable getaway to Venice for 4 days and 3 nights', price: 15000 },
        { name: 'Budget Amalfi Coast Retreat', image: '../assets/Get Away Guru/italy/af3.jpg', description: 'Budget retreat to the Amalfi Coast for 5 days and 4 nights', price: 10000 },
        { name: 'Tuscany on a Shoestring', image: '../assets/Get Away Guru/italy/af4.jpg', description: 'Experience Tuscany on a budget for 6 days and 5 nights', price: 20000 },
        { name: 'Budget Explorer in Cinque Terre', image: '../assets/Get Away Guru/italy/af5.jpg', description: 'Explore Cinque Terre on a budget for 7 days and 6 nights', price: 22000 },
      ],
      luxury: [
        { name: 'Luxurious Roman Holiday', image: '../assets/Get Away Guru/italy/lux1.jpg', description: 'Indulge in luxury during a Roman holiday for 3 days and 2 nights', price: 45000 },
        { name: 'Venetian Grandeur Experience', image: '../assets/Get Away Guru/italy/lux2.jpg', description: 'Experience grandeur in Venice for 4 days and 3 nights', price: 50000 },
        { name: 'Luxury Retreat on the Amalfi Coast', image: '../assets/Get Away Guru/italy/lux3.jpg', description: 'Luxury retreat on the Amalfi Coast for 5 days and 4 nights', price: 60000 },
        { name: 'Tuscan Villa Luxury Escape', image: '../assets/Get Away Guru/italy/lux4.jpg', description: 'Escape in luxury to a Tuscan villa for 6 days and 5 nights', price: 70000 },
        { name: 'Cinque Terre Exclusive Getaway', image: '../assets/Get Away Guru/italy/lux5.jpg', description: 'Exclusive getaway to Cinque Terre for 7 days and 6 nights', price: 80000 },
      ],
      coupleFriendly: [
        { name: 'Romantic Retreat in Rome', image: '../assets/Get Away Guru/italy/cf1.jpg', description: 'Romantic retreat in Rome for 2 days and 1 night', price: 25000 },
        { name: 'Venetian Love Boat Experience', image: '../assets/Get Away Guru/italy/cf2.jpg', description: 'Experience love in Venice with a romantic boat ride for 3 days and 2 nights', price: 30000 },
        { name: 'Amalfi Coast Sunset Cruise', image: '../assets/Get Away Guru/italy/cf3.jpg', description: 'Experience a romantic sunset cruise on the Amalfi Coast for 4 days and 3 nights', price: 35000 },
        { name: 'Tuscan Vineyard Romance', image: '../assets/Get Away Guru/italy/cf4.jpg', description: 'Romantic getaway to a Tuscan vineyard for 5 days and 4 nights', price: 40000 },
        { name: 'Cinque Terre Coastal Love', image: '../assets/Get Away Guru/italy/cf5.jpg', description: 'Experience coastal love in Cinque Terre for 6 days and 5 nights', price: 45000 },
      ],
    },
    
    'Japan': {
      affordable: [
        { name: 'Tokyo Budget Explorer', image: '../assets/Get Away Guru/japan/af1.jpg', description: 'Explore Tokyo on a budget for 3 days and 2 nights', price: 15000 },
        { name: 'Osaka Affordable Getaway', image: '../assets/Get Away Guru/japan/af2.jpg', description: 'Affordable getaway to Osaka for 4 days and 3 nights', price: 18000 },
        { name: 'Kyoto Budget Cultural Retreat', image: '../assets/Get Away Guru/japan/af3.jpg', description: 'Budget cultural retreat in Kyoto for 5 days and 4 nights', price: 10000 },
        { name: 'Hiroshima on a Shoestring', image: '../assets/Get Away Guru/japan/af4.jpg', description: 'Experience Hiroshima on a budget for 6 days and 5 nights', price: 22000 },
        { name: 'Affordable Hokkaido Adventure', image: '../assets/Get Away Guru/japan/af5.jpg', description: 'Adventure in Hokkaido on a budget for 7 days and 6 nights', price: 25000 },
      ],
      luxury: [
        { name: 'Luxurious Tokyo Retreat', image: '../assets/Get Away Guru/japan/lux1.jpg', description: 'Indulge in luxury during a Tokyo retreat for 3 days and 2 nights', price: 50000 },
        { name: 'Osaka Grand Cultural Experience', image: '../assets/Get Away Guru/japan/lux2.jpg', description: 'Grand cultural experience in Osaka for 4 days and 3 nights', price: 60000 },
        { name: 'Luxury Kyoto Heritage Getaway', image: '../assets/Get Away Guru/japan/lux3.jpg', description: 'Luxury heritage getaway in Kyoto for 5 days and 4 nights', price: 70000 },
        { name: 'Hiroshima Deluxe Exploration', image: '../assets/Get Away Guru/japan/lux4.jpg', description: 'Deluxe exploration of Hiroshima for 6 days and 5 nights', price: 80000 },
        { name: 'Exclusive Hokkaido Luxury Adventure', image: '../assets/Get Away Guru/japan/lux5.jpg', description: 'Exclusive luxury adventure in Hokkaido for 7 days and 6 nights', price: 90000 },
      ],
      coupleFriendly: [
        { name: 'Romantic Tokyo Getaway', image: '../assets/Get Away Guru/japan/cf1.jpg', description: 'Romantic getaway in Tokyo for 2 days and 1 night', price: 30000 },
        { name: 'Osaka Love Boat Experience', image: '../assets/Get Away Guru/japan/cf2.jpg', description: 'Experience love in Osaka with a romantic boat ride for 3 days and 2 nights', price: 35000 },
        { name: 'Kyoto Cherry Blossom Romance', image: '../assets/Get Away Guru/japan/cf3.jpg', description: 'Romantic cherry blossom romance in Kyoto for 4 days and 3 nights', price: 40000 },
        { name: 'Hiroshima Sunset Cruise for Two', image: '../assets/Get Away Guru/japan/cf4.jpg', description: 'Sunset cruise for two in Hiroshima for 5 days and 4 nights', price: 45000 },
        { name: 'Hokkaido Winter Love Retreat', image: '../assets/Get Away Guru/japan/cf5.jpg', description: 'Winter love retreat in Hokkaido for 6 days and 5 nights', price: 10000 },
      ],
    },

    'Sri Lanka': {
      affordable: [
        { name: 'Colombo Budget Explorer', image: '../assets/Get Away Guru/srilanka/af1.jpg', description: 'Explore Colombo on a budget for 3 days and 2 nights', price: 12000 },
        { name: 'Kandy Affordable Retreat', image: '../assets/Get Away Guru/srilanka/af2.jpg', description: 'Affordable retreat to Kandy for 4 days and 3 nights', price: 14000 },
        { name: 'Sigiriya Budget Cultural Tour', image: '../assets/Get Away Guru/srilanka/af3.jpg', description: 'Budget cultural tour to Sigiriya for 5 days and 4 nights', price: 16000 },
        { name: 'Galle Budget Coastal Getaway', image: '../assets/Get Away Guru/srilanka/af4.jpg', description: 'Coastal getaway to Galle on a budget for 6 days and 5 nights', price: 18000 },
        { name: 'Affordable Nuwara Eliya Escape', image: '../assets/Get Away Guru/srilanka/af5.jpg', description: 'Escape to Nuwara Eliya on a budget for 7 days and 6 nights', price: 20000 },
      ],
      luxury: [
        { name: 'Luxurious Colombo Retreat', image: '../assets/Get Away Guru/srilanka/lux1.jpg', description: 'Indulge in luxury during a Colombo retreat for 3 days and 2 nights', price: 45000 },
        { name: 'Kandy Grand Cultural Experience', image: '../assets/Get Away Guru/srilanka/lux2.jpg', description: 'Grand cultural experience in Kandy for 4 days and 3 nights', price: 50000 },
        { name: 'Luxury Sigiriya Heritage Getaway', image: '../assets/Get Away Guru/srilanka/lux3.jpg', description: 'Luxury heritage getaway in Sigiriya for 5 days and 4 nights', price: 60000 },
        { name: 'Galle Deluxe Coastal Exploration', image: '../assets/Get Away Guru/srilanka/lux4.jpg', description: 'Deluxe coastal exploration of Galle for 6 days and 5 nights', price: 70000 },
        { name: 'Exclusive Nuwara Eliya Luxury Escape', image: '../assets/Get Away Guru/srilanka/lux5.jpg', description: 'Exclusive luxury escape to Nuwara Eliya for 7 days and 6 nights', price: 80000 },
      ],
      coupleFriendly: [
        { name: 'Romantic Colombo Getaway', image: '../assets/Get Away Guru/srilanka/cf1.jpg', description: 'Romantic getaway in Colombo for 2 days and 1 night', price: 10000 },
        { name: 'Kandy Love Boat Experience', image: '../assets/Get Away Guru/srilanka/cf2.jpg', description: 'Experience love in Kandy with a romantic boat ride for 3 days and 2 nights', price: 35000 },
        { name: 'Sigiriya Cherry Blossom Romance', image: '../assets/Get Away Guru/srilanka/cf3.jpg', description: 'Romantic cherry blossom romance in Sigiriya for 4 days and 3 nights', price: 40000 },
        { name: 'Galle Sunset Cruise for Two', image: '../assets/Get Away Guru/srilanka/cf4.jpg', description: 'Sunset cruise for two in Galle for 5 days and 4 nights', price: 45000 },
        { name: 'Nuwara Eliya Winter Love Retreat', image: '../assets/Get Away Guru/srilanka/cf5.jpg', description: 'Winter love retreat in Nuwara Eliya for 6 days and 5 nights', price: 50000 },
      ],
    },
    
    'Thailand': {
      affordable: [
        { name: 'Bangkok Budget Explorer', image: '../assets/Get Away Guru/thailand/af1.jpg', description: 'Explore Bangkok on a budget for 4 days and 3 nights', price: 15000 },
        { name: 'Chiang Mai Affordable Adventure', image: '../assets/Get Away Guru/thailand/af2.jpg', description: 'Affordable adventure in Chiang Mai for 5 days and 4 nights', price: 18000 },
        { name: 'Phuket Budget Beach Retreat', image: '../assets/Get Away Guru/thailand/af3.jpg', description: 'Budget beach retreat in Phuket for 6 days and 5 nights', price: 10000 },
        { name: 'Krabi Budget Island Escape', image: '../assets/Get Away Guru/thailand/af4.jpg', description: 'Budget island escape to Krabi for 7 days and 6 nights', price: 22000 },
        { name: 'Affordable Pattaya Paradise', image: '../assets/Get Away Guru/thailand/af5.jpg', description: 'Paradise in Pattaya on a budget for 8 days and 7 nights', price: 25000 },
      ],
      luxury: [
        { name: 'Luxurious Bangkok Retreat', image: '../assets/Get Away Guru/thailand/lux1.jpg', description: 'Indulge in luxury during a Bangkok retreat for 4 days and 3 nights', price: 45000 },
        { name: 'Chiang Mai Grand Cultural Experience', image: '../assets/Get Away Guru/thailand/lux2.jpg', description: 'Grand cultural experience in Chiang Mai for 5 days and 4 nights', price: 50000 },
        { name: 'Luxury Phuket Beach Getaway', image: '../assets/Get Away Guru/thailand/lux3.jpg', description: 'Luxury beach getaway in Phuket for 6 days and 5 nights', price: 60000 },
        { name: 'Krabi Deluxe Island Retreat', image: '../assets/Get Away Guru/thailand/lux4.jpg', description: 'Deluxe island retreat to Krabi for 7 days and 6 nights', price: 70000 },
        { name: 'Exclusive Pattaya Luxury Escape', image: '../assets/Get Away Guru/thailand/lux5.jpg', description: 'Exclusive luxury escape to Pattaya for 8 days and 7 nights', price: 80000 },
      ],
      coupleFriendly: [
        { name: 'Romantic Bangkok Getaway', image: '../assets/Get Away Guru/thailand/cf1.jpg', description: 'Romantic getaway in Bangkok for 3 days and 2 nights', price: 10000 },
        { name: 'Chiang Mai Love Boat Experience', image: '../assets/Get Away Guru/thailand/cf2.jpg', description: 'Experience love in Chiang Mai with a romantic boat ride for 4 days and 3 nights', price: 35000 },
        { name: 'Phuket Cherry Blossom Romance', image: '../assets/Get Away Guru/thailand/cf3.jpg', description: 'Romantic cherry blossom romance in Phuket for 5 days and 4 nights', price: 40000 },
        { name: 'Krabi Sunset Cruise for Two', image: '../assets/Get Away Guru/thailand/cf4.jpg', description: 'Sunset cruise for two in Krabi for 6 days and 5 nights', price: 45000 },
        { name: 'Pattaya Winter Love Retreat', image: '../assets/Get Away Guru/thailand/cf5.jpg', description: 'Winter love retreat in Pattaya for 7 days and 6 nights', price: 50000 },
      ],
    },
    'France': {
      affordable: [
        { name: 'Paris Budget Explorer', image: '../assets/Get Away Guru/france/af1.jpg', description: 'Explore Paris on a budget for 4 days and 3 nights', price: 25000 },
        { name: 'Provence Countryside Escape', image: '../assets/Get Away Guru/france/af2.jpg', description: 'Affordable escape to the Provence countryside for 5 days and 4 nights', price: 28000 },
        { name: 'Nice Budget Beach Retreat', image: '../assets/Get Away Guru/france/af3.jpg', description: 'Budget beach retreat in Nice for 6 days and 5 nights', price: 30000 },
        { name: 'Loire Valley Budget Castle Tour', image: '../assets/Get Away Guru/france/af4.jpg', description: 'Budget castle tour in the Loire Valley for 7 days and 6 nights', price: 32000 },
        { name: 'Affordable French Riviera Getaway', image: '../assets/Get Away Guru/france/af5.jpg', description: 'Getaway to the French Riviera on a budget for 8 days and 7 nights', price: 35000 },
      ],
      luxury: [
        { name: 'Luxurious Parisian Retreat', image: '../assets/Get Away Guru/france/lux1.jpg', description: 'Indulge in luxury during a Parisian retreat for 4 days and 3 nights', price: 60000 },
        { name: 'Champagne and Chateaux Luxury Experience', image: '../assets/Get Away Guru/france/lux2.jpg', description: 'Luxury experience with champagne and chateaux for 5 days and 4 nights', price: 70000 },
        { name: 'Luxury Beachfront Villa in Nice', image: '../assets/Get Away Guru/france/lux3.jpg', description: 'Luxury beachfront villa stay in Nice for 6 days and 5 nights', price: 80000 },
        { name: 'Loire Valley Deluxe Castle Tour', image: '../assets/Get Away Guru/france/lux4.jpg', description: 'Deluxe castle tour in the Loire Valley for 7 days and 6 nights', price: 90000 },
        { name: 'Exclusive French Riviera Retreat', image: '../assets/Get Away Guru/france/lux5.jpg', description: 'Exclusive luxury retreat to the French Riviera for 8 days and 7 nights', price: 100000 },
      ],
      coupleFriendly: [
        { name: 'Romantic Parisian Getaway', image: '../assets/Get Away Guru/france/cf1.jpg', description: 'Romantic getaway in Paris for 3 days and 2 nights', price: 10000 },
        { name: 'Provence Lavender Love Experience', image: '../assets/Get Away Guru/france/cf2.jpg', description: 'Experience love in Provence with a lavender-themed retreat for 4 days and 3 nights', price: 45000 },
        { name: 'Nice Sunset Cruise for Two', image: '../assets/Get Away Guru/france/cf3.jpg', description: 'Sunset cruise for two in Nice for 5 days and 4 nights', price: 50000 },
        { name: 'Romantic Loire Valley Hot Air Balloon Ride', image: '../assets/Get Away Guru/france/cf4.jpg', description: 'Hot air balloon ride for two in the romantic Loire Valley for 6 days and 5 nights', price: 55000 },
        { name: 'French Riviera Love Retreat', image: '../assets/Get Away Guru/france/cf5.jpg', description: 'Love retreat in the French Riviera for 7 days and 6 nights', price: 60000 },
      ],
    },
    'Maldives': {
      affordable: [
        { name: 'Island Budget Getaway', image: '../assets/Get Away Guru/maldives/af1.jpg', description: 'Budget getaway to a Maldivian island for 3 days and 2 nights', price: 40000 },
        { name: 'Atoll Adventure on a Budget', image: '../assets/Get Away Guru/maldives/af2.jpg', description: 'Affordable adventure in a Maldivian atoll for 4 days and 3 nights', price: 45000 },
        { name: 'Local Island Cultural Experience', image: '../assets/Get Away Guru/maldives/af3.jpg', description: 'Budget-friendly cultural experience on a local Maldivian island for 5 days and 4 nights', price: 50000 },
        { name: 'Sunset Cruise and Snorkeling', image: '../assets/Get Away Guru/maldives/af4.jpg', description: 'Enjoy a budget-friendly sunset cruise and snorkeling for 6 days and 5 nights', price: 55000 },
        { name: 'Affordable Overwater Bungalow Stay', image: '../assets/Get Away Guru/maldives/af5.jpg', description: 'Experience an overwater bungalow on a budget for 7 days and 6 nights', price: 60000 },
      ],
      luxury: [
        { name: 'Private Island Paradise', image: '../assets/Get Away Guru/maldives/lux1.jpg', description: 'Indulge in luxury on a private Maldivian island for 4 days and 3 nights', price: 80000 },
        { name: 'Luxury Overwater Villa Retreat', image: '../assets/Get Away Guru/maldives/lux2.jpg', description: 'Luxurious retreat in an overwater villa for 5 days and 4 nights', price: 90000 },
        { name: 'Maldivian Atoll Deluxe Experience', image: '../assets/Get Away Guru/maldives/lux3.jpg', description: 'Deluxe experience in a Maldivian atoll for 6 days and 5 nights', price: 100000 },
        { name: 'Underwater Dining and Spa Delight', image: '../assets/Get Away Guru/maldives/lux4.jpg', description: 'Indulge in underwater dining and spa delights for 7 days and 6 nights', price: 110000 },
        { name: 'Exclusive Overwater Bungalow Escape', image: '../assets/Get Away Guru/maldives/lux5.jpg', description: 'Exclusive escape in an overwater bungalow for 8 days and 7 nights', price: 120000 },
      ],
      coupleFriendly: [
        { name: 'Romantic Sunset Cruise', image: '../assets/Get Away Guru/maldives/cf1.jpg', description: 'Romantic sunset cruise for two for 3 days and 2 nights', price: 10000 },
        { name: 'Private Beach Candlelight Dinner', image: '../assets/Get Away Guru/maldives/cf2.jpg', description: 'Intimate beach candlelight dinner for couples for 4 days and 3 nights', price: 70000 },
        { name: 'Maldivian Spa and Relaxation Retreat', image: '../assets/Get Away Guru/maldives/cf3.jpg', description: 'Relaxing spa retreat for couples for 5 days and 4 nights', price: 80000 },
        { name: 'Underwater Adventure for Two', image: '../assets/Get Away Guru/maldives/cf4.jpg', description: 'Adventure-filled underwater experience for couples for 6 days and 5 nights', price: 90000 },
        { name: 'Romantic Overwater Bungalow Escape', image: '../assets/Get Away Guru/maldives/cf5.jpg', description: 'Romantic escape in an overwater bungalow for 7 days and 6 nights', price: 100000 },
      ],
    },
    'Dubai': {
      affordable: [
        { name: 'City Exploration on a Budget', image: '../assets/Get Away Guru/dubai/af1.jpg', description: 'Budget-friendly exploration of Dubai city for 3 days and 2 nights', price: 25000 },
        { name: 'Desert Safari Adventure', image: '../assets/Get Away Guru/dubai/af2.jpg', description: 'Affordable desert safari adventure for 4 days and 3 nights', price: 30000 },
        { name: 'Cultural Heritage Experience', image: '../assets/Get Away Guru/dubai/af3.jpg', description: 'Experience the cultural heritage of Dubai on a budget for 5 days and 4 nights', price: 35000 },
        { name: 'Beachside Relaxation', image: '../assets/Get Away Guru/dubai/af4.jpg', description: 'Enjoy budget-friendly beachside relaxation for 6 days and 5 nights', price: 40000 },
        { name: 'Budget Luxury Shopping Spree', image: '../assets/Get Away Guru/dubai/af5.jpg', description: 'Indulge in a luxury shopping spree on a budget for 7 days and 6 nights', price: 45000 },
      ],
      luxury: [
        { name: '5-Star Hotel Extravaganza', image: '../assets/Get Away Guru/dubai/lux1.jpg', description: 'Indulge in a luxurious stay at a 5-star hotel for 4 days and 3 nights', price: 80000 },
        { name: 'Private Yacht Cruise', image: '../assets/Get Away Guru/dubai/lux2.jpg', description: 'Luxurious private yacht cruise experience for 5 days and 4 nights', price: 90000 },
        { name: 'Skyline View Penthouse Retreat', image: '../assets/Get Away Guru/dubai/lux3.jpg', description: 'Retreat in a luxurious penthouse with skyline views for 6 days and 5 nights', price: 100000 },
        { name: 'Gourmet Dining and Entertainment', image: '../assets/Get Away Guru/dubai/lux4.jpg', description: 'Indulge in gourmet dining and entertainment for 7 days and 6 nights', price: 110000 },
        { name: 'Exclusive Shopping and Spa Experience', image: '../assets/Get Away Guru/dubai/lux5.jpg', description: 'Exclusive shopping and spa experience in Dubai for 8 days and 7 nights', price: 120000 },
      ],
      coupleFriendly: [
        { name: 'Romantic Desert Getaway', image: '../assets/Get Away Guru/dubai/cf1.jpg', description: 'Romantic getaway in the Dubai desert for 3 days and 2 nights', price: 10000 },
        { name: 'Private Dinner in the Sky', image: '../assets/Get Away Guru/dubai/cf2.jpg', description: 'Intimate private dinner experience in the sky for couples for 4 days and 3 nights', price: 70000 },
        { name: 'Couples Spa and Wellness Retreat', image: '../assets/Get Away Guru/dubai/cf3.jpg', description: 'Relaxing spa and wellness retreat for couples for 5 days and 4 nights', price: 80000 },
        { name: 'Hot Air Balloon Adventure for Two', image: '../assets/Get Away Guru/dubai/cf4.jpg', description: 'Adventure-filled hot air balloon experience for couples for 6 days and 5 nights', price: 90000 },
        { name: 'Romantic Beachfront Villa Escape', image: '../assets/Get Away Guru/dubai/cf5.jpg', description: 'Romantic escape in a beachfront villa for couples for 7 days and 6 nights', price: 100000 },
      ],
    },
      
    'Switzerland': {
      affordable: [
        { name: 'Alpine Adventure on a Budget', image: '../assets/Get Away Guru/switzerland/af1.jpg', description: 'Budget-friendly alpine adventure for 4 days and 3 nights', price: 35000 },
        { name: 'Scenic Train Journey', image: '../assets/Get Away Guru/switzerland/af2.jpg', description: 'Affordable scenic train journey through Switzerland for 5 days and 4 nights', price: 40000 },
        { name: 'Charming Swiss Villages Exploration', image: '../assets/Get Away Guru/switzerland/af3.jpg', description: 'Explore charming Swiss villages on a budget for 6 days and 5 nights', price: 10000 },
        { name: 'Lake Geneva Relaxation', image: '../assets/Get Away Guru/switzerland/af4.jpg', description: 'Relax by Lake Geneva on a budget for 7 days and 6 nights', price: 50000 },
        { name: 'Cultural Experience in Zurich', image: '../assets/Get Away Guru/switzerland/af5.jpg', description: 'Experience Swiss culture in Zurich on a budget for 8 days and 7 nights', price: 55000 },
      ],
      luxury: [
        { name: 'Luxurious Swiss Chalet Retreat', image: '../assets/Get Away Guru/switzerland/lux1.jpg', description: 'Indulge in a luxurious Swiss chalet retreat for 4 days and 3 nights', price: 100000 },
        { name: 'Private Helicopter Tour', image: '../assets/Get Away Guru/switzerland/lux2.jpg', description: 'Luxurious private helicopter tour over the Swiss Alps for 5 days and 4 nights', price: 120000 },
        { name: 'Exclusive Ski Resort Experience', image: '../assets/Get Away Guru/switzerland/lux3.jpg', description: 'Experience exclusivity at a Swiss ski resort for 6 days and 5 nights', price: 150000 },
        { name: 'Gourmet Dining in Michelin-Starred Restaurants', image: '../assets/Get Away Guru/switzerland/lux4.jpg', description: 'Indulge in gourmet dining at Michelin-starred restaurants for 7 days and 6 nights', price: 180000 },
        { name: 'Private Yacht Cruise on Lake Lucerne', image: '../assets/Get Away Guru/switzerland/lux5.jpg', description: 'Luxurious private yacht cruise on Lake Lucerne for 8 days and 7 nights', price: 200000 },
      ],
      coupleFriendly: [
        { name: 'Romantic Swiss Alps Getaway', image: '../assets/Get Away Guru/switzerland/cf1.jpg', description: 'Romantic getaway in the Swiss Alps for 3 days and 2 nights', price: 75000 },
        { name: 'Couples Spa Retreat in Interlaken', image: '../assets/Get Away Guru/switzerland/cf2.jpg', description: 'Relaxing spa retreat for couples in Interlaken for 4 days and 3 nights', price: 90000 },
        { name: 'Hot Air Balloon Adventure for Two', image: '../assets/Get Away Guru/switzerland/cf3.jpg', description: 'Adventure-filled hot air balloon experience for couples for 5 days and 4 nights', price: 100000 },
        { name: 'Romantic Lake Geneva Cruise', image: '../assets/Get Away Guru/switzerland/cf4.jpg', description: 'Romantic cruise on Lake Geneva for couples for 6 days and 5 nights', price: 110000 },
        { name: 'Luxury Vineyard Stay in Lavaux', image: '../assets/Get Away Guru/switzerland/cf5.jpg', description: 'Luxurious stay in a vineyard in Lavaux for couples for 7 days and 6 nights', price: 120000 },
      ],
    },
  };

  getDestinations() {
    return [
      { title: 'Kerala', description: 'Backwaters and vibrant culture', image: 'path-to-image' },
      { title: 'Ooty', description: 'Queen of the Nilgiris with tea gardens', image: 'path-to-image' },
      { title: 'Coorg', description: 'Coffee plantations and misty landscapes', image: '../../assets/Get Away Guru/coorg/co3.jpg' },
      { title: 'Goa', description: 'Beautiful beaches and vibrant nightlife', image: '../../assets/Get Away Guru/goa/g1.jpg' },
      { title: 'Ladakh', description: 'Majestic mountains and scenic landscapes', image: '../../assets/Get Away Guru/ladakh/l3.jpg'},
      { title: 'Kullu Manali', description: 'Spectacular beauty of the Himalayas', image: '../../assets/Get Away Guru/manali/m2.jpg' },
      { title: 'Kashmir', description: 'Scenic landscapes and serene lakes', image: '../../assets/Get Away Guru/kashmir/k5.jpg' },
      { title: 'Araku Valley', description: 'Picturesque hills and lush greenery,', image: '../../assets/Get Away Guru/araku/a1.jpg' },
      { title: 'Italy', description: 'Art, history, and delicious cuisine', image: '../../assets/Get Away Guru/italy/s2.jpg' },
      { title: 'Japan', description: 'Blend of tradition and modernity', image: '../../assets/Get Away Guru/japan/japan1.jpg' },
      { title: 'Sri Lanka', description: 'Beautiful beaches and rich heritage', image: '../../assets/Get Away Guru/srilanka/s1.jpg' },
      { title: 'Thailand', description: 'Exotic islands and vibrant cities', image:'../../assets/Get Away Guru/Thailand/t2.jpg' },
      { title: 'France', description: 'Eiffel Tower, art, and romance', image: '../../assets/Get Away Guru/france/p1.jpg' },
      { title: 'Maldives', description: 'Overwater bungalows and coral reefs', image: '../../assets/Get Away Guru/maldives/l1.jpg' },
      { title: 'Dubai', description: 'Luxury,futuristic architecture and desert adventures', image: '../../assets/Get Away Guru/dubai/d3.jpg' },
      { title: 'Switzerland', description: 'Alps, picturesque landscapes, and chocolate', image: '../../assets/Get Away Guru/switzerland/s1.jpg' },
 
      // Add more destinations as needed
    ];
  }

  getPackagesForDestination(destinationTitle: string, category: string) {
    const packages = this.packages[destinationTitle]?.[category] || [];

    return packages.map((pkg) => ({
      ...pkg,
      price: pkg.price || 0,
    }));
  
  }
}
