import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { ClientListComponent } from './components/cnpj-list/cnpj-list.component';
import { FornecedorListComponent } from './components/fornecedor-list/fornecedor-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { PoDynamicModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    FornecedorListComponent,
    ClientFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoDynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
