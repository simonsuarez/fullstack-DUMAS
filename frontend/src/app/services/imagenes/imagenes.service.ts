// frontend/src/app/services/imagenes.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Imagen, FavoritoRequest } from '../../models/imagenes/imagen.model';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  private apiUrl = 'http://localhost:8000/imagenes';

  constructor(private http: HttpClient) { }

  getImagenes(): Observable<Imagen[]> {
    return this.http.get<Imagen[]>(this.apiUrl);
  }

  marcarFavorito(favorito: FavoritoRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/favoritos`, favorito);
  }
/*
  getFavoritos(): Observable<Imagen[]> {
    return this.http.get<Imagen[]>(`${this.apiUrl}/favoritos`);
  }
*/

  // Agrega este método al servicio existente
  getFavoritos(): Observable<any[]> {
    // Por ahora retornamos un array vacío - en producción conectarías con TheCatAPI
    return of([
      { id: '1', url: 'https://cdn2.thecatapi.com/images/853.gif' },
      { id: '2', url: 'https://cdn2.thecatapi.com/images/bh4.jpg' },
      { id: '3', url: 'https://cdn2.thecatapi.com/images/bj4.png' },
      { id: '4', url: 'https://cdn2.thecatapi.com/images/bor.jpg' },
      { id: '5', url: 'https://cdn2.thecatapi.com/images/cf7.jpg' }
    ]);
  }
}