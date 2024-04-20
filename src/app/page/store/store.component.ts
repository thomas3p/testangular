import { Component, OnInit } from '@angular/core';
//import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router'; 

import * as dat from 'http://localhost:3000/6';
import { ProductService } from 'src/app/sevice/product.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  data: any = dat;
  name = ''
  address = ''
  products:any[] | undefined;
  constructor(private activatedRoute: ActivatedRoute,private protectService:ProductService){}
  ngOnInit():void{
    this.products = this.protectService.getProductData();
  }
  //constructor(){}
  catagory = [
    {
      icon:'https://down-bs-th.img.susercontent.com/ba19414538138b3027006354a4b46306@resize_ss100x100.webp',
      text:'MOBILE',
      catagory:'Mobile'
    },{
      icon:'https://down-bs-th.img.susercontent.com/701678cfbd5a64a30899f48f78332a55@resize_ss100x100.webp',
      text:'TABLET',
      catagory:'Tablet'
    },{
      icon:'https://down-bs-th.img.susercontent.com/th-11134210-7r98z-lrcqkm0a1vp91b@resize_ss100x100.webp',
      text:'WEARABLES',
      catagory:'Wearable'

    },{
      icon:'https://down-bs-th.img.susercontent.com/th-11134210-23020-zfqwy72deynv0f@resize_ss100x100.webp',
      text:'MOBILE ACCESSORIES',
      catagory:'Accessory'
    },{
      icon:'https://down-bs-th.img.susercontent.com/th-11134210-7r990-lmie2tq2cc5qf4@resize_ss100x100.webp',
      text:'Home Appliance',
      catagory:'Appliance'
    },{
      icon:'https://down-bs-th.img.susercontent.com/th-11134210-7r990-lmie2tq2dqq6a6@resize_ss100x100.webp',
      text:'TV',
      catagory:'TV'
    }
  ];
  
  addToCart(product: any) {
    console.log(`Added ${product.name} to cart.`);
  }

  images = [
    'https://github.com/thomas3p/testangular/blob/main/src/image/img1.jpg?raw=true',
   'https://github.com/thomas3p/testangular/blob/main/src/image/img2.jpg?raw=true', 
   'https://github.com/thomas3p/testangular/blob/main/src/image/img3.jpg?raw=true'
  ];
}

