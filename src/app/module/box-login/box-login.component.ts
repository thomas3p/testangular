import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-box-login',
  templateUrl: './box-login.component.html',
  styleUrls: ['./box-login.component.scss']
})
export class BoxLoginComponent {
  @Output() status:EventEmitter<boolean> = new EventEmitter();
  login(){
    // this.recive = this.userservice.getUserByuser(username)
    // console.log(this.recive);
    this.status.emit(true)
    
    
  }


}
