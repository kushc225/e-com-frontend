import { TimerProps } from "@/components/FlashWithTimer/FlashWithTimer";
import { accordionType } from "@/types/accordion.type";
import { FeatureProps } from "@/types/common.type";
import { Product } from "@/types/product.type";

export const ACCORDION_FAKE_DATA: accordionType[] = [
  {
    title: "Woman’s Fashion",
    values: ["Dress", "Skirt", "Blouse", "Handbag", "Heels", "Jacket"],
  },
  {
    title: "Men’s Fashion",
    values: ["Suit", "Trousers", "Shirt", "Tie", "Watch", "Belt"],
  },
  {
    title: "Electronics",
    values: [],
  },
  {
    title: "Home & Lifestyle",
    values: [],
  },
  {
    title: "Machine",
    values: [],
  },
  {
    title: "sports & outdoor",
    values: [],
  },
  {
    title: "Baby's & Toys ",
    values: [],
  },
  {
    title: "Groceires & pets",
    values: [],
  },
  {
    title: "Health & Beauty",
    values: [],
  },
];



export const FLASH_SALTES_FAKE_DATA: TimerProps[] = [
  {
    id : 1, 
    time : 'days',
    timeLeft : '02'
    
  },
  {
    id : 2, 
    time : 'hours',
    timeLeft : '32'
    
  },
  {
  id : 3, 
    time : 'minutes',
    timeLeft : '19'
    
  },
  {
    id : 4, 
    time : 'seconds',
    timeLeft : '56'
  },
]



// PRODUCT FAKE DATA 
export const PRODUCT: Product[] = [
  {
    title: "Havit Hv-G92 Gamespace",
    originalPrice: 33,
    discountedPrice: 55,
    discountPercentage: 34,
    imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4,
    reviewsCount: 34,
  },
  {
    title: "Havit Hv-G92 Gamespace",
    originalPrice: 33,
    discountedPrice: 55,
    discountPercentage: 34,
    imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4,
    reviewsCount: 34,
  },
  {
    title: "Logitech G920 Driving Force",
    originalPrice: 299,
    discountedPrice: 249,
    discountPercentage: 17,
    imageUrl: "https://images.unsplash.com/photo-1573209142051-0077d9aa69b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 5,
    reviewsCount: 112,
  },
  {
    title: "Xbox Wireless Controller",
    originalPrice: 59,
    discountedPrice: 49,
    discountPercentage: 17,
    imageUrl: "https://images.unsplash.com/photo-1581579181111-7b10cfbbc7a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4.5,
    reviewsCount: 88,
  },
  {
    title: "PlayStation DualSense",
    originalPrice: 69,
    discountedPrice: 59,
    discountPercentage: 14,
    imageUrl: "https://images.unsplash.com/photo-1606813900088-9b1b3dc67050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4.7,
    reviewsCount: 96,
  },
];



// ADDTIONAL INFO ABOUT OUR SERVICE 

export const WHY_E_COM: FeatureProps[] = [
  {
    imagePath: '/bus.svg',
    title: 'free and fast delivery',
    description: 'Free order for all the delivery over ₹300',
  },
  {
    imagePath: '/headphone.svg',
    title: '24/7 customer service',
    description: 'Friendly 24/7 customer support',
  },
  {
    imagePath: '/protect.svg',
    title: 'money back guarantee',
    description: 'We return money within 30 days',
  },
];
