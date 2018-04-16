import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServicesComponent],
  exports: [ServicesComponent]
})
export class ServicesModule { }
