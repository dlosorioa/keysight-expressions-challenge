import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { OperatorComponent } from './operator.component';
import { ContainerComponent } from '../container/container.component';
import { OperatorControlComponent } from '../operator-control/operator-control.component';
import { Operator } from '../operator';

function operatorCallback(x, y, z) {

}

describe('OperatorComponent', () => {
  let component: OperatorComponent;
  let fixture: ComponentFixture<OperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        ContainerComponent,
        OperatorComponent,
        OperatorControlComponent
      ]
    })
    .compileComponents();
  }));

  describe('OperatorComponent should be empty without operator', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(OperatorComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render not row', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.row')).toBe(null);
    }));
  });

  describe('OperatorComponent should create operator from input', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(OperatorComponent);
      component = fixture.componentInstance;
      component.operator = new Operator(1, operatorCallback);
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render row', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.row')).toBeTruthy();
    }));

    it('should set header with callback name', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.col.header label').innerHTML).toContain(operatorCallback.name);
    }));

    it('should render row', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('.row app-container').length).toEqual(operatorCallback.length);
    }));
  });
});
