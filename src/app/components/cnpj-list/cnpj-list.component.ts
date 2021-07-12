import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-list',
  templateUrl: './cnpj-list.component.html',
  styleUrls: ['./cnpj-list.component.scss']
})
export class ClientListComponent implements OnInit {
  private url = 'https://brasilapi.com.br/api/cnpj/v1/'; // api rest fake
  private chamada!: Subscription;
  private headers!: HttpHeaders;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'CNPJ',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: ' É obrigatório o preenchimento do CNPJ'
    },

  ]
   onClick() {
    this.headers = new HttpHeaders();

    this.chamada = this.httpClient.get(this.url + '10480616000160', { headers: this.headers })
      .subscribe((response: any) => {
        alert('CNPJ Cadastrado xx');
      });

   }


}





