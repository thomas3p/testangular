import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Expinc';
  form: FormGroup | undefined

  user={
    usernam:'',
    password:'',
    status_login : false,
    firstname: '',
    lastname:'',
    nickname: '',
    tel:'',
    address:{
      detail:'',
      province:'',
      district:'',
      subdistrict:''
    }
  }

  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
      this.form = this.fb.group({
        firstname: ['Pathawikorn',Validators.compose([Validators.required,Validators.maxLength(30)])],
        lastname: ['Seewai',Validators.compose([Validators.required,Validators.maxLength(30)])],
        nickname: ['Thono',Validators.compose([Validators.required,Validators.maxLength(20)])],
        id: ['*************',Validators.compose([Validators.required,Validators.maxLength(13),Validators.minLength(13)])],
        tel: ['0981161304',Validators.compose([Validators.required,Validators.maxLength(10)])]
      })
      console.log(this.form);
      
  }
}
