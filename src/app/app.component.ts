import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
        slideInAnimation
    ]
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {}
  activeRoute = this.router.url;
  
  ngOnInit(): void {
    console.log(this.activeRoute);
  }
  title = 'saad';
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }
}
