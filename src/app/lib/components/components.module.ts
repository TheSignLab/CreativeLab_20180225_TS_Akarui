import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { MediaImgComponent } from './media-img/media-img.component';
import { LangFooterComponent } from './lang-footer/lang-footer.component';
import { SectionFooterComponent } from './section-footer/section-footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavComponent, MenuComponent, MediaImgComponent, LangFooterComponent, SectionFooterComponent],
  exports: [NavComponent, MenuComponent, MediaImgComponent, LangFooterComponent, SectionFooterComponent]
})
export class ComponentsModule { }
