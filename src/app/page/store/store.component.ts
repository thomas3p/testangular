import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/th/ua55au7000kxxt/gallery/th-uhd-au7000-ua55au7000kxxt-398959633?$650_519_PNG$'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      imageUrl: 'https://pim-cdn0.ofm.co.th/products/large/Y071393.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqQHGfqzgrKuYSdk_j91rnvDipbZj0NXgiocEGsDCzQ&s'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      imageUrl: 'https://pim-cdn0.ofm.co.th/products/large/Y071393.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqQHGfqzgrKuYSdk_j91rnvDipbZj0NXgiocEGsDCzQ&s'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      imageUrl: 'https://pim-cdn0.ofm.co.th/products/large/Y071393.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqQHGfqzgrKuYSdk_j91rnvDipbZj0NXgiocEGsDCzQ&s'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      imageUrl: 'https://pim-cdn0.ofm.co.th/products/large/Y071393.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqQHGfqzgrKuYSdk_j91rnvDipbZj0NXgiocEGsDCzQ&s'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      imageUrl: 'https://pim-cdn0.ofm.co.th/products/large/Y071393.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqQHGfqzgrKuYSdk_j91rnvDipbZj0NXgiocEGsDCzQ&s'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      imageUrl: 'https://pim-cdn0.ofm.co.th/products/large/Y071393.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqQHGfqzgrKuYSdk_j91rnvDipbZj0NXgiocEGsDCzQ&s'
    }
  ];

  addToCart(product: any) {
    console.log(`Added ${product.name} to cart.`);
  }

  images = ['https://github.com/thomas3p/testangular/blob/main/src/image/img1.jpg',
   'https://github.com/thomas3p/testangular/blob/main/src/image/img2.jpg', 
   'https://github.com/thomas3p/testangular/blob/main/src/image/img3.jpg'];
}

