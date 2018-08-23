import { Component, Input, Output, EventEmitter, HostListener, OnInit,
  OnChanges, SimpleChanges, SimpleChange,  AfterContentChecked  } from '@angular/core';
import { Operator } from '../operator';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css'],
  inputs: ['operator: Operator', 'data: any'],
  outputs: ['update', 'remove']
})
export class OperatorComponent implements OnInit,  OnChanges  {
  @Input() operator: Operator;
  @Input() data: any;
  @Output() update = new EventEmitter<boolean>();
  @Output() remove = new EventEmitter<boolean>();
  params: number[];

  constructor() { }

  ngOnInit() {
    this.getParams();
  }

  getParams() {
    if (this.operator) {
      this.operator.getParams()
          .subscribe(params => this.params = params);
    } else {
      this.params = [];
    }
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    event.dataTransfer.clearData();
    event.dataTransfer.effectAllowed = "move"; // only dropEffect='copy' will be dropable
    event.dataTransfer.setData('Text', this.operator.name); // required otherwise doesn't work
    event.stopPropagation();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.operator.currentValue) {
      this.getParams();
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event) {
    this.remove.emit(true);
    event.preventDefault();
    event.stopPropagation();
  }

  onUpdate() {
    let value = this.operator.calculate();
    if (value !== this.data.value) {
      this.data.value = value;
      this.update.emit(true);
    }
  }
}
