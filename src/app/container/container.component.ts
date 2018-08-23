import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

import { OperatorsListService } from '../operators-list.service';
import { Operator } from '../operator';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  inputs: ['data'],
  outputs: ['update']
})
export class ContainerComponent {
  @Input() data: any;
  @Output() update = new EventEmitter<boolean>();
  operator: Operator;
  field: boolean = true;
  dragging: boolean = false;

  constructor(private operatorsService: OperatorsListService) { }

  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }

    @HostListener('drop', ['$event'])
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.className == 'dropzone') {
      let name = event.dataTransfer.getData('Text');
      this.operator = this.operatorsService.getByName(name);
      this.data.value = 0;
      this.dragging = false;
      this.update.emit(true);
      event.dataTransfer.clearData();
    }
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(event) {
    if (event.target.className == 'dropzone') {
      this.dragging = true;
      event.stopPropagation();
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event) {
    if (event.target.className == 'dropzone') {
      this.dragging = false;
      event.stopPropagation();
    }
  }

  onRemove() {
    delete this.operator;
  }

  onUpdate() {
    this.update.emit(true);
  }

  onChange() {
    if (!this.operator) {
      this.update.emit(true);
    }
  }
}
