import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() images = ['D:\ProjectAnugar\Main\src\image\img1.jpg',
  'D:\ProjectAnugar\Main\src\image\img2.jpg', 
  'D:\ProjectAnugar\Main\src\image\img3.jpg'];
  @Input() showClose: boolean | undefined;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
}
