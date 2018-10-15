import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;
  constructor(
    private fb: FormBuilder,
    private myRoute: Router,
    private authService: AuthService
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cnfpassword: ['', Validators.required],
    });
  }

  ngOnInit() {
    //check already loggedin
    if (this.authService.isLoggednIn()) {
      console.log("already loggedIn");
      this.myRoute.navigate(["home"]);
    }
  }

  register() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.authService.sendToken(this.form.value.email)
      this.myRoute.navigate(["home"]);
    }
  }

}
