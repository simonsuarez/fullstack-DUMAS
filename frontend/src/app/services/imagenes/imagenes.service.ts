// frontend/src/app/services/imagenes.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  getFavoritos(): Observable<Imagen[]> {
    return this.http.get<Imagen[]>(`${this.apiUrl}/favoritos`);
  }
}