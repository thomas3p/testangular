import { Component, Input } from '@angular/core';
import { ActivatedRoute ,NavigationEnd, Router } from '@angular/router';
import { ProductService } from 'src/app/sevice/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent {
  products:any[] | undefined;
  catagory = ''
  topbar = ['Mobile','Tablet','Wearable','Accessory','Appliance','TV'];

  
  
  constructor(private route: ActivatedRoute,private productService:ProductService,private router: Router){
    this.route.params.subscribe(param=>{
      this.catagory = param['catagory']
    })
  }
  ngOnInit():void{
    if(this.catagory == undefined){
      this.products = this.productService.getProductData();
    }else{

      this.products = this.productService.getProductByCatagory(this.catagory);
    }
    // console.log(this.catagory);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
      this.products = this.productService.getProductByCatagory(this.catagory);
      }
    });
  }
  sort_hi(){
    this.products?.sort((a,b)=>b.price-a.price)
  }
  sort_lo(){
    this.products?.sort((a,b)=>a.price-b.price)
  }
  sort_az(){
    this.products?.sort((a, b) => a.name.localeCompare(b.name))
  }
  sort_za(){
    this.products?.sort((a, b) => b.name.localeCompare(a.name))

  }

  
}
