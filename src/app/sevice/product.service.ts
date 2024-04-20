import { Injectable } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from 'backrnd/src/entity/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000'
  constructor(private http:HttpClient) { }
  products = [
    {
      id: 1,
      name: 'SAMSUNG TV Crystal UHD 4K (2023) Smart TV 43 นิ้ว',
      price: 13900,
      catagory:'TV',
      detail:{Model :' UA43CU7000KXXT',
               Features : 'Netflix , Youtube , Browser' ,
               Screen_Size : '43 NCH', 
               Panel : 'LED',
              Resolution : '3,840 x 2,160, 4K ',
              Sound_System : 'Object Tracking Sound Lite (OTS Lite) , Q-Symphony, Adaptive Sound' ,
              Operation_System : 'Tizen', 
              Conectivity : 'Bluetooth 5.2 , WiFi 5, Cast',
              Connector : 'HDMI 2.0 x 3 / USB x 1 / Ethernet (LAN) x 1 / Digital Audio Out x 1' ,
              Color : 'Black' ,
              Varanty :'รับประกัน 1 ปี'},
      imageUrl: 'https://down-th.img.susercontent.com/file/cdf09cc6eefbbf02518508f3b52d13b8'
    },
    {
      id: 2,
      name: 'Galaxy A54 5G 8/256GB',
      price: 15900,
      catagory:'Mobile',
      detail:{
        Displauy : '6.4" (1080 x 2340), FHD+ Super AMOLED, 401PPI, 120Hz',
        Chipset : "Exynos 1380 Octa-core CPU 2.4GHz,2GHz",
        RAM :'8 GB',
        ROM:' 256 GB'
      },
      imageUrl: 'https://down-th.img.susercontent.com/file/th-11134207-7r98x-lnmf95bmc12fd0'
    },
    {
      id: 3,
      name: 'Samsung Galaxy Tab S9FE 6/128 5G',
      price: 19900,
      catagory:'Tablet',
      detail:{},
      imageUrl: 'https://down-th.img.susercontent.com/file/th-11134207-7r992-lncfkinlb5800b'
    },{
      id: 4,
      name: 'Samsung Galaxy Watch 5 44mm รุ่น LTE',
      price: 12490,
      catagory:'Wearable',
      detail:{Model:'Samsung Galaxy Watch 5 44mm รุ่น LTE'},
      imageUrl: 'https://down-th.img.susercontent.com/file/th-11134004-7r98t-lr66wgs0l5ym28'
    },{
      id: 5,
      name: 'Samsung ตู้เย็น 2 ประตู RT22FGRADSA/ST 236 L',
      price: 10690,
      catagory:'Appliance',
      detail:{
        ความจุ:' 236 ลิตร / 8.3 คิว',
        detail:'เย็นสม่ำเสมอ ทนทาน ประหยัดไฟมากกว่า ประหยัดrลังงานเกินคาดด้วย Digital Inverter Compressor'
      },
      imageUrl: 'https://down-th.img.susercontent.com/file/5ac631b41ab7d04791e61a9e158092f4'
    },
{
      id: 6,
      name: 'Samsung Adapter Super Fast charging (25W)',
      price: 990,
      catagory:'Accessory',
      detail:'- สินค้าเฉพาะหัว Adapter อะแดปเตอร์ แปลงไฟ ซัมซุง ซูเปอร์ฟาสท์ 25 วัตต์',
      imageUrl: 'https://down-th.img.susercontent.com/file/th-11134207-7r98z-ltidbrant2kob9'
    },{
      id: 7,
      name: 'Samsung Galaxy Watch6 40mm รุ่น Bluetooth',
      price: 9900,
      catagory:'Wearable',
      detail:'',
      imageUrl: 'https://down-th.img.susercontent.com/file/th-11134207-7r98o-ll0757a0qkmkfb'
    },
{
      id: 8,
      name: 'Samsung Galaxy Watch6 44mmรุ่น Bluetooth',
      price: 11900,
      catagory:'Wearable',
      detail:'',
      imageUrl: 'https://down-th.img.susercontent.com/file/th-11134207-7r98o-ll0757a0jjsc45'
    },{
      id: 9,
      name: 'Samsung TV 55" QLED รุ่น QA55QE1CAKXXT',
      price: 16990,
      catagory:'TV',
      detail:'Samsung TV 55" QLED รุ่น QA55QE1CAKXXT  สีสดสมจริง Quantum Dot ดีไซน์ AirSlim',
      imageUrl: 'https://down-th.img.susercontent.com/file/45e7bb7daeb007d57915dcaaf4f2b27b'
    },
{
      id: 10,
      name: 'Samsung Galaxy Z Fold5 12/256GB',
      price: 59990,
      catagory:'Mobile',
      detail:'',
      imageUrl: 'https://down-th.img.susercontent.com/file/b2c3774b437241030caaf368c464f2b3'
    },{
      id: 11,
      name: 'SAMSUNG TV Crystal UHD 4K (2023) Smart TV 55 นิ้ว CU7000 Series รุ่น UA55CU7000KXXT',
      price: 18990,
      catagory:'TV',
      detail:'',
      imageUrl: 'https://down-th.img.susercontent.com/file/cdf09cc6eefbbf02518508f3b52d13b8'
    },{
      id: 12,
      name: 'เครื่องซักผ้าฝาบน WA15CG5441BYST 15 กก.',
      price: 17990,
      catagory:'Appliance',
      detail:'เครื่องซักผ้าฝาบน WA15CG5441BYST พร้อมด้วย Ecobubble™ และเทคโนโลยี Digital Inverter, 15 กก.',
      imageUrl: 'https://down-th.img.susercontent.com/file/th-11134207-7qukz-lj5j6tput85tb5'
    },{
      id: 13,
      name: 'Samsung Galaxy A15 5G 8/128GB',
      price: 17990,
      catagory:'Mobile',
      detail:'Samsung Galaxy A15 5G 8/128GB แบตอึด 5,000mAh ชาร์จไว 25W / จอขนาด 6.5"',
      imageUrl: 'https://down-th.img.susercontent.com/file/95e71c45179ea63aaedcdd2b26724237'
    },
  ];
  getProductData(){
    return this.products
  }
  getProductById(id: number) {
    const product = this.products.find(x => x.id === id)
    // console.log("🚀 ~ ProductService ~ getProductById ~ product:", product)
    return product
  }
  getProductByCatagory(catagory:string){
    if(catagory=='All'||catagory==''){
      return this.products
    }else{
      const filtered = this.products.filter(item =>item.catagory == catagory
      )
      return filtered
    }
      
    }
  
    getProduct(productId: string): Observable<Product> {
      return this.http.get<Product>(`${this.apiUrl}/product/${productId}`);
    }
}
