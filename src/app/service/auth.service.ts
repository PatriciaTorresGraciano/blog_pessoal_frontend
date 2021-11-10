import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.post<UsuarioLoginModel>('https://api-blog-patricia.herokuapp.com/swagger-ui/usuarios/logar', UsuarioLoginModel)
  }

  cadastrar(UsuarioModel: UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>('https://api-blog-patricia.herokuapp.com/swagger-ui/usuarios/cadastrar', UsuarioModel)

  }
}
