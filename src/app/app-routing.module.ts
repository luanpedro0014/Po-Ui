import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './components/cnpj-list/cnpj-list.component';
import { FornecedorListComponent } from './components/fornecedor-list/fornecedor-list.component';

const routes: Routes = [
{path:'cnpj-list', component:ClientListComponent},
{path:'fornecedor-list', component:FornecedorListComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
