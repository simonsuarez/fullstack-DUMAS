import { Component, OnInit } from '@angular/core';
import { ImagenesService } from '../../../../services/imagenes/imagenes.service';
import { Imagen } from '../../../../models/imagenes/imagen.model';

@Component({
  selector: 'app-imagenes-list',
  templateUrl: './imagenes-list.component.html',
  styleUrl: './imagenes-list.component.css'
})
export class ImagenesListComponent implements OnInit {
  imagenes: Imagen[] = [];
  
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

  marcarFavorito(imageId: string): void {
    this.imagenesService.marcarFavorito({ image_id: imageId }).subscribe({
      next: (response) => {
        console.log('Imagen marcada como favorita:', response);
        alert('Imagen marcada como favorita!');
      },
      error: (error) => {
        console.error('Error marcando favorito:', error);
      }
    });
  }
}