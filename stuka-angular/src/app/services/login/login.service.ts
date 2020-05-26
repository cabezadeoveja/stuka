import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Usuario } from '../../interfaces/usuario';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public usuario: Usuario
  public token: string = '';

  constructor(private _http: HttpClient) { }

  login( datos ){
    let url = environment.urlApi + '/login'
    return this._http.post( url , datos).pipe(
      map( (data:any)=>{
        /* console.log({id, userDB, token}) */
        this.guardarLocalStorage( data.id,  data.token, data.userDB)

        return true
      })

    )
  }
  guardarLocalStorage(id: string, token: string, usuario: Usuario){
    /* console.log(token) */
    this.token = token;
    this.usuario = usuario;
    localStorage.setItem('id', id);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('token', token);
  }

}
