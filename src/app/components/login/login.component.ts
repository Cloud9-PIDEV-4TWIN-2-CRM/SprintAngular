import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { UserService } from 'Services/UserService';
import { Prospect } from 'Models/Prospect';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any;
  

  test : Date = new Date();

    focus;
    focus1;
  constructor(private router: Router,private userServ :UserService) { }

  ngOnInit() {
  }
  resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

  /*login(email,pwd){
    this.userServ.tryLogin(email.value,pwd.value).subscribe(result=>this.user=result);
    this.resolveAfter2Seconds(10).then(value => {
      console.log(`promise result: `);
      if(this.userServ.tryLogin(email.value,pwd.value)!=null){
        console.log('valide');
        console.log(this.user.email)
        localStorage.setItem('user',this.user.email);
        location.replace('');
      }
      else if(this.user===null) {
        console.log('invalide')
      }
    });
    
    
    

    
    
    
  }*/
  login(email,pwd){
    this.userServ.tryLogin(email.value,pwd.value).subscribe(result=>{this.user=result},
      e => {},
      () => {
        if(this.userServ.tryLogin(email.value,pwd.value)!=null){
          console.log('valide');
          console.log(this.user.email)
          localStorage.setItem('user',this.user.email);
          location.replace('');
        }
        else if(this.user===null) {
          console.log('invalide')
        }
      });
    /*this.resolveAfter2Seconds(20).then(value => {
      console.log(promise result:);
     
    });*/
  }
}
