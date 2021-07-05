import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';


@Component({
  selector: 'app-client-list',
  templateUrl: './cnpj-list.component.html',
  styleUrls: ['./cnpj-list.component.scss']
})
export class ClientListComponent implements OnInit {
  ngOnInit(): void {
  }


  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'CNPJ',
      required: true,
      minLength: 14,
      maxLength: 14,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'É obrigatório o preenchimento de um CNPJ '
    },
  ]

}
