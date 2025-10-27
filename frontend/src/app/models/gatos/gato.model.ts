export interface Gato {
  id?: number;
  nombre: string;
  raza: string;
  edad: number;
  foto: string;
}

export interface GatoCreate {
  nombre: string;
  raza: string;
  edad: number;
  foto: string;
}