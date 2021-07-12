import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';
import { Cadastro } from './components/cnpj-list/cnpj-list.models';
import { CadastroService } from './service/cadastro.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})






export class AppComponent implements OnInit {

  constructor(private router:Router){

  }
  ngOnInit(): void {

  }
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action:()=>this.router.navigate(['']) },
    { label:'Consulta Cnpj', action:()=>this.router.navigate(['cnpj-list'])},
    { label:'Fornecedor',action:()=>this.router.navigate(['fornecedor-list'])}
  ];


}

