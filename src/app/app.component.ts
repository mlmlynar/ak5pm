import { Component } from '@angular/core';
import { ProfileService } from 'src/app/service/storage/profile.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private storage:ProfileService,
    private navCtrl: NavController
  ) {
    this.prveSpustenie();
  }
  async prveSpustenie() {

    const jePrve = await this.storage.get('spustenie');

    if (jePrve == "false") {
      this.navCtrl.navigateRoot('/tabs/profil');
    } else {
      this.navCtrl.navigateRoot('/prve-spustenie');
    }
  }
}
