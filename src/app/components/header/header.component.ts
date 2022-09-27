import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //HEADER-PARAMS
  @Input() h1!: string;
  @Input() text!: string;

  @Input() heroImg!: string;
  @Input() textCenterST5!: any;
  @Input() heroContainer1!: any;
  @Input() mainHeroST3!: any;
  @Input() heroTextST4!: any;

  @Input() showParagraph: boolean = false;
  @Input() paragraphText!: string;
  @Input() imageOvideo: boolean = false;
  @Input() heroHeroST2!: any;

  @Input() heroButtonsST4!: any;
  @Input() button1Text!: string;
  @Input() showDownIco: boolean = false;
  @Input() showDownBtn: boolean = false;
  @Input() showBrowserBtn: boolean = false;
  @Input() button1ST!: any;
  @Input() browserBtnYN: boolean = true;

  @Input() showButton2: boolean = false;
  @Input() button2Text!: string;
  @Input() button2Link!: string;

  @Input() button2ST!: any;
  @Input() showSaleBtn1: boolean = false;
  @Input() textTitleST5!: any;
  @Input() paragraphST5!: any;


  constructor() { }

  ngOnInit(): void {
  }
  shouldHide!: boolean;
  handleImageError(e: any) { e.target.style.display = 'none'; this.shouldHide = true; }
}
