import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kurz',
  templateUrl: './kurz.page.html',
  styleUrls: ['./kurz.page.scss'],
})
export class KurzPage implements OnInit {

  constructor() { }

  hodnota: String = ''
  zmeny: String = ''
  domeny: String = ''

  ngOnInit() {
  }

  preved(){
    console.log(this.hodnota + ' ' + this.zmeny + ' ' + this.domeny);

  }

}
