import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesService } from '../../../../services/imagenes/imagenes.service';
import { Imagen } from '../../../../models/imagenes/imagen.model';

@Component({
  selector: 'app-imagenes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagenes-list.component.html',
  styleUrl: './imagenes-list.component.css'
})
export class ImagenesListComponent implements OnInit {
  imagenes: Imagen[] = [];
  favoritos: Set<string> = new Set(); //Para trackear favoritos en la UI
  cargandoFavoritos: Set<string> = new Set(); //Para mostrar loading

  constructor(private imagenesService: ImagenesService) {}

  ngOnInit(): void {
    this.cargarImagenes();
  }

  cargarImagenes(): void {
    this.imagenesService.getImagenes().subscribe({
      next: (imagenes) => {
        this.imagenes = imagenes;
      },
      error: (error) => {
        console.error('Error cargando imágenes:', error);
      }
    });
  }

  marcarFavorito(imagen: Imagen): void {
    // Mostrar loading
    this.cargandoFavoritos.add(imagen.id);
    
    this.imagenesService.marcarFavorito({ image_id: imagen.id }).subscribe({
      next: (response) => {
        console.log('Imagen marcada como favorita:', response);
        this.favoritos.add(imagen.id); // Agregar a favoritos locales
        this.cargandoFavoritos.delete(imagen.id); // Quitar loading
      },
      error: (error) => {
        console.error('Error marcando favorito:', error);
        this.cargandoFavoritos.delete(imagen.id); // Quitar loading incluso en error
      }
    });
  }

  esFavorito(imageId: string): boolean {
    return this.favoritos.has(imageId);
  }

  estaCargando(imageId: string): boolean {
    return this.cargandoFavoritos.has(imageId);
  }
}