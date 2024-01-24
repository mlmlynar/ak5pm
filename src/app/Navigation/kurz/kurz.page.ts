import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyAPIService } from 'src/app/service/api/currency-api.service';
import { HistoryServiceService } from 'src/app/service/storage/history.service';

@Component({
  selector: 'app-kurz',
  templateUrl: './kurz.page.html',
  styleUrls: ['./kurz.page.scss'],
})
export class KurzPage implements OnInit {

  
  hodnota: number = 1
  zmeny: String = 'EUR'
  domeny: String = 'CZK'
  currencyOutput$: Observable<any> = this.apiService.getCurrency("","");
  historyArray: Array<String> = []
  
  constructor(
    private apiService: CurrencyAPIService,
    private storage:HistoryServiceService
    ) { }

  async ngOnInit() {
  }
  async ionViewDidEnter() {
    const storedData = await this.storage.get('history');
    if(storedData){ 
      this.historyArray = JSON.parse(storedData);
    }
  }
 
  preved(){
    console.log(this.hodnota + ' ' + this.zmeny + ' ' + this.domeny + ' = ' + this.currencyOutput$);
    this.currencyOutput$ = this.apiService.getCurrency(this.zmeny,this.domeny)

    this.currencyOutput$.subscribe(data =>{
      let poPrevode   = data.conversion_rate * this.hodnota;
      let historyItem = `${this.hodnota} ${this.zmeny} | ${poPrevode} ${this.domeny} || Kurz : ${data.conversion_rate}`;
      console.log(historyItem);
      this.historyArray.unshift(historyItem);
      this.storage.set('history',JSON.stringify(this.historyArray));
    });
    
    
  }

}
