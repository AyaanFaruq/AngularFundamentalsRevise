import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Ayan';
  handleClick() {
    this.name = 'Faruq';
  }
  handleChange(value: string) {
    this.name = value;
  }
}
