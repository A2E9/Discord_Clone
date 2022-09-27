import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nitro',
  templateUrl: './nitro.component.html',
  styleUrls: ['./nitro.component.css']
})
export class NitroComponent implements OnInit {


  h1 = "Discord                  NITRO";
  text = "Hol gegen eine geringe monatliche Gebühr noch mehr aus Discord raus. Verpass deinen Emojis ein Upgrade, lade größere Dateien hoch, stich in deinen Lieblingsservern hervor und vieles mehr.";
  showSaleBtn1 = true;
  showBrowserBtn = true;
  button1Text = "99,99 $ pro Jahr";
  button2Text="9,99 $ pro Monat"

  heroContainer1 = {
    "align-items": 'left',
  }
  heroHeroST2 = {
    justifyContent: 'left',
    "padding-left": '200px',
    "font-style": 'italic',
  }
  mainHeroST3 = {
    "width": '610px',
  }
  heroTextST4 = {
    "text-align": 'left',
    
  }
  textCenterST5 = {
    padding: '30px 0',
   
  }
  heroButtonsST4 = {
    "flex-direction": 'column',
    
  }
  button1ST = {
    'justify-content': 'left',
    "flex-direction": 'row',
    padding: '16px 40px',
    "margin-bottom": '20px',
    'font-weight': '700',
    "font-style": 'italic',
    'font-size': '20px',
    'background-color': '#23272a',
    color: '#fffffe',
    'text-align': 'center',
    'text-decoration': 'none',
    'line-height': '25px',
    'transition': '0.2s',
    'transition-timing-function': 'ease-in-out',
  }

  button2ST = {
    'justify-content': 'left',
    padding: '16px 40px',
    "margin-bottom": '20px',
    'font-weight': '700',
    'font-size': '20px',
    'background-color': '#23272a',
    color: '#fffffe',
    "font-style": 'italic',
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
