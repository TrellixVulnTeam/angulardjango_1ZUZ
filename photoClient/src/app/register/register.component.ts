import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public message = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registerUser(userData: NgForm) {
    if (userData.invalid) {
      return false;
    }
    console.log(userData.value);
  }

}
