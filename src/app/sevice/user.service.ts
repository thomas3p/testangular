import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginuser = {
    user:'thomas',    pass:'thomas',    fname:'Pathawikorn',    
    lname:'Seewai',    tel:'098-1161304',    add:'41 7',    post:'40150',    email:'pathawikorn@gmail.com',    id:0
  }
  user =[{user:'pppp',    pass:'',    fname:'',    lname:'',    tel:'',    add:'',    post:'',    email:'',    id:0}]
  constructor() { }
  id=1
  createUser(user:string,pass:string,fname:string,lname:string,tel:string,add:string,post:string,email:string ){
    const newUser = {
      user:user,pass:pass,fname:fname,lname:lname,tel:tel,add:add,
      post:post,      email:email,      id:this.id    }
    this.user.push(newUser)
    this.id+=1
  }
  getUserByuser(user:string){
    const use = this.user.find(x => x.user === user)
    return use
  }
  edituser(user:any){
    this.loginuser = user
  }
}
