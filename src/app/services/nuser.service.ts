import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuserService {
  private bduser= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  //Toma los usuarios desde el back, esta funcion tambien puede ser usada para buscar usuario
  getUsuarios(cadena: string, numemp: string): Observable<any> {
    return this.http.post(`${this.bduser}/data/usuarios`, { cadena, numemp });
  }

  modificarUser(numemp: string, nombre: string, turno: number, estado: number): Observable<any> {
    return this.http.post(`${this.bduser}/data/modificar`, { numemp, nombre, turno, estado });
  }

}
