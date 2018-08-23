import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { OperatorComponent } from './operator/operator.component';
import { ContainerComponent } from './container/container.component';
import { OperatorControlComponent } from './operator-control/operator-control.component';
import { FormsModule } from '@angular/forms';
import { expressions_list } from './expressions';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent,
        ContainerComponent,
        OperatorComponent,
        OperatorControlComponent
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'expression'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('expression');
  }));
  it('should render list of operators', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.operators-list').children.length).toEqual(expressions_list.length);
  }));
});
