import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from '../../service/login'; // Importar o loginService

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  router = inject(Router);
  // GEMINI_MODIFICATION: Injetado loginService para funcionalidade de logout
  loginService = inject(loginService); 

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  // GEMINI_MODIFICATION: Implementado método logout para limpar sessão e redirecionar
  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']); 
  }
}