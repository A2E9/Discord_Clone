import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string 
  @Input() backColor!: string 
  @Input() color!: string;
  @Input() font!: string;
  @Input() showDownIco: boolean = false;
  @Input() padding!: string;
  @Input() fontWeight!: string;
  @Input() showBtn: boolean = false;
  @Input() showSaleBtn1: boolean= false;
  @Input() buttonST!: any;


  constructor() { }

  ngOnInit(): void {

  }

  onClick(){
    console.log("WORKS");
  }

}
