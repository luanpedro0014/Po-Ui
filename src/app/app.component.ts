import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  cadastro ={} as Cadastro;
  cadastros: Cadastro[] | undefined;
  CadastroService: any;

  constructor(private router:Router, CadastroService:CadastroService){

  }
  ngOnInit(): void {

  }
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action:()=>this.router.navigate(['']) },
    { label:'Consulta Cnpj', action:()=>this.router.navigate(['cnpj-list'])},
    { label:'Fornecedor',action:()=>this.router.navigate(['fornecedor-list'])}
  ];

// chama o serviço GET
  getCadastros() {
    this.CadastroService.getCadastro().subscribe((cadastros: Cadastro[]) => {
      this.cadastros = cadastros;
    });
  }

  // deleta um CNPJ
  deleteCNPJ(cadastro: Cadastro) {
    this.CadastroService.deleteCNPJ(cadastro).subscribe(() => {
      this.getCadastros();
    });
  }

  // copia o CNPJ para ser editado.
  editCar(cadastro: Cadastro) {
    this.cadastro = { ...cadastro };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getCadastros();
    form.resetForm();
    this.cadastro = {} as Cadastro;
  }

}

