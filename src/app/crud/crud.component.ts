import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit{
  name:string = '';
  age:any = null;
  indexUpdate:number=0;
  
  list = [
    {name:'Thomas',
    age:22}
  ]
  constructor(){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  createRow(){
    this.list.push({name:this.name,age:this.age})
    this.name = ''
    this.age = null
  }
  deleteRow(index:number){
    this.list.splice(index,1)
  }
  setUpdateRow(item:any=null,index:number){
    this.name =item.name;
    this.age = item.age;
    this.indexUpdate = index;
  }
  updateRow(){
    this.list[this.indexUpdate].name = this.name;
    this.list[this.indexUpdate].age = this.age;
    this.name = ''
    this.age = null
    this.indexUpdate = 0
  }


}
