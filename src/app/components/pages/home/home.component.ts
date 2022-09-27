import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  h1 = 'Stell dir einen Ort vor, …';
  text =
    '… an dem du Teil eines Schulklubs, einer Gaming-Gruppe oder einer weltweiten Kunst-Community sein kannst. Ein Ort, an dem du einfach Zeit mit Freunden verbringen kannst. Ein Ort, an dem es leicht ist, sich jederzeit zu treffen und zu unterhalten.';
  showDownIco = true;
  showBrowserBtn = true;
  button1Text = 'Download für Windows';
  button2Text = 'Discord im Browser öffnen';
  backColor = '#5865f2';
  heroContainer1 = {
    background: '#404eed',
    'align-items': 'center',
  };
  textTitleST5 = {
    color: 'white',
    'font-size': '70px',
    'font-weight': 'bold',
    'text-align': 'center',
    'text-transform': 'uppercase',
    'margin-bottom': '30px',
  };

  mainHeroST3 = {
    width: '825px',
  };

  heroTextST4 = {
    'text-align': 'center',
  };

  heroButtonsST4 = {
    'justify-content': 'center',
    'padding-top': '20px',
  };
  button1ST = {
    'justify-content': 'center',
    padding: '16px 32px',
    'font-size': '20px',
    'background-color': 'white',
    color: '#000',
    'text-align': 'center',
    'text-decoration': 'none',
    'line-height': '25px',
    transition: '0.2s',
    'transition-timing-function': 'ease-in-out',
  };

  button2ST = {
    'justify-content': 'center',
    padding: '16px 32px',
    'font-size': '20px',
    'background-color': '#24252e',
    color: '#fffffe',
    'text-align': 'center',
    'text-decoration': 'none',
    'line-height': '25px',
    transition: '0.2s',
    'transition-timing-function': 'ease-in-out',
    'margin-left': '20px',
  };

  button3ST = {
    'justify-content': 'center',
    padding: '16px 32px',
    'margin-top': '20px',
    'font-size': '20px',
    'background-color': '#5865f2',
    color: '#fff',
    'text-align': 'center',
    'text-decoration': 'none',
    'line-height': '25px',
    transition: '0.2s',
    'transition-timing-function': 'ease-in-out',
  };
  downIcoST = {
    color: 'white',
  };

  constructor() {}

  ngOnInit(): void {}

  download() {
    window.open('https://discord.com/api/download?platform=win', '_blank');
  }
}
