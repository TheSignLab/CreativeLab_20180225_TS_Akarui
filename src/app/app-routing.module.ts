import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ServicesComponent } from './views/services/services.component';
import { MethodologyComponent } from './views/methodology/methodology.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ContactComponent } from './views/contact/contact.component';
import { Error404Component } from './views/error404/error404.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'esencia-eclaire',
    component: HomeComponent
  },
  {
    path: 'servicios',
    component: ServicesComponent
  },
  {
    path: 'metodologia',
    component: MethodologyComponent
  },
  {
    path: 'nosotros',
    component: ContactComponent
  },
  {
    path: 'eclaire-artisan',
    component: HomeComponent
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: '/404'
  }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
