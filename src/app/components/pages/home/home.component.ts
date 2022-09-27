import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  h1 ="Stell dir einen Ort vor, …" ;
  text="… an dem du Teil eines Schulklubs, einer Gaming-Gruppe oder einer weltweiten Kunst-Community sein kannst. Ein Ort, an dem du einfach Zeit mit Freunden verbringen kannst. Ein Ort, an dem es leicht ist, sich jederzeit zu treffen und zu unterhalten.";
  showDownIco = true;
  showBrowserBtn=true;
  heroContainer1 = {
    "background": '#404eed',
    "align-items": 'center',
    "padding":'100px',
    

  }
  mainHeroST3 = {
    "width": '825px',}
  heroTextST4= {
    "text-align": 'center'}
    
  
  constructor() { }

  ngOnInit(): void {
      }

}
