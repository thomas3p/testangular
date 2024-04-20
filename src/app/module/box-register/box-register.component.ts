import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-box-register',
  templateUrl: './box-register.component.html',
  styleUrls: ['./box-register.component.scss']
})
export class BoxRegisterComponent implements OnInit{
  
  @Output() infomation:EventEmitter<any> = new EventEmitter();
  form:FormGroup | undefined

  
  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      user:['',Validators.compose([Validators.required,Validators.maxLength(20)])],
      pass:['',Validators.compose([Validators.required])],
      fname: ['',Validators.compose([Validators.required,Validators.maxLength(30)])],
      lname: ['',Validators.compose([Validators.required,Validators.maxLength(30)])],
      tel:['',Validators.compose([Validators.required,Validators.maxLength(10)])],
      add:['',Validators.compose([Validators.required])],
      email:['',Validators.compose([Validators.required])],
      post:['',Validators.compose([Validators.required,Validators.maxLength(5)])]

  })
  }
  // sendinfo(){
  //   const info = {
  //     fname:this.form?.controls['fname'].value,
  //     lname:this.form?.controls['lname'].value,
  //     nickname:this.form?.controls['nickname'].value,
  //     id:this.form?.controls['id'].value,
  //     tel:this.form?.controls['tel'].value,
  //   }
  //   this.infomation.emit(info);
  //   console.log(this.form?.value);
    
  // }

  register(): void {
    const info = {
      user:this.form?.controls['user'].value,
      pass:this.form?.controls['pass'].value,
      fname:this.form?.controls['fname'].value,
      lname:this.form?.controls['lname'].value,
      tel:this.form?.controls['tel'].value,
      add:this.form?.controls['add'].value,
      post:this.form?.controls['post'].value,
      email:this.form?.controls['email'].value,
    }
    this.infomation.emit(info);
    console.log(info);
    
  }


}
