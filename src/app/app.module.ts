import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { MnFullpageModule } from 'ngx-fullpage';

import { ComponentsModule } from "./lib/components/components.module";

import { HomeModule } from "./views/home/home.module";
import { NotFoundModule } from "./views/not-found/not-found.module";

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, MnFullpageModule.forRoot(), // Don't forget to call .forRoot() static method,
  ComponentsModule, 
  HomeModule, 
  NotFoundModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
