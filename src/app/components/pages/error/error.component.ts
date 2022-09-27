import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  h1 = '▌│█║▌║▌║ ❹ʘ➃ ║▌║▌║█│▌';
  text = '☝♥  ________Ｐᵃģᵉ 𝓷𝑜𝕥 千𝓞𝐮η𝕕________  ♗♨';

  heroContainer1 = {
    'align-items': 'left',
    'background-color': '#5637f1',
    overflow: 'hidden',
  };
  heroHeroST2 = {
    justifyContent: 'center',
    'font-style': 'italic',
  };
  mainHeroST3 = {
    height: '209px',
  };
  heroTextST4 = {
    'text-align': 'center',
  };
  textCenterST5 = {
    padding: '10px 0',
  };
  constructor() {}

  ngOnInit(): void {}
}
