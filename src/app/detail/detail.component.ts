import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detail={
    fname:'ปฐวิกรณ์',
    lname:'สีไว',
    nickname: 'โตโน่',
    id:'643021238-0',
    tel:'098-1161304'
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
