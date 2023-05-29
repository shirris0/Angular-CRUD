import { Component } from '@angular/core';

import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[] = [
    {id: 1, name: "Samuel", country: "México"},
    {id: 2, name: "Ryan", country: "USA"},
    {id: 3, name: "Josue", country: "Honduras"}
  ];
}
