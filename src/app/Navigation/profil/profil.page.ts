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
  async ionViewDidEnter(){
    const storedMeno = await this.storage.get('meno');
    const storedPriezvisko = await this.storage.get('priezvisko');
    const storedTelefon = await this.storage.get('telefon');
    const storedEmail = await this.storage.get('email');
    if(storedMeno){
      this.meno = storedMeno;
    }
    if(storedPriezvisko){
      this.priezvisko = storedMeno;
    }
    if(storedEmail){
      this.email = storedMeno;
    }
    if(storedTelefon){
      this.telefon = storedMeno;
    }
  }
  save(){
     
     
     if(storedMeno){

     }
    
     
      this.storage.set('history',JSON.stringify(this.historyArray));
  }
}
