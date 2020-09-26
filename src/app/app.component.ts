import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: any[] = ['durgesh', 26];
  tabs: string = 'home';
  courses = [
    { id: 1, subject: 'hindi' },
    { id: 2, subject: 'english' },
    { id: 3, subject: 'math' },
  ]
  constructor() {
    console.log(this.name);
  }
}
