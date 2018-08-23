import { Injectable } from '@angular/core';
import { Operator } from './operator';
import { expressions_list } from '../expressions';

@Injectable({
  providedIn: 'root'
})
export class OperatorsListService {
  list: any[] = [];
  map = {};

  constructor() {
    this.list = expressions_list;
    this.list.forEach((fn, ndx) => {
      console.log(ndx);
      this.map[fn.name] = {
        callback: fn,
        type: ndx
      };
    });
  }

  getList(): any[] {
    return this.list;
  }

  getByName(name: string): Operator {
    return new Operator(this.map[name].type, this.map[name].callback);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/