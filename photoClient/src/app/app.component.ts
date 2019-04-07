import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo';

  constructor(private router: Router,private location: Location) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    if(location.pathname === '/') {
      this.router.navigate(['login']);
    }
  }
}
