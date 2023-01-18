import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  rutas = [
    {path: 'home', name: 'Home'},
    {path: 'about', name: 'About'},
    {path: 'posts', name: 'Posts'},
    {path: 'contact', name: 'Contact'}
  ]

  constructor() { }

  ngOnInit(){

  }

}
