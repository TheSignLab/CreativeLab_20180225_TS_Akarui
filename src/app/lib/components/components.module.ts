import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavComponent, MenuComponent, FooterComponent],
  exports: [NavComponent, MenuComponent, FooterComponent]
})
export class ComponentsModule { }
