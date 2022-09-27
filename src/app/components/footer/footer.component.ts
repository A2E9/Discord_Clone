import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  login = {
    text: 'Anmelden',
    backColor: '#404eed',
    color: '#fff',
    padding: '7px 14px',
    fontWeight: '400',
  };
  constructor() {}

  ngOnInit(): void {}
}
