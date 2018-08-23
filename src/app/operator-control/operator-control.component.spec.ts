import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorControlComponent } from './operator-control.component';
import { Operator } from '../operator';


function operatorCallback(x, y, z) {

}

describe('OperatorControlComponent', () => {
  let component: OperatorControlComponent;
  let fixture: ComponentFixture<OperatorControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OperatorControlComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorControlComponent);
    component = fixture.componentInstance;
    component.operator = new Operator(1, operatorCallback);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render operator controls name', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.operator-item').innerHTML.trim()).toEqual('operatorCallback');
  }));
});
