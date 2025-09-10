import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { ReportesactivosComponent } from './components/reportesactivos/reportesactivos.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportesactivosComponent,
    EstadisticasComponent,
    FooterComponent,
    MenuComponent,
    CuentasComponent,
    InicioComponent
    ,LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
