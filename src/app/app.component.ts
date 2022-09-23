import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;
  name: string = 'Ayaan';
  logo: string = 'img/logo.svg';
  constructor() {
    this.title = 'Ultimate Angular';
  }
}
