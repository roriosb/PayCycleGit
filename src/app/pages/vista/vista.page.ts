import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.page.html',
  styleUrls: ['./vista.page.scss'],
})
export class VistaPage implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  backIngreso(){
    this.router.navigate(['/ingreso']);
    }

}
