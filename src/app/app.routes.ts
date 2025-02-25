import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [

  {path: 'inicio', component: InicioComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'conocenos', component: ConocenosComponent},
  {path: 'dashboard', component: DashboardComponent}


];
