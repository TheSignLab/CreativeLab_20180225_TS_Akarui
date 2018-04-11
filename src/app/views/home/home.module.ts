import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MnFullpageModule } from "ngx-fullpage";


@NgModule({
  imports: [
    CommonModule,
    MnFullpageModule.forRoot()
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
