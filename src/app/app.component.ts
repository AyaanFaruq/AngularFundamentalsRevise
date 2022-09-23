import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Ayaan';
  handleChange(event: any) {
    // console.log(event);
    this.name = event.target.value;
  }
}
