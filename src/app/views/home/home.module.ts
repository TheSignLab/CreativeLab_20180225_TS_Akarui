import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnFullpageModule } from 'ngx-fullpage';
import { ComponentsModule} from '../../lib/components/components.module';
import { HomeComponent } from './home.component';
import { FullPageDataService } from '../../app.component.service';


@NgModule({
  imports: [
    CommonModule,
    MnFullpageModule.forRoot(),
    ComponentsModule
  ],
  declarations: [HomeComponent],
  providers: [FullPageDataService ],
  exports: [HomeComponent],

})
export class HomeModule { }

