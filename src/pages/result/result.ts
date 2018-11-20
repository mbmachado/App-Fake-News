import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
	private API_URL = 'http://localhost:8100/api';
	public text: string;
  public type: string;
  public response: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public http: Http) {
  	this.text = navParams.get('text');
    this.type = navParams.get('type');
  }

  generateResponse(data) {
    let type; 

    if(data["domain"] != null) {
      type = parseFloat(data["domain"].category_id);
    } else {
      type = parseFloat(data["robot"].fake_news);
    }

    if(type < 1) {
      this.response = "Inconclusivo";
    } else if (type >= 1 && type < 2) {
      this.response = "Notícia Real";
    } else if (type >= 2 && type < 3) {
      this.response = "Notícia Falsa";
    } else if (type >= 3 && type < 4) {
      this.response = "Click Bait";
    } else if (type >= 4 && type < 5) {
      this.response = "Extremamente Tendencioso";
    } else if (type >= 5 && type < 6) {
      this.response = "Sátira";
    } else {
      this.response = "Não é Notícia";
    }
  }

  ionViewDidLoad() {
  	let loader = this.loadingCtrl.create({spinner: "crescent" , content: "Carregando"});
    let alert =  this.alertCtrl.create({title: 'Erro', subTitle: 'Algo não funcionou corretamente', buttons: ['OK']});
  	let headers = new Headers();

  	loader.present();
    headers.append('Content-Type', 'application/json');

    if(this.type == "l") {
      this.http.get(this.API_URL + '/votes?url=' + encodeURI(this.text) + '&title=', {headers}).subscribe(
        (result: any) => {
          this.generateResponse(result.json());
          loader.dismiss();
        },
        (error: any) => {
          loader.dismiss();
          alert.present();
      });
    } else {
      this.http.get(this.API_URL + '/votes_by_content?content=' + encodeURI(this.text), {headers}).subscribe(
        (result: any) => {
          this.generateResponse(result.json());
          loader.dismiss();
        },
        (error: any) => {
          loader.dismiss();
          alert.present();
      });
    }
  }
}
