import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CadastroService{
  elementAPiUrl ='http://localhost:3000/cadastro'
constructor(private http:HttpClient){}

getElements(): Observable<CadastroService[]>{
return this.http.get<CadastroService[]>(this.elementAPiUrl);


}


}
