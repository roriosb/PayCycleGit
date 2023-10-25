import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AuntenticacionService } from 'src/app/services/auntenticacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm : FormGroup

 
  


  constructor(
    private router: Router, 
    public toastController: ToastController,
    public alertController: AlertController,
   
    public loadingCtrl: LoadingController,
    public formBuilder:FormBuilder,
    public authService:AuntenticacionService
    ) { }

  ngOnInit() {
    this.loginForm =this.formBuilder.group({
      
      correo : ['', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")]],
      pass : ['', [Validators.required, Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]]
    })
  }
  get errorRegistro(){
    return this.loginForm?.controls;
  }
  async ingresar() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    // console.log(this.email + this.password);
    if (this.loginForm.valid) {

      //  await  loading.dismiss();
      const user = await this.authService.loginUsuario(this.loginForm.value.correo, this.loginForm.value.pass).catch((err) => {
        this.presentToast(err)
        console.log(err);
        loading.dismiss();
      })

      if (user) {
        loading.dismiss();
        this.router.navigate(['/home'])
      }
    } else {
      return console.log('Please provide all the required values!');
    }

  }
  

  crearCuenta() {
    this.router.navigate(['/crear']);
  }
  
  reinicioPass(){
    this.router.navigate(['/reiniciar-pass'])
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

