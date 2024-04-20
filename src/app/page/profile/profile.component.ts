import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/sevice/product.service';
import { UserService } from 'src/app/sevice/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  recive:any = null
  form:FormGroup | undefined
  constructor(private activatedRoute: ActivatedRoute,private userservice:UserService,private fb: FormBuilder){
    
  }
  ngOnInit():void{
    this.recive = this.userservice.loginuser;
    this.form = this.fb.group({
      fname: [this.recive.fname,Validators.compose([Validators.required,Validators.maxLength(30)])],
      lname: [this.recive.lname,Validators.compose([Validators.required,Validators.maxLength(30)])],
      tel:[this.recive.tel,Validators.compose([Validators.required,Validators.maxLength(10)])],
      add:[this.recive.add,Validators.compose([Validators.required])],
      email:[this.recive.email,Validators.compose([Validators.required])],
      post:[this.recive.post,Validators.compose([Validators.required,Validators.maxLength(5)])]

  })
  }
  updateData(){
    const info = {
      user:this.recive.user,
      pass:this.recive.pass,
      fname:this.form?.controls['fname'].value,
      lname:this.form?.controls['lname'].value,
      tel:this.form?.controls['tel'].value,
      add:this.form?.controls['add'].value,
      post:this.form?.controls['post'].value,
      email:this.form?.controls['email'].value,
    }
    this.recive = info
    console.log(this.recive);
    this.userservice.edituser(this.recive)
    
  }
}
