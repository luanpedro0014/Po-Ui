import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private router:Router){

  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action:()=>this.router.navigate(['']) },
    { label:'Consulta Cnpj', action:()=>this.router.navigate(['cnpj-list'])},
    { label:'Fornecedor',action:()=>this.router.navigate(['fornecedor-list'])}



  ];


}

