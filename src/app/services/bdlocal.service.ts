import { Injectable } from '@angular/core';
import { InterfaceTs } from '../interfaces/interface.ts';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BdlocalService {
  agenda: InterfaceTs[]=[];
  private _storage: Storage | null=null;

  constructor( private storage: Storage, public toastController:ToastController) {
    this.Init();
    this.cargarContactos();
   }
   async Init() {
    const storage=await this.storage.create();
    this._storage=storage
  }

  async cargarContactos() {
    const miAgenda= await this.storage.get('agenda');
    if (miAgenda) {
      this.agenda=miAgenda;
    }
  }
  guardar(nombreServicio: string, fechaFacturacion:Date, montoFacturacion:number, recordatorio:string){
    const existe=this.agenda.find(c=>c.strNombreServicio===nombreServicio);
    if (!existe) {
      this.agenda.unshift({strNombreServicio:nombreServicio, dateFechaFacturacion:fechaFacturacion, intMonto:montoFacturacion, strRecordatorio:recordatorio});//permite insertar
      this._storage?.set('agenda', this.agenda);
      this.presentToast("Pago agregado con EXITO")
    }else{
      this.presentToast("Este pago ya EXISTE")
    }
  }
  async borrarContacto(str:string){
    const existe=this.agenda.find(c=>c.strNombreServicio===str);
    if (existe) {
      this.agenda=this.agenda.filter(n=>n.strNombreServicio !== str);
      this._storage?.set('agenda', this.agenda);
      this.presentToast("Pago eliminado con Exito")
    }else{
      this.presentToast("Pago no existe")
    }
  }


  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2500,
      position: 'bottom',
    });

    await toast.present();
  }
  retornarAgenda(){
    return this.agenda;
  }
  

}

