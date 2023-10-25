import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuntenticacionService } from 'src/app/services/auntenticacion.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  regForm: FormGroup 
  constructor(
  
    public alertController: AlertController,
    public router: Router,
    public loadingCtrl: LoadingController,
    public formBuilder:FormBuilder,
    public authService:AuntenticacionService,
    private toastController: ToastController

  ) {
    
   }

  ngOnInit(){
    this.regForm =this.formBuilder.group({
      
      correo : ['', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")]],
      pass : ['', [Validators.required, Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]]
    })
  } 

  get errorRegistro(){
    return this.regForm?.controls;
  }
  async registrarse() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
  
    if (this.regForm.valid) {
      const user = await this.authService.registrarUsuario(this.regForm.value.correo, this.regForm.value.pass).catch((err) => {
        this.presentToast(err);
        console.log(err);
        loading.dismiss();
      });
  
      if (user) {
        loading.dismiss();
        this.router.navigate(['/login']);
      }
    } else {
      return console.log('Please provide all the required values!');
    }
  }
  
  

  
  back(){
    this.router.navigate(['/ingreso']);
    }

    async presentToast(message: undefined) {
      console.log(message);
      
      const toast = await this.toastController.create({
        message: message,
        duration: 1500,
        position: 'top',
      });
  
      await toast.present();
    }

}
