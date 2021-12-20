import { Injectable } from '@angular/core';
import { User } from '../interfaces/interfaz';
import Cuentas from '../json/cuentas.json';

@Injectable({
  providedIn: 'root'
})
export class ServeService {
  public usuarios: User[] = Cuentas;

  constructor(){
  }

  getUsuarios() {
    return this.usuarios;
  }

  getUserById(id: number) {
    return this.usuarios.find(usuario => usuario.id === id);
  }

  deleteUserById(id: number) {
    return this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
  }

  incrementar(){
    let id = 0;
    this.usuarios.forEach(usuario => {
      if (usuario.id >= id) {
        id = usuario.id +1;
      }
    });
    return id;
  }
  push(usuario: User){
    this.usuarios.push(usuario);
  }
}
