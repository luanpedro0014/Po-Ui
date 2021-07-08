import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Cadastro } from '../components/cnpj-list/cnpj-list.models';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  url = 'https://brasilapi.com.br/api/cnpj/v1/10480616000160'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os CNPJ
  getCadastro(): Observable<Cadastro[]> {
    return this.httpClient.get<Cadastro[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um CNPJ pelo id
  getCadastroById(CNPJ: number): Observable<Cadastro> {
    return this.httpClient.get<Cadastro>(this.url + '/' + CNPJ)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um CNPJ
  saveCPNJ(cadastro: Cadastro): Observable<Cadastro> {
    return this.httpClient.post<Cadastro>(this.url, JSON.stringify(cadastro), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
    }

  // atualiza um CNPJ
  updateCadastro(cadastro: Cadastro): Observable<Cadastro> {
    return this.httpClient.put<Cadastro>(this.url + '/' + cadastro.Id, JSON.stringify(cadastro), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um CNPJ
  deleteCNPJ(cadastro: Cadastro) {
    return this.httpClient.delete<Cadastro>(this.url + '/' + cadastro.CNPJ, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}

function cadastro(cadastro: any): any {
}
