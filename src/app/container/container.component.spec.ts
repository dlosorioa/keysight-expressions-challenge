import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { ContainerComponent } from './container.component';
import { OperatorComponent } from '../operator/operator.component';
import { Operator } from '../operator';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  function operatorCallback(x, y, z) {
    return x + y + z;
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        ContainerComponent,
        OperatorComponent
      ]
    })
    .compileComponents();
  }));

  describe('ContainerComponent without operator', () => {

    beforeEach(() => {
      fixture = TestBed.createComponent(ContainerComponent);
      component = fixture.componentInstance;
      component.data = {
        value: 5
      };
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render input', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('input')).toBeTruthy();
    }));
  });

  describe('ContainerComponent with operator', () => {

    beforeEach(() => {
      fixture = TestBed.createComponent(ContainerComponent);
      component = fixture.componentInstance;
      component.operator = new Operator(1, operatorCallback);
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render operator item', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.operator')).toBeTruthy();
    }));
  });
});
