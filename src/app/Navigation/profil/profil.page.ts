import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor() { }

  meno: String = ''
  priezvisko: String = ''
  telefon: String = ''
  email: String =''

  ngOnInit() {
  }
  
  save(){
    
  }
}
