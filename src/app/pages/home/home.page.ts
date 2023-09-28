import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    /**
   * En el constructor del HomePage se colocan por parametros
   * todas aquellas propiedades con el siguiente formato
   * private = visibilidad
   * activeRoute = identificador
   * ActiveRoute = Tipo de Objeto
   * : Indica que el identificador sera de la clase posterior 
   * a los : puntos
   * 
   */

  constructor(private activateRoute: ActivatedRoute, 
    private router: Router, 
    public alertController:AlertController) {
    // Se llama a la ruta activa y se obtiene sus parametros mediante una suscripción
    
} 
segmentChanged($event:any){
  console.log($event);
  let direccion=$event.detail.value;
  this.router.navigate(['home/'+direccion])
}
back(){
  
  this.router.navigate(['/login']);
}


}

