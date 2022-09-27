import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  h1 = "Hol dir          Discord für      jedes Gerät";
  text = "Ein grandioses Abenteuer erwartet dich. Hänge mit deinen Freunden in unserer Desktop-App ab und halte die Konversation auf deinem Mobilgerät am Leben.";
  showDownIco = true;
  showBrowserBtn = false;
  showParagraph = true;
  paragraphText = "Windows 7 oder höher";
  heroImg = "assets/Download/dwHero.svg";
  button1Text="Download für Windows";
  heroContainer1 = {
    background: '#23272a',
    "align-items": 'left',
    "padding-left": '200px',
  }
  mainHeroST3 = {
    "width": '610px',
  }
  heroTextST4 = {
    "text-align": 'left',
  }
  textCenterST5 = {
    padding: '40px 0'
  }
  button1ST = {
    'justify-content': 'left',
    padding: '16px 30px',
    // 'font-weight': '700',
    'font-size': '20px',
    'background-color': '#5865f2',
    color: '#fffffe',
    'text-align': 'center',
    'text-decoration': 'none',
    'line-height': '25px',
    'transition': '0.2s',
    'transition-timing-function': 'ease-in-out',
  }

  button2ST = {
    'justify-content': 'center',
    padding: '22px 32px',
    // 'font-weight': '700',
    'font-size': '20px',
    'background-color': '#24252e',
    color: '#fffffe',
    'text-align': 'center',
    'text-decoration': 'none',
    'line-height': '25px',
    'transition': '0.2s',
    'transition-timing-function': 'ease-in-out',
  }


  constructor() { }

  ngOnInit(): void {
  }

}
