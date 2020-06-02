import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  public imagenes: string[] = []

  constructor() { }

  ngOnInit(): void {
    this.construirImagenes();
  }
  construirImagenes(){
    this.imagenes = [];
    for (let index = 1; index <= 6; index++) {
      const fundacion = `assets/img/fundacion-0${index}.jpg`;
      const adopcion = `assets/img/adopcion-0${index}.jpg`;
      
      this.imagenes.push(...[fundacion,adopcion])

    }
    return this.imagenes 
  }
  filtrarImgenes(filtro:string){
    this.imagenes = [];
    this.imagenes = this.construirImagenes().filter( imagen=>{
      return imagen.indexOf(filtro) > -1
    })
  }

}
