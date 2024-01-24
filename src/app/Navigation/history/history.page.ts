import { Component, OnInit } from '@angular/core';
import { HistoryServiceService } from 'src/app/service/storage/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  storedData: Array<any> = [];
  
  constructor(private storage: HistoryServiceService) { }

  async ngOnInit() {

        
  }
  async ionViewDidEnter(){

    const storedData = await this.storage.get('history');
    if(storedData){ 
      this.storedData = JSON.parse(storedData);
    }
    
  }

}
