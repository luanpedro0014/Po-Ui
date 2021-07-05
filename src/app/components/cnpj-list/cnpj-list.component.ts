
import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';




@Component({
  selector: 'app-client-list',
  templateUrl: './cnpj-list.component.html',
  styleUrls: ['./cnpj-list.component.scss']
})
export class ClientListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
      placeholder: ''
    },
  ]

}
