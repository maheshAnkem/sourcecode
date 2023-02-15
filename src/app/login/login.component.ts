import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  user = false;
  testform = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')

  })

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
  }

  onLogIn() {
        this.http.get<any>('http://localhost:3000/signin').subscribe(res=>{

           const user = res.find((x: any) => {
           return  x.email == this.testform.value.email && x.password == this.testform.value.password })

          if(user != null){

            alert('user found')
            localStorage.setItem('Token','bncbwsciniwnciwnhicfw')
            this.router.navigate(['form-data'])
          }
          else{
            alert('user not found');
            this.testform.reset();
          }

    } )

  
  }
}

