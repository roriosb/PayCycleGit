import { Injectable } from '@angular/core';
import  firebase  from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuntenticacionService {

  constructor(public ngFireAuth: AngularFireAuth) { }

  async registrarUsuario(correo:string, pass:string){
    return await this.ngFireAuth.createUserWithEmailAndPassword(correo, pass)
  }
  async loginUsuario(correo:string, pass:string){
  return await this.ngFireAuth.signInWithEmailAndPassword(correo, pass)

}
  async reiniciarPass(correo:string){
    return await this.ngFireAuth.sendPasswordResetEmail(correo)
  }
  async deslogin(){
    return await this.ngFireAuth.signOut()
  }
  async getUsuario(){
    return await this.ngFireAuth.currentUser
  }
}
