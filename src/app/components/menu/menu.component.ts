import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  login = {
    text: 'Anmelden',
    backColor: '#fff',
    color: '',
    font: '10px',
    padding: '10px 15px',
  };
  constructor() {}

  ngOnInit(): void {}
}
