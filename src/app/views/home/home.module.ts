import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnFullpageModule } from 'ngx-fullpage';
import { ComponentsModule} from '../../lib/components/components.module';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,
    MnFullpageModule.forRoot(),
    ComponentsModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
