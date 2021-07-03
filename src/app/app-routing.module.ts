import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/cnpj-list/cnpj-list.component';
import { FornecedorListComponent } from './components/fornecedor-list/fornecedor-list.component';

const routes: Routes = [
{path:'cnpj-list', component:ClientListComponent},
{path:'fornecedor-list', component:FornecedorListComponent},
{path:'client-from', component:ClientFormComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
