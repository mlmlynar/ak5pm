import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/storage/profile.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.page.html',
  styleUrls: ['./profile-form.page.scss'],
})
export class ProfileFormPage implements OnInit {

  constructor(
    private storage:ProfileService,
    private navCtrl: NavController
    ) { }
  
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
      this.priezvisko = storedPriezvisko;
    }
    if(storedEmail){
      this.email = storedEmail;
    }
    if(storedTelefon){
      this.telefon = storedTelefon;
    }
  }
  save(){ 
    this.storage.set('meno',this.meno);
    this.storage.set('priezvisko',this.priezvisko);
    this.storage.set('telefon',this.telefon);
    this.storage.set('email',this.email);

    this.navCtrl.navigateBack('/tabs/profil');
  }
  back(){
    this.navCtrl.navigateBack('/tabs/profil');
  }
}
