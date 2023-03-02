import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  router: string;
  title: "furama";

  constructor(private _router: Router){
    this.router = _router.url;
  }
}
