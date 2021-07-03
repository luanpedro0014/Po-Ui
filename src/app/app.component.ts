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
    { label: 'Home', action: this.onClick.bind(this) },
    { label:'Consulta Cnpj',action:()=>this.router.navigate(['cnpj-list'])},
    { label:'Fornecedor',action:()=>this.router.navigate(['fornecedor-list'])}



  ];


  private onClick() {
    alert('Clicked in menu item')
  }


}

