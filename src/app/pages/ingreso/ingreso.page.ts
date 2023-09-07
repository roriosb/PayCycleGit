import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {
  user = {
    usuario: "",
    password: ""
  };

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController
    ) {} 

  ngOnInit() {}

  async ingresarPago() {
    console.log(this.user);
  
    let navigationextras: NavigationExtras = {
      state: {
        user: this.user 
      }
    };
  
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...', 
      spinner: 'crescent', 
    });
  
    await loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      this.router.navigate(['/home']); 
    }, 1000); 
  }
  async ingresarVista() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...', 
      spinner: 'crescent', 
    });
  
    await loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      
      this.router.navigate(['/vista']);
    }, 1000); 
  }

  back(){
  
    this.router.navigate(['/login']);
  }
  }


