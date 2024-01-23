import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyAPIService } from 'src/app/api/currency-api.service';

@Component({
  selector: 'app-kurz',
  templateUrl: './kurz.page.html',
  styleUrls: ['./kurz.page.scss'],
})
export class KurzPage implements OnInit {

  
  hodnota: number = 1
  zmeny: String = ''
  domeny: String = ''
  currencyOutput$: Observable<any> = this.apiService.getCurrency("","")
  
  constructor(private apiService: CurrencyAPIService) { }

  ngOnInit() {
  }

  preved(){
    console.log(this.hodnota + ' ' + this.zmeny + ' ' + this.domeny + ' = ' + this.currencyOutput$);
    this.currencyOutput$ = this.apiService.getCurrency(this.zmeny,this.domeny)
    
    
  }

}
