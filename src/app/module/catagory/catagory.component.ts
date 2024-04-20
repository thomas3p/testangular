import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.scss']
})
export class CatagoryComponent {
  @Input() key:any = undefined
}
