import { Component } from '@angular/core';

import { OperatorsListService } from './operators-list.service';
import { Operator } from './operator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expression';
  total = {
    value: 0
  };
  options = {
    results: false,
    theme: false
  };

  constructor(public operatorsService: OperatorsListService) { }
}
