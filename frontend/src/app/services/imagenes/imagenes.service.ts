// frontend/src/app/services/imagenes.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Imagen, FavoritoRequest } from '../../models/imagenes/imagen.model';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  private apiUrl = 'http://localhost:8000/imagenes';
  private catApiUrl = 'https://api.thecatapi.com/v1';
  private apiKey = 'live_WDRQdQ0FOBqVCs07tlHveeLLu6GJGCekuXvbLBNtWymahUGYniFzLksnAHJfZBYu'

  constructor(private http: HttpClient) { }

  getImagenes(): Observable<Imagen[]> {
    return this.http.get<Imagen[]>(this.apiUrl);
  }

  marcarFavorito(favorito: FavoritoRequest): Observable<any> {
    return this.http.post(`${this.catApiUrl}/favourites`, {
      image_id: favorito.image_id,
      sub_id: 'simon_cat_app'
    }, {
      headers: { 'x-api-key': this.apiKey }
    });
  }

  getFavoritos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.catApiUrl}/favourites`, {
      headers: { 'x-api-key': this.apiKey },
      params: { sub_id: 'simon_cat_app' }
    }).pipe(
      map(favoritos => favoritos.map(fav => ({
        id: fav.id,
        url: fav.image?.url || ''
      })))
    );
  }
}