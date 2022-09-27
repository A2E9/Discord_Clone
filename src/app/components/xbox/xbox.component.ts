import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xbox',
  templateUrl: './xbox.component.html',
  styleUrls: ['./xbox.component.css'],
})
export class XboxComponent implements OnInit {
  login = {
    text: 'Read More',
    backColor: '#404eed',
    color: '#fff',
    padding: '7px 14px',
    fontWeight: '400',
  };
  constructor() {}

  ngOnInit(): void {}
}
