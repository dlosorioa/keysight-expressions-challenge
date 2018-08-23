import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OperatorComponent } from './operator/operator.component';
import { ContainerComponent } from './container/container.component';
import { OperatorControlComponent } from './operator-control/operator-control.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorComponent,
    ContainerComponent,
    OperatorControlComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
