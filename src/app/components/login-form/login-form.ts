import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {

  loginForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  });

 onSubmitLogin() {
    const { nome, senha } = this.loginForm.value;
    if (!this.loginForm.valid || !nome || !senha){
      alert('Por favor, preencha os campos de nome e senha corretamente.');
      return;
    }
    console.log('Nome:', nome);
    console.log('Senha:', senha);
    
  }
}
