import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  constructor(
    private fb: FormBuilder,
    private myRoute: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  returnUrl: string;
  ngOnInit() {

    //check already loggedin
    if (this.authService.isLoggednIn()) {
      console.log("already loggedIn");
      this.myRoute.navigate(["home"]);
    }

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  login() {

    if (this.form.valid) {
      this.authService.sendToken(this.form.value.email)
      // this.myRoute.navigate(["home"]);
      this.myRoute.navigate([this.returnUrl]);
    }
  }
}
