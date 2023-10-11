import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';
import { FlatpickrModule } from 'angularx-flatpickr-wrap';
import 'flatpickr-wrap/dist/l10n/fa';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, FormsModule, FlatpickrModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule { }
