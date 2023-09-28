import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { IngresoPagoComponent } from 'src/app/components/ingreso-pago/ingreso-pago.component';
import { VerPagoComponent } from 'src/app/components/ver-pago/ver-pago.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,

    children:[
      {
        path:'verPago',
        component: VerPagoComponent
      },
      {
        path:'ingresoPago',
        component: IngresoPagoComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
