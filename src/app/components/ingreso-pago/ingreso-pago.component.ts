import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { BdlocalService } from 'src/app/services/bdlocal.service';
import { InterfaceTs } from 'src/app/interfaces/interface.ts';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-ingreso-pago',
  templateUrl: './ingreso-pago.component.html',
  styleUrls: ['./ingreso-pago.component.scss'],
})
export class IngresoPagoComponent  implements OnInit {
 
  agenda: InterfaceTs[]=[];
  private _storage: Storage | null=null;
  nombreServicio!:string;
  fechaFacturacion!:Date;
  montoFacturacion!: number;
  recordatorio!: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    public bdlocalservice: BdlocalService,
    private storage: Storage
  ) { 
    this.retornarAgenda();
   
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  guardar(){
    this.bdlocalservice.guardar(this.nombreServicio,this.fechaFacturacion, this.montoFacturacion,
      this.recordatorio);
  }
  borrarContacto(){
    this.bdlocalservice.borrarContacto(this.nombreServicio);
  }
  retornarAgenda(){
    this.agenda=this.bdlocalservice.retornarAgenda();
  }


  }





