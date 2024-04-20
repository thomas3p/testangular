import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/sevice/product.service';


@Component({
  selector: 'app-product-detail-card',
  templateUrl: './product-detail-card.component.html',
  styleUrls: ['./product-detail-card.component.scss']
})
export class ProductDetailCardComponent implements OnInit{
  productId: string = ''
  productName: string = ''
  product: any; // สร้างตัวแปรเพื่อเก็บข้อมูลผลิตภัณฑ์
  new: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { 
    this.route.params.subscribe(param => {
      // console.log("🚀 ~ ProductDetailsComponent ~ param:", param)
      this.productId = param['id']
      this.productName = param['name']
    })
  
  }
  ngOnInit(): void {
    console.log("product parameter => ",this.productId,this.productName)
    this.product = this.productService.getProductById(+this.productId)
    console.log("🚀 ~ ProductDetailsComponent ~ ngOnInit ~ product:", this.product)
  }
  printObj(obj:any){
    let string = [];
    const p=''
    for(let prop in obj){
      if(typeof obj[prop]=='string'){
        string.push(prop+': '+obj[prop]);

      }
    }
    return string;
  }
  
}
