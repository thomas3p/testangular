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
  testcase = ['testcase','johnson','jenny','ann','scott']

  constructor(private fb: FormBuilder){

  }
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
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
  logincheck:boolean=true;
  isLoggedIn(){
    return this.logincheck
  }
  logout(){
    this.logincheck=false
  }
  ccheck=false;
  loginclick(){
    this.ccheck = true
    console.log(this.ccheck);
    
  }
  clickf(){
    this.ccheck = false
  }
  topbar = ['Mobile','Tablet','Wearable','Accessory','Appliance','TV'];
}
