import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { BdlocalService } from 'src/app/services/bdlocal.service';
import { InterfaceTs } from 'src/app/interfaces/interface.ts';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-ver-pago',
  templateUrl: './ver-pago.component.html',
  styleUrls: ['./ver-pago.component.scss'],
})
export class VerPagoComponent  implements OnInit {
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
  retornarAgenda(){
    this.agenda=this.bdlocalservice.retornarAgenda();
  }


  ngOnInit() {}

}
