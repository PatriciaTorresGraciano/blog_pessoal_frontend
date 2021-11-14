import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLoginModel } from '../model/UsuarioLoginModel';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(UsuarioLoginModel: UsuarioLoginModel): Observable<UsuarioLoginModel>{
    return this.http.post<UsuarioLoginModel>('https://api-blog-patricia.herokuapp.com/usuarios/logar', UsuarioLoginModel)
  }

  cadastrar(UsuarioModel: UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>('https://api-blog-patricia.herokuapp.com/usuarios/cadastrar', UsuarioModel)
  }

  logado(){
    let ok:boolean = false

    if(environment.token !=''){
      ok = true
    }
    return ok
  }
}
