import { Component, OnInit} from '@angular/core';
import { ProfileService } from 'src/app/service/storage/profile.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

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
    const jePrve = await this.storage.get('prveSpustenie');
   
    if (!jePrve) {
      this.navCtrl.navigateRoot('/prve-spustenie');
      console.log('je');
      await this.storage.set('prveSpustenie','druhe');
    }
    
    console.log(jePrve);
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
  editProfile(){      
    this.navCtrl.navigateForward('/profile-form');
  }
}
