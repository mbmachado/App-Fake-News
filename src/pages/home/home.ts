import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultPage } from '../result/result';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToResultPage(_text, _type) {
  	_text = _text || "";

  	this.navCtrl.push(ResultPage, {
  		text: _text, 
      type: _type
  	});
  }
}
