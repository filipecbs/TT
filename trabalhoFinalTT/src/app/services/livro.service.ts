import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LivroService {

    apiUrl: string = "http://localhost:8000/api/"

    httpHeaders: any = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    httpHeadersDois: any = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('userToken')
        }
    }

    listaLivro(): Observable<any> {
      return this.HttpClient.get( this.apiUrl + 'listaLivros', this.httpHeaders);
    }

    livrosVenda() {
        return this.HttpClient.get(this.apiUrl + 'listaLivroTrue/', this.httpHeaders);
    }

    livrosCompra() {
        return this.HttpClient.get(this.apiUrl + 'listaLivroFalse/', this.httpHeaders);
    }

    showLivro(id: number): Observable<any> {
        return this.HttpClient.get(this.apiUrl + 'mostraLivro/' + id, this.httpHeaders);
    }

    criaLivro(form): Observable<any> {
        this.httpHeaders.headers["Authorization"] = 'Bearer ' + localStorage.getItem('userToken');
        return this.HttpClient.post(this.apiUrl + 'criaLivro', form, this.httpHeadersDois);
    }

    mostraOferta(id): Observable<any> {
        return this.HttpClient.get(this.apiUrl + 'mostraOferta/' + id, this.httpHeaders);
    }

    compraLivro(id): Observable<any> {
        this.httpHeaders.headers["Authorization"] = 'Bearer ' + localStorage.getItem('userToken');
        return this.HttpClient.put(this.apiUrl + 'compraLivro/' + id, this.httpHeaders);
    }

    constructor(public HttpClient: HttpClient) { }
}
