import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login() {
    localStorage.setItem("token","afjafafoiafioshfadlafjdlifhifjsfa") 
    window. location.href = '/adults';
  }
  

  loginFormGroup: FormGroup = new FormGroup ({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6) ]) 
  });
}



