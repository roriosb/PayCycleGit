import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  constructor(
  
    public alertController: AlertController,
    public router: Router,
    public loadingCtrl: LoadingController
  ) {
    
   }

  ngOnInit() {
  }

  datos: any = {
    nombreUsuario: "",
    contrasena: "",
    correo: "",
    numero:""
 
  };

  async presentAlert(titulo: string, message: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async registrar() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...', 
      spinner: 'crescent', 
    });
  
    await loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      if (
         this.datos.nombreUsuario != "" &&
      this.datos.contrasena!= "" &&
      this.datos.correo != "" &&
      this.datos.numero != ""
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
