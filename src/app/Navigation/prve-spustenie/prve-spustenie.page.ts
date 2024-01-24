import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProfileService } from 'src/app/service/storage/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-prve-spustenie',
  templateUrl: './prve-spustenie.page.html',
  styleUrls: ['./prve-spustenie.page.scss'],
})
export class PrveSpusteniePage implements OnInit {

 
  profilForm: FormGroup;
  constructor(
    private storage:ProfileService,
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) { 
    this.profilForm = this.formBuilder.group({
      meno: ['', Validators.required],
      priezvisko: ['', Validators.required],
      telefon: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  
  

  ngOnInit() {
  }
  async sendForm(){
    if (this.profilForm && this.profilForm.valid) {
      const menoControl = this.profilForm.get('meno');
      const priezviskoControl = this.profilForm.get('priezvisko');
      const telefonControl = this.profilForm.get('telefon');
      const emailControl = this.profilForm.get('email');
      
      if (menoControl && priezviskoControl && telefonControl && emailControl) {
        await this.storage.set('meno',menoControl.value);
        await this.storage.set('priezvisko',priezviskoControl.value);
        await this.storage.set('telefon',telefonControl.value);
        await this.storage.set('email',emailControl.value);
        
        let jePrve = await this.storage.get('prveSpustenie');
        console.log(jePrve);

        
        this.navCtrl.navigateRoot('/tabs/profil');
      }
      
      
    }
  }

}
