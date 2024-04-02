import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detail={
    fname:'xxxxxxxxxx',
    lname:'xxxxxxx',
    nickname: 'xxxxx',
    id:'xxxxxxxxxxxxx',
    tel:'xxx-xxxxxxx'
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
