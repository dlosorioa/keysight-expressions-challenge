import { Component, Input, HostListener } from '@angular/core';
import { Operator } from '../operator';

@Component({
  selector: 'app-operator-control',
  templateUrl: './operator-control.component.html',
  styleUrls: ['./operator-control.component.css'],
  inputs: ['operator: Operator', 'index: number']
})
export class OperatorControlComponent {
  @Input() operator: Operator;
  @Input() index: number;

  constructor() { }

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    event.dataTransfer.clearData();
    event.dataTransfer.effectAllowed = "copy"; // only dropEffect='copy' will be dropable
    event.dataTransfer.setData('Text', this.operator.name); // required otherwise doesn't work
    event.stopPropagation();
  }
}
