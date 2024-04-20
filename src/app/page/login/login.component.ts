import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, OutletContext } from '@angular/router';
import { UserService } from 'src/app/sevice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  recive:any = null
  username: any;

  constructor(private activatedRoute: ActivatedRoute,private userservice:UserService){
    
  }
}
