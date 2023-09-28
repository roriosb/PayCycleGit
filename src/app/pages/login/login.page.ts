import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 
  user = {
    usuario: "",
    password: ""
  }
  field: string = "";

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  ingresar() {
    console.log(this.user)
    if (this.validateModel(this.user)) {
      this.presentToast("bottom", "Bienvenido " + this.user.usuario);
      // Se declara e instancia un elemento de tipo NavigationExtras
      let navigationextras: NavigationExtras = {
        state: {
          user: this.user // Al state le asigno un objeto con clave valor
        }
      }
      this.router.navigate(['/home'], navigationextras);
    } else {
      this.presentToast("bottom", "Falta ingresar " + this.field, 3500);
    }
  }

  validateModel(model: any) {
    // Recorro todas las entradas que me entrega Object entries y obtengo su clave, valor
    for (var [key, value] of Object.entries(model)) {
      // Si un valor es "" se retornará false y se avisará de lo faltante
      if (value == "") {
        // Se asigna el campo faltante
        this.field = key;
        // Se retorna false
        return false;
      }
    }
    return true;
  }

  async presentToast(position: 'bottom',
    message: string,
    duration?: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration ? duration : 2000,
      position: position,
    });

    await toast.present();
  }

  crearCuenta() {
    this.router.navigate(['/crear']);
  }
  
}

