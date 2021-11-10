import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  UsuarioModel: UsuarioModel = new UsuarioModel
  confirmarSenha: string
  tipoUser: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event:any) {
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event:any) {
    this.tipoUser = event.target.value
  }

  cadastrar() {
    this.UsuarioModel.tipo = this.tipoUser

    if(this.UsuarioModel.senha != this.confirmarSenha){
      alert('As senhas estão incorretas')
    } else {
      this.authService.cadastrar(this.UsuarioModel).subscribe((resp: UsuarioModel) => {
        this.UsuarioModel = resp;
        this.router.navigate(['/entrar']);
        alert('Cadastro realizado com sucesso!')
      })
    }
  }
}
