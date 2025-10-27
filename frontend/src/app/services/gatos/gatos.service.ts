// frontend/src/app/services/gatos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gato, GatoCreate } from '../../models/gatos/gato.model';

@Injectable({
  providedIn: 'root'
})
export class GatosService {
  private apiUrl = 'http://localhost:8000/gatos';

  constructor(private http: HttpClient) { }

  getGatos(): Observable<Gato[]> {
    return this.http.get<Gato[]>(this.apiUrl);
  }

  getGato(id: number): Observable<Gato> {
    return this.http.get<Gato>(`${this.apiUrl}/${id}`);
  }

  createGato(gato: GatoCreate): Observable<Gato> {
    return this.http.post<Gato>(this.apiUrl, gato);
  }

  updateGato(id: number, gato: GatoCreate): Observable<Gato> {
    return this.http.put<Gato>(`${this.apiUrl}/${id}`, gato);
  }

  deleteGato(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}