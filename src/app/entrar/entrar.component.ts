import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLoginModel } from '../model/UsuarioLoginModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  UsuarioLoginModel: UsuarioLoginModel = new UsuarioLoginModel

  constructor(
    private authSevice: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar() {
    this.authSevice.entrar(this.UsuarioLoginModel).subscribe((resp:UsuarioLoginModel)=>{
      this.UsuarioLoginModel = resp

      environment.token = this.UsuarioLoginModel.token
      environment.nome = this.UsuarioLoginModel.nome
      environment.foto = this.UsuarioLoginModel.foto
      environment.id = this.UsuarioLoginModel.id

      // console.log(environment.token)
      // console.log(environment.nome)
      // console.log(environment.foto)
      // console.log(environment.id)

      this.router.navigate(['/inicio'])
    }, erro=>{
      if(erro.status == 500){
        alert('Usuário ou Senha estão incorretos!')
      }
    })
  }

}
