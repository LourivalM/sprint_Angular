import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class loginService {
  http=inject(HttpClient);

  login(nome: any, senha: any, manterConectado: boolean): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:3001/login', { nome, senha })
    .pipe( 
      tap( 
        (user)=> {
        sessionStorage.setItem('email', user.email);
        // GEMINI_MODIFICATION: Lógica para persistência de login.
        // Se 'manterConectado' for true, o email é salvo no localStorage para persistir entre sessões.
        // Caso contrário, o localStorage é limpo para garantir que o login não persista.
        if (manterConectado) {
          localStorage.setItem('email', user.email);
        } else {
          localStorage.removeItem('email');
        }
        }
      )
    )
  }

  logout(): void {
    sessionStorage.removeItem('email');
    localStorage.removeItem('email');
    // Redirecionar para a página de login. O Router precisa ser injetado aqui.
    // Para evitar um erro de dependência circular, faremos isso no componente que chama o logout.
  }
}
