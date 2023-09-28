import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { IngresoPagoComponent } from 'src/app/components/ingreso-pago/ingreso-pago.component';
import { VerPagoComponent } from 'src/app/components/ver-pago/ver-pago.component';


import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, IngresoPagoComponent, VerPagoComponent]
})
export class HomePageModule {}
