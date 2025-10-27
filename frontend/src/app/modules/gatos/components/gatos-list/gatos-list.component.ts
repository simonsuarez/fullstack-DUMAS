// frontend/src/app/modules/gatos/components/gatos-list/gatos-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GatosService } from '../../../../services/gatos/gatos.service';
import { Gato } from '../../../../models/gatos/gato.model';

@Component({
  selector: 'app-gatos-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gatos-list.component.html',
  styleUrl: './gatos-list.component.css'
})
export class GatosListComponent implements OnInit {
  gatos: Gato[] = [];
  
  constructor(private gatosService: GatosService) {}

  ngOnInit(): void {
    this.cargarGatos();
  }

  cargarGatos(): void {
    this.gatosService.getGatos().subscribe({
      next: (gatos) => {
        this.gatos = gatos;
      },
      error: (error) => {
        console.error('Error cargando gatos:', error);
      }
    });
  }

  eliminarGato(id: number): void {
    if (confirm('¿Estás seguro de eliminar este gato?')) {
      this.gatosService.deleteGato(id).subscribe({
        next: () => {
          this.gatos = this.gatos.filter(g => g.id !== id);
        },
        error: (error) => {
          console.error('Error eliminando gato:', error);
        }
      });
    }
  }
}