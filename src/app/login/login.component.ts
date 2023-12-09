// login.component.ts

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform!:FormGroup
  title = 'formvalidation';
  submitted=false;

  constructor(private formBuilder:FormBuilder, private router: Router, private http: HttpClient){}
    ngOnInit() {
      this.loginform = this.formBuilder.group({
        rememberMe:[false],        
        username: ['', Validators.required],       
        password: ['', Validators.required],
       
      });
    }      


    public get formControls() {
      return this.loginform.controls;
    }
    


    onSubmit() {
      this.submitted = true;

      
      if (this.loginform.invalid) {
        return;
      }

      const bodyData={
        username : this.formControls['username'].value,
        password:this.formControls['password'].value
      };
       
      this.http.post("http://localhost:8080/GetAwayGuru/login", bodyData, { responseType: 'text' })
      .subscribe(
        (resultData: any) => {
          console.log(resultData);
          if (resultData.includes("Welcome")) {
            alert("Login successful");
            if (bodyData.username === 'admin') {
              this.router.navigate(['/admin']);
            } else {
              // Redirect to another page or perform further actions on successful login
              this.router.navigate(['/home']);
            }
          } else {
            alert('Invalid username or password');
          }
        },
        (error) => {
          console.error('Error during login:', error);
          alert('An error occurred during login');
        }
      );
    
  }

}