import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/sevice/product.service';
import { UserService } from 'src/app/sevice/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  title = 'Register';
  recive:any = null
  constructor(private activatedRoute: ActivatedRoute,private userservice:UserService){
    
  }
  createUser(){
    this.userservice.createUser(
      this.recive.user,
      this.recive.pass,
      this.recive.fname,
      this.recive.lname,
      this.recive.tel,
      this.recive.add,
      this.recive.post,
      this.recive.email
    )
    console.log(this.recive);
    
  }
  ngOnInit(): void {
    
  }

}



