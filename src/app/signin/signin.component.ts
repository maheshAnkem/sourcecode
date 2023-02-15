import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  testform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*')]),
    number: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    
  })

  constructor( private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.testform.valid){
    this.http.post<any>('http://localhost:3000/signin',this.testform.value).subscribe(()=>{
     alert("User Regitered successfully!!!")
     this.testform.reset();
     this.router.navigate(['login']);
  })}
  else{
    alert ("Invaild details!!!")
  }
  
}

}
