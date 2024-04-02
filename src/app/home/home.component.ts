import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  profile={
    fname:'Pathawikorn',
    lname:'Seewai',
    nickname:'Thono',
    id:'1407700007033',
    tel:'098-1161304'
  }
  chanedetail(ob:any){
    this.profile.fname = ob.fname;
    this.profile.lname = ob.lname;
    this.profile.nickname = ob.nickname;
    this.profile.id = ob.id;
    this.profile.tel = ob.tel;

  }
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
