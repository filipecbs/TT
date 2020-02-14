import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = "http://localhost:8000/api/"

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  registrarUser( form ): Observable<any> {
    return this.HttpClient.post( this.apiUrl + 'register', form, this.httpHeaders);
  }
  logarUser( form ): Observable<any> {
    return this.HttpClient.post( this.apiUrl + 'login', form, this.httpHeaders);
  }

  listaUser( ): Observable<any> {
    return this.HttpClient.get( this.apiUrl + 'listaUser', this.httpHeaders);
  }

  mostraUser(id) {
      return this.HttpClient.get( this.apiUrl + 'mostraUser/' + id, this.httpHeaders);
  }

  logout(): Observable<any> {
    console.log(this.httpHeaders);
    this.httpHeaders.headers["Authorization"] = 'Bearer ' + localStorage.getItem('userToken');
    return this.HttpClient.get( this.apiUrl + 'logout', this.httpHeaders );
  }

  registrarComentario( form ): Observable<any> {
    return this.HttpClient.post( this.apiUrl + 'criaComentario', form, this.httpHeaders);
  }

  verHistorico() {
      console.log(this.httpHeaders);
      this.httpHeaders.headers["Authorization"] = 'Bearer ' + localStorage.getItem('userToken');
      return this.HttpClient.get( this.apiUrl + 'listHistorico', this.httpHeaders );
  }

  constructor(public HttpClient: HttpClient) { }
}
