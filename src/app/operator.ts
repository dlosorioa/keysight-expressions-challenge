import { Observable, of } from 'rxjs';
import { Type } from '@angular/core';

export class Operator {
  name: string;
  params: any[] = [];
  total: number = 0;

  constructor(public type: number, public callback: Type<any>) {
    this.name = callback.name;
    for(let i = 0; i < callback.length; i++) {
      this.params.push({i:i, value: 0});
    }
    this.total = 0;
  }

  getParams(): Observable<any[]> {
    return of(this.params);
  }

  calculate() {
    this.total = this.callback.apply(this, this.params.map(item => {
      return item.value;
    }));
    return this.total;
  }
}
