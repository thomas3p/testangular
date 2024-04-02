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
      fname: ['',Validators.compose([Validators.required,Validators.maxLength(30)])],
      lname: ['',Validators.compose([Validators.required,Validators.maxLength(30)])],
      nickname:['',Validators.compose([Validators.required,Validators.maxLength(15)])],
      id:['',Validators.compose([Validators.required,Validators.maxLength(13)])],
      tel:['',Validators.compose([Validators.required,Validators.maxLength(10)])]
  })
  }
  sendinfo(){
    const info = {
      fname:this.form?.controls['name'].value,
      lname:this.form?.controls['lname'].value,
      nickname:this.form?.controls['nickname'].value,
      id:this.form?.controls['id'].value,
      tel:this.form?.controls['tel'].value,
    }
    this.infomation.emit(info);
    console.log(info);
    
  }


}
