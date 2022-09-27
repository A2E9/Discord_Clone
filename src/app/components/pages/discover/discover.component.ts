import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent implements OnInit {
  h1 = 'Find your community on discord';
  text = "From gaming, to music, to learning, there's a place for you.";

  heroContainer1 = {
    'align-items': 'left',
    'background-color': '#5637f1',
  };
  heroHeroST2 = {
    justifyContent: 'center',
    'font-style': 'italic',
  };
  mainHeroST3 = {
    height: '130px',
  };
  heroTextST4 = {
    'text-align': 'center',
  };
  textCenterST5 = {
    padding: '10px 0',
  };

  boolCheck: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  button1Text = 'Make Your Community Public';
  button2Text = 'Join Discord';

  button1ST = {
    'justify-content': 'center',
    "padding": '19px 120px',
    'font-size': '24px',
    'background-color': '#24252e',
    "color": '#fffffe',
    'text-align': 'center',
    'text-decoration': 'none',
    'line-height': '25px',
    "transition": '0.2s',
    'transition-timing-function': 'ease-in-out',
  };

  bntStyle: string = 'btn-default';
  check: boolean = false;
  submit() {
    this.check = !this.check;

    this.bntStyle = this.check ? 'btn-change' : 'btn-default';
  }

  boolC() {
    this.boolCheck = !this.boolCheck;
  }
}
