import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  

  toppingList: string[] = ['Macho', 'Hembra'];
  constructor() { }

  ngOnInit(): void {
  }

}
