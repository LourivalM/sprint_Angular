import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class Login {
  http=inject(HttpClient);

  login(nome: any, senha: any) {
    return this.http.post<Usuario>('http://localhost:3001/login', { nome, senha });
  }
}
