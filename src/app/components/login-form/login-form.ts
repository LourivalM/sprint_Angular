import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { loginService } from '../../service/login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  loginService = inject(loginService);
  router = inject(Router);


  loginForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    // GEMINI_MODIFICATION: Adicionado FormControl para o checkbox 'Manter conectado'
    manterConectado: new FormControl(false)
  });

 onSubmitLogin() {
    // GEMINI_MODIFICATION: Desestruturação para incluir 'manterConectado'
    const { nome, senha, manterConectado } = this.loginForm.value;
    if (!this.loginForm.valid || !nome || !senha){
      alert('Por favor, preencha os campos de nome e senha corretamente.');
      return;
    }
    // GEMINI_MODIFICATION: Passando o valor de 'manterConectado' para o serviço de login
    this.loginService.login(nome, senha, manterConectado || false).subscribe
    ({ 
      error: (err) => {
        if (err.status === 401) {
          alert('O nome de usuário ou senha está incorreto ou não foi cadastrado!')
          return;
        }
        
          alert('erro interno do servidor tente novamente mais tarde!')
        
      },
      next: () => {
        this.router.navigate(['/home'])
      }
    })
    
  }
}
