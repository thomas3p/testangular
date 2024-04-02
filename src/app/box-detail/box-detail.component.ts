import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.scss']
})
export class BoxDetailComponent implements OnInit {
  @Input() item : any = null
  constructor(){}
  ngOnInit(): void {
    console.log(this.item)
  }


}
