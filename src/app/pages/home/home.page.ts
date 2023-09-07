import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  datos: any = {
  
    nombreServicio: "",
    fechaFacturacion: "",
    montoFacturacion: "",
    recordatorio: ""
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    public loadingCtrl: LoadingController
  ) {
  
  }

  async presentAlert(titulo: string, message: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async guardar() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...', 
      spinner: 'crescent', 
    });
  
    await loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      if (
        this.datos.nombreServicio != "" &&
        this.datos.fechaFacturacion != "" &&
        this.datos.montoFacturacion != "" &&
        this.datos.recordatorio != ""
      ) {
        this.presentAlert("Datos guardados", "Los datos se han guardado correctamente.");
      } else {
        this.presentAlert("Datos Incompletos", "Por favor, complete todos los campos antes de guardar.");
      }
    }, 500); 
  }

    back(){
  
      this.router.navigate(['/ingreso']);
    }

  }
  

