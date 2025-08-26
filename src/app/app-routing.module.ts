import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { ReportesactivosComponent } from './components/reportesactivos/reportesactivos.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'cuentas', component: CuentasComponent},
  { path: 'reportes', component: ReportesactivosComponent},
  { path: 'estadisticas', component: EstadisticasComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirige a /login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
